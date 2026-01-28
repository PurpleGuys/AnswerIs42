import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of Array.from(rateLimitStore.entries())) {
    if (now > record.resetAt) {
      rateLimitStore.delete(ip);
    }
  }
}, 60 * 60 * 1000);

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/health", (req, res) => {
    res.status(200).json({ 
      status: "healthy", 
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    });
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const ip = req.ip || req.socket.remoteAddress || "unknown";
      const rateLimit = checkRateLimit(ip);
      
      if (!rateLimit.allowed) {
        return res.status(429).json({
          error: "Trop de requêtes. Veuillez réessayer dans 15 minutes."
        });
      }

      const result = contactSchema.safeParse(req.body);
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({
          error: validationError.message
        });
      }

      const { name, email, company, message } = result.data;

      const smtpConfigured =
        process.env.SMTP_HOST &&
        process.env.SMTP_PORT &&
        process.env.SMTP_USER &&
        process.env.SMTP_PASS &&
        process.env.SMTP_FROM;

      if (smtpConfigured) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT!),
          secure: process.env.SMTP_PORT === "465",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const emailContent = `
Nouveau message de contact depuis Answer is 42

Nom: ${name}
Email: ${email}
${company ? `Société: ${company}` : ""}

Message:
${message}
        `.trim();

        await transporter.sendMail({
          from: process.env.SMTP_FROM,
          to: process.env.CONTACT_EMAIL || "contact@answeris42.fr",
          subject: `Nouveau contact: ${name}`,
          text: emailContent,
        });

        return res.json({
          success: true,
          message: "Message envoyé avec succès"
        });
      } else {
        console.log("\n=== NOUVEAU MESSAGE DE CONTACT ===");
        console.log(`De: ${name} <${email}>`);
        if (company) console.log(`Société: ${company}`);
        console.log(`Message: ${message}`);
        console.log("===================================\n");

        return res.json({
          success: true,
          message: "SMTP non configuré. Pour nous contacter directement : contact@answeris42.com",
          fallback: true
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({
        error: "Une erreur est survenue. Veuillez réessayer."
      });
    }
  });

  return httpServer;
}
