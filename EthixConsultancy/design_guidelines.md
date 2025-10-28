# Ethix Business Consultancy Design Guidelines

## Design Approach
**Selected Approach**: Premium Corporate Design System with Trust-Building Elements
**Justification**: As a professional consultancy dealing with government funding and certifications, the design must establish immediate credibility while remaining approachable. Drawing inspiration from corporate leaders like Deloitte, PwC, and modern fintech platforms that balance authority with accessibility.

## Brand Colors & Visual Treatment
**Primary Palette** (from Ethix logo):
- Maroon: Primary brand color for headers, CTAs, and key accents
- Gold: Premium accents for highlights, borders, and success indicators
- White: Primary background and text contrast
- Light Turquoise Blue: Secondary accent for trust signals and informational elements

**Application Strategy**:
- Maroon backgrounds for hero sections and primary CTAs
- Gold subtle borders and icon accents
- White clean backgrounds with turquoise blue section dividers
- Maintain high contrast for readability and professionalism

## Typography Hierarchy
**Font Stack**: Google Fonts via CDN
- **Primary (Headers)**: 'Playfair Display' - serif font for elegance and authority (H1: 3.5rem, H2: 2.5rem, H3: 1.75rem)
- **Secondary (Body)**: 'Inter' - clean sans-serif for readability (Body: 1rem/1.125rem, Small: 0.875rem)
- **Weights**: Light (300), Regular (400), Semibold (600), Bold (700)

**Hierarchy Rules**:
- H1: Hero headlines, page titles
- H2: Section headers, major divisions
- H3: Service categories, subsection titles
- Body: Paragraph text, descriptions, lists
- Small: Labels, captions, supporting text

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, m-8, gap-12)
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 for grids, gap-6 for cards
- Text spacing: mb-4 for paragraphs, mb-8 for section breaks
- Container max-width: max-w-7xl for full sections, max-w-4xl for content

**Grid Strategy**:
- Services: 3-column grid (lg:grid-cols-3 md:grid-cols-2 grid-cols-1)
- Testimonials: 2-column grid (lg:grid-cols-2)
- Stats/Achievements: 4-column grid (lg:grid-cols-4 md:grid-cols-2)

## Page-Specific Layouts

### Home Page
**Hero Section** (80vh):
- Large impactful hero image showing professional business consultation (diverse team in modern office setting)
- Centered overlay with company tagline and dual CTAs
- Buttons with backdrop blur (bg-white/20 backdrop-blur-md)
- Subtle scroll indicator

**Services Overview** (6 cards in 3-column grid):
- Icon + title + short description format
- Gold accent borders on hover
- Brief 2-3 line descriptions

**Trust Indicators Section**:
- 4-column stats grid: "500+ Startups Funded", "₹100Cr+ Sanctioned", "50+ Government Schemes", "100% Success Rate"
- Turquoise blue background section
- Large numbers with small descriptive text

**Featured Services** (2-column asymmetric):
- Left: Image of documentation/certification process
- Right: Detailed service breakdown with bullet points

**CTA Section**:
- Maroon background, centered messaging
- Primary and secondary CTAs
- Supporting text about free consultation

### About Us
**Company Story** (single column, max-w-4xl):
- Professional team photo (4-5 consultants in business attire)
- Mission/Vision cards in 2-column layout
- Leadership team grid (3 columns) with headshots and brief bios

### Services Page
**Service Detail Cards** (stacked sections):
- Each major service gets full-width section with alternating image placement (left/right)
- Expandable accordion-style details for sub-services
- Gold icon bullets for key benefits
- "Learn More" CTAs per service

**Services Include**:
1. Government Funding & Schemes
2. Startup Certifications (Udyam, DPIIT, Tax Exemption)
3. Loan & Grant Consultancy
4. Documentation Support

### Success Stories
**Testimonial Cards** (2-column masonry grid):
- Client logo, quote, name, company, funding amount
- Turquoise accent borders
- Mix of text testimonials and case study previews

**Case Studies** (feature 3-4 detailed stories):
- Before/after funding metrics
- Challenge-solution-result format

### Contact Page
**Split Layout** (2-column):
- Left: Professional contact form (Name, Email, Phone, Service Interest, Message)
- Right: Contact information, office address with map placeholder, business hours, direct email/phone

## Component Library

### Navigation
- Sticky header with maroon background
- Logo left, navigation center, "Get Consultation" CTA right
- Mobile: Hamburger menu with slide-in drawer

### Buttons
**Primary**: Maroon background, white text, gold border on hover
**Secondary**: White background, maroon text, maroon border
**Floating WhatsApp**: Fixed bottom-right, turquoise background, pulse animation

### Cards
- White background with subtle shadow (shadow-lg)
- Gold 1px border on hover
- Rounded corners (rounded-xl)
- Padding: p-8

### Forms
- Clean input fields with light borders
- Focused state: turquoise border
- Labels: semibold, small caps
- Submit button: maroon primary style

### Icons
**Library**: Heroicons via CDN
- Service icons: outline style, 2.5rem
- Feature icons: solid style, 1.5rem
- Navigation icons: outline style, 1.25rem

## Images

**Hero Image**: Professional business consultation scene - diverse team of consultants reviewing documents with startup founders in modern office setting. Bright, aspirational, high-quality photography.

**About Team Photo**: Leadership team in professional business attire, office environment, warm lighting to convey approachability.

**Services Images**: 
- Documentation process: Close-up of organized paperwork and certification documents
- Funding success: Handshake or celebratory business meeting
- Consultation: One-on-one consulting session

**Success Stories**: Client logos and professional headshots for testimonials.

## Interactions & Animations
**Minimalist Approach**:
- Smooth scroll behavior
- Fade-in on scroll for sections (subtle, 300ms)
- Card hover: slight lift (transform translateY(-4px)) + shadow increase
- Button hover: gold border glow
- No complex animations - maintain professional restraint

## Footer
**3-Column Layout**:
- Column 1: Company info, tagline, social media icons (LinkedIn, Twitter, Facebook)
- Column 2: Quick links (Services, About, Contact, Blog)
- Column 3: Newsletter signup, contact details
- Bottom bar: Copyright, privacy policy, terms

## Mobile Responsiveness
- All grids collapse to single column below 768px
- Hero text reduces to 2rem
- Section padding reduces to py-12
- Floating WhatsApp button scales to 56px
- Navigation becomes full-screen drawer

**Design Principle**: Every element reinforces trust, expertise, and accessibility. Premium aesthetic without appearing unapproachable. Clean information hierarchy that guides users to consultation CTAs naturally.