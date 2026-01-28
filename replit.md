# Answer is 42 - IT Consulting Website

## Overview

A premium IT consulting website for "Answer is 42", a boutique firm specializing in project management, governance, and IT delivery. The site features a luxury dark-themed design with violet accents (#7C3AED), built as a full-stack application with React frontend and Express backend.

## Recent Changes (January 2026)

- **Services Page**: Dedicated page with 8 service cards (SQL, Python, C#, Automation, Cloud, Security, BI, Project Management)
- **Approche Page**: Methodology timeline with 4 phases and values section
- **SEO Complete**: All pages have Helmet meta tags (title, description, OG, Twitter Cards, canonical)
- **Legal Pages**: French RGPD compliance (Mentions légales, Confidentialité, CGU, Cookies) with noindex
- **Premium UX**: Cookie consent banner, custom violet cursor, parallax effects, scroll animations
- **Production Ready**: robots.txt, sitemap.xml with all 8 pages, structured data JSON-LD
- **Visual Enhancements**: Floating shapes, tech grid, particles, glow cards, spotlight effect, premium typography

## Premium Visual Components

### Background Effects
- **FloatingShapes**: Animated geometric shapes (circles, squares, triangles) floating in background
- **TechGrid**: Subtle grid pattern with violet accent lines
- **GrainTexture**: Film grain overlay for premium feel
- **ParticleConstellation**: Animated particle effect in hero section

### Interactive Effects
- **SpotlightEffect**: Mouse-following radial gradient light
- **GlowCard**: Cards with violet glow on hover, animated borders, shimmer effect
- **Button animations**: Shimmer sweep on hover, violet shadow glow, scale transforms

### Typography & Spacing
- **Gradient titles**: Key text with violet gradient (from-primary via-purple-400 to-primary)
- **Premium sizing**: Titles at 6xl-8xl scale, generous padding (py-40, gap-20)
- **PageTransition**: Smooth fade-in animations between page navigations

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

## Site Pages

1. **Home (/)** - Hero with rotating words, About, Services preview, Methodology timeline, Team section, Commitment
2. **Services (/services)** - 8 detailed service cards with technologies and capabilities
3. **Approche (/approche)** - 4-phase methodology, values, commitments, quote block
4. **Contact (/contact)** - Contact form with validation, contact info cards
5. **Mentions Légales (/mentions-legales)** - French legal requirements
6. **Politique Confidentialité (/politique-confidentialite)** - RGPD privacy policy
7. **CGU (/cgu)** - Terms of service
8. **Politique Cookies (/politique-cookies)** - Cookie policy

## SEO Configuration

- **Domain**: answeris42.fr
- **Sitemap**: /sitemap.xml with all 8 pages
- **Robots**: /robots.txt allowing all crawlers
- **Structured Data**: JSON-LD for Organization, Service, HowTo, ContactPage schemas
- **Legal pages**: noindex, follow (excluded from search but links followed)

## Hetzner Deployment Architecture

### Docker Stack
- **Dockerfile**: Multi-stage build (builder + production) with Node.js 20 Alpine
- **docker-compose.yml**: Production orchestration (app, PostgreSQL, Nginx, Certbot)
- **docker-compose.dev.yml**: Local development with PostgreSQL only
- **docker-compose.initial.yml**: Initial deployment without SSL for certificate generation

### Services
- **app**: Node.js application on port 5000
- **db**: PostgreSQL 16 Alpine with persistent volume
- **nginx**: Reverse proxy with SSL termination, gzip, caching
- **certbot**: Automatic SSL certificate renewal

### Security Features
- SSL/TLS with Let's Encrypt auto-renewal
- Security headers (HSTS, X-Frame-Options, X-Content-Type-Options)
- Non-root container user
- Health checks for all services
- Rate limiting on API endpoints

### Deployment Scripts
- `scripts/deploy.sh`: Full deployment automation
- `scripts/init-ssl.sh`: SSL certificate setup
- `scripts/backup-db.sh`: Database backup with 30-day retention

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`: Database credentials
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`: Email configuration
- `SMTP_FROM`, `CONTACT_EMAIL`: Contact form settings

### Health Endpoint
- `GET /api/health`: Returns status, timestamp, and uptime for monitoring