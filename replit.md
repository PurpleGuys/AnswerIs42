# Answer is 42 - IT Consulting Website

## Overview

A premium IT consulting website for "Answer is 42", a boutique firm specializing in project management, governance, and IT delivery. The site features a luxury dark-themed design with violet accents, built as a full-stack application with React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS v4 with CSS variables for theming, dark-first design
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for reveal animations and micro-interactions
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **Build**: Custom esbuild script bundles server for production
- **Development**: tsx for TypeScript execution, Vite dev server with HMR

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Located in `shared/schema.ts` with Zod integration via drizzle-zod
- **Current State**: Basic users table defined, using in-memory storage for development
- **Migrations**: Drizzle Kit manages database migrations in `./migrations`

### API Structure
- **Contact Form**: `POST /api/contact` with rate limiting (5 requests per 15 minutes per IP)
- **Email**: Nodemailer integration for contact form submissions
- **Validation**: Zod schemas for request validation with error transformation

### Key Design Patterns
- **Shared Code**: `shared/` directory contains types and schemas used by both frontend and backend
- **Path Aliases**: `@/` maps to client source, `@shared/` maps to shared directory
- **Component Organization**: UI primitives in `components/ui/`, feature components in `components/home/` and `components/layout/`
- **Animation System**: Reusable `Reveal`, `StaggerContainer`, and `StaggerItem` components for consistent entrance animations

## External Dependencies

### Third-Party Services
- **Email**: Nodemailer for sending contact form emails (requires SMTP configuration)
- **Fonts**: Google Fonts (Inter) loaded via CDN

### Database
- **PostgreSQL**: Required for production, connection via `DATABASE_URL` environment variable
- **Session Store**: connect-pg-simple available for session persistence

### Development Tools
- **Replit Plugins**: Cartographer, dev banner, and runtime error overlay for Replit environment
- **Meta Images**: Custom Vite plugin updates OpenGraph images with deployment URL