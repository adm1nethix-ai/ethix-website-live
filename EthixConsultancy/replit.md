# Ethix Business Consultancy Website

## Overview
A modern, professional, and trustworthy business website for Ethix Business Consultancy Pvt. Ltd., a consultancy firm helping Indian startups and MSMEs access government funding, loans, grants, startup registrations, and certifications.

**Tech Stack:** React + TypeScript frontend, Express backend, Tailwind CSS + shadcn/ui components

**Current State:** Fully functional MVP with all core pages and features implemented

## Recent Changes (January 2025)
- Implemented complete website with 5 main pages (Home, About, Services, Success Stories, Contact)
- Created professional hero images and team photos using AI generation
- Configured Ethix brand colors: maroon (primary), gold (accent), white, turquoise blue
- Built responsive navigation with mobile menu
- Added floating WhatsApp consultation button
- Implemented contact form with backend API and validation
- Designed corporate elegant UI following design guidelines

## Project Architecture

### Frontend Structure
- **Pages:**
  - `/` - Home page with hero section, services overview, stats, and CTAs
  - `/about` - Company story, mission, vision, and values
  - `/services` - Detailed service offerings with government schemes
  - `/success-stories` - Client testimonials and case studies
  - `/contact` - Professional contact form with validation

- **Components:**
  - `Navigation` - Sticky header with responsive mobile menu
  - `Footer` - Three-column footer with links and contact info
  - `WhatsAppButton` - Floating consultation button (bottom-right)
  - `ServiceCard` - Reusable service display component
  - `TestimonialCard` - Client success story component

### Backend Structure
- **API Routes:**
  - `POST /api/contact` - Submit contact form (validated with Zod)
  - `GET /api/contact-submissions` - Retrieve all submissions

- **Storage:**
  - In-memory storage for contact submissions
  - Contact schema includes: name, email, phone, serviceInterest, message

### Design System
- **Colors:**
  - Primary (Maroon): `0 65% 35%` - Used for navigation, CTAs, headings
  - Accent (Gold): `43 90% 94%` (light) / `43 90% 30%` (dark) - Premium highlights
  - Turquoise: `185 65% 45%` - Trust indicators and stats sections
  - Background: White with subtle card elevations

- **Typography:**
  - Headers: Playfair Display (serif) for elegance and authority
  - Body: Inter (sans-serif) for readability
  - Hierarchy: H1 (3-6xl), H2 (3-4xl), H3 (xl-2xl), Body (base)

- **Spacing:** Consistent use of Tailwind spacing (py-20 sections, p-6/p-8 cards)

## Key Features

### Professional Design
- Corporate, elegant aesthetic with premium feel
- Smooth transitions and hover effects using elevation utilities
- Mobile-first responsive design across all breakpoints
- Accessible color contrast and semantic HTML

### Services Offered
1. Government Funding & Schemes (Hackathon 5.0, Mudra Yojana, CGTMSE)
2. Startup Certifications (Udyam, DPIIT, Tax Exemption)
3. Loan & Grant Consultancy
4. Documentation & Application Support
5. Compliance Consulting

### User Journey
1. Land on hero section with compelling value proposition
2. Browse services and understand offerings
3. Read success stories and testimonials
4. Contact via form or WhatsApp for consultation
5. Get expert assistance with funding and certifications

### Contact Methods
- Professional contact form with validation
- Floating WhatsApp button (always accessible)
- Direct email: info@ethixconsultancy.com
- Phone: +91 98765 43210

## Technical Details

### Form Validation
- Client-side validation using Zod schemas
- Email format validation
- Phone number minimum length
- Required fields with helpful error messages
- Server-side validation matching client schema

### State Management
- TanStack Query for API calls and caching
- React Hook Form for form state and validation
- Toast notifications for user feedback

### Performance
- Optimized images with proper formats
- Lazy loading for route-based code splitting
- Minimal bundle size with tree shaking
- Smooth animations using CSS transitions

## Development Workflow
- `npm run dev` - Starts Express backend and Vite frontend
- Frontend: http://localhost:5000
- Backend API: http://localhost:5000/api

## Future Enhancements (Post-MVP)
- Email integration for contact form notifications
- Blog/CMS for government scheme updates
- Client portal for document tracking
- Multi-language support (Hindi + English)
- Admin dashboard for managing testimonials
- Integration with actual email service (SendGrid/AWS SES)
