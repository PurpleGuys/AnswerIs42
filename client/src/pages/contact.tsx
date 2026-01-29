import { useState } from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainTexture } from "@/components/ui/GrainTexture";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { TechGrid } from "@/components/ui/TechGrid";
import { PageTransition } from "@/components/ui/PageTransition";
import { SpotlightEffect } from "@/components/ui/SpotlightEffect";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal, StaggerContainer, StaggerItem } from "@/lib/animations";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  company: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "contact@is42.fr", href: "mailto:contact@is42.fr" },
  { icon: MapPin, label: "Localisation", value: "France / Remote", href: null },
  { icon: Clock, label: "Disponibilité", value: "Lun - Ven, 9h - 18h", href: null },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      setIsSuccess(true);
      
      if (data.fallback) {
        toast.success("Message reçu. Vous pouvez aussi nous écrire directement à contact@is42.fr");
      } else {
        toast.success("Message envoyé. Nous revenons vers vous rapidement.");
      }
      
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact | Answer is 42 - Consulting IT</title>
        <meta name="description" content="Contactez Answer is 42 pour discuter de vos projets IT. Expertise en gestion de projet, développement Python, SQL, C# et transformation digitale. Réponse sous 48h." />
        <meta name="keywords" content="contact consulting IT, devis projet IT, expert Python SQL, consultant IT Paris" />
        <link rel="canonical" href="https://answeris42.fr/contact" />
        
        <meta property="og:title" content="Contact | Answer is 42" />
        <meta property="og:description" content="Contactez-nous pour discuter de vos projets IT et transformation digitale." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://answeris42.fr/contact" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact | Answer is 42" />
        <meta name="twitter:description" content="Discutons de vos projets IT. Réponse garantie sous 48h." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Answer is 42",
            "url": "https://answeris42.fr/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Answer is 42",
              "email": "contact@is42.fr",
              "areaServed": "France"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background flex flex-col">
        <TechGrid />
        <FloatingShapes />
        <GrainTexture />
        <Navbar />
        
        <PageTransition>
        <SpotlightEffect className="flex-grow">
        <main className="flex-grow pt-28 sm:pt-32 md:pt-40 px-4 sm:px-6 relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 right-10 w-px h-48 bg-gradient-to-b from-primary/20 to-transparent" />
            <div className="absolute bottom-1/3 left-10 w-24 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="mb-8">
              <Breadcrumbs />
            </div>
            <div className="mb-24 md:mb-28">
              <Reveal>
                <p className="text-primary/80 text-xs font-medium tracking-[0.4em] uppercase mb-8" data-testid="text-contact-label">
                  Contact
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 md:mb-8 tracking-tight" data-testid="text-contact-title">
                  Parlons de votre{" "}
                  <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                    projet.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-xl md:text-2xl text-white/50 font-light max-w-xl tracking-wide" data-testid="text-contact-subtitle">
                  Décrivez votre contexte. Réponse sous 24–48h ouvrées.
                </p>
              </Reveal>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-28 pb-16 md:pb-24">
            <div>
              <StaggerContainer className="space-y-10 mb-16">
                {CONTACT_INFO.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-6 group" data-testid={`contact-info-${item.label.toLowerCase()}`}>
                      <div className="w-14 h-14 rounded-sm bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                        <item.icon className="w-6 h-6 text-white/40 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-white/40 uppercase tracking-wider mb-2" data-testid={`text-info-label-${item.label.toLowerCase()}`}>{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-xl text-white hover:text-primary transition-colors" data-testid={`link-contact-${item.label.toLowerCase()}`}>
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-xl text-white/80" data-testid={`text-contact-${item.label.toLowerCase()}`}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              
              <Reveal delay={0.4}>
                <GlowCard>
                  <div className="p-8 md:p-10 border border-white/5 bg-white/[0.01] rounded-sm" data-testid="card-contact-note">
                    <p className="text-white/60 leading-relaxed text-lg" data-testid="text-contact-note">
                      <span className="text-primary font-semibold" data-testid="text-highlight">Premier échange sans engagement.</span>{" "}
                      Nous prenons le temps de comprendre vos enjeux avant toute proposition.
                    </p>
                  </div>
                </GlowCard>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-sm">
                {isSuccess ? (
                  <div className="text-center py-12" data-testid="status-success">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl text-white mb-3 font-medium" data-testid="text-success-title">Message bien reçu</h3>
                    <p className="text-white/50 mb-8" data-testid="text-success-message">Nous revenons vers vous très rapidement.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                      data-testid="button-send-another"
                    >
                      Envoyer un autre message
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70 text-sm" data-testid="label-name">Nom</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Votre nom" 
                                {...field} 
                                className="bg-white/[0.02] border-white/10 focus:border-primary/50 focus:bg-white/[0.04] text-white placeholder:text-white/20 h-12 rounded-sm transition-colors" 
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage data-testid="error-name" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70 text-sm" data-testid="label-email">Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="votre@email.com" 
                                {...field} 
                                className="bg-white/[0.02] border-white/10 focus:border-primary/50 focus:bg-white/[0.04] text-white placeholder:text-white/20 h-12 rounded-sm transition-colors" 
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage data-testid="error-email" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70 text-sm" data-testid="label-company">
                              Société <span className="text-white/30" data-testid="text-optional">(optionnel)</span>
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Votre société" 
                                {...field} 
                                className="bg-white/[0.02] border-white/10 focus:border-primary/50 focus:bg-white/[0.04] text-white placeholder:text-white/20 h-12 rounded-sm transition-colors" 
                                data-testid="input-company"
                              />
                            </FormControl>
                            <FormMessage data-testid="error-company" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70 text-sm" data-testid="label-message">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Décrivez votre projet ou votre besoin..." 
                                {...field} 
                                className="bg-white/[0.02] border-white/10 focus:border-primary/50 focus:bg-white/[0.04] text-white placeholder:text-white/20 min-h-[140px] resize-none rounded-sm transition-colors" 
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage data-testid="error-message" />
                          </FormItem>
                        )}
                      />
                      
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full relative bg-primary hover:bg-primary/90 text-white h-14 rounded-sm text-base font-medium transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                        data-testid="button-submit"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        {isSubmitting ? (
                          <><Loader2 className="w-5 h-5 animate-spin relative" /> <span className="relative">Envoi en cours...</span></>
                        ) : (
                          <>
                            <span className="relative">Envoyer le message</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
                          </>
                        )}
                      </button>
                    </form>
                  </Form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
        </main>
        </SpotlightEffect>
        </PageTransition>
        
        <Footer />
      </div>
    </>
  );
}
