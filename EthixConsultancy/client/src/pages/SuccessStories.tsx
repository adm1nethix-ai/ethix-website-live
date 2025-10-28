import { TestimonialCard } from "@/components/TestimonialCard";

export default function SuccessStories() {
  const testimonials = [
    {
      id: "1",
      clientName: "Rajesh Kumar",
      company: "TechStart Solutions",
      role: "Founder & CEO",
      quote:
        "Ethix made the entire process of securing DPIIT recognition and startup funding seamless. Their expertise in navigating government schemes saved us months of effort. Highly recommended!",
      fundingAmount: "₹25 Lakhs",
      service: "DPIIT Recognition & Seed Funding",
    },
    {
      id: "2",
      clientName: "Priya Sharma",
      company: "EcoGreen Manufacturing",
      role: "Managing Director",
      quote:
        "We were struggling with Udyam registration and CGTMSE loan applications. The Ethix team guided us through every step, and we successfully secured a loan of ₹50 lakhs for our expansion.",
      fundingAmount: "₹50 Lakhs",
      service: "CGTMSE Loan & Udyam Registration",
    },
    {
      id: "3",
      clientName: "Amit Patel",
      company: "DigitalCraft Studios",
      role: "Co-founder",
      quote:
        "The professionalism and knowledge demonstrated by Ethix consultants is exceptional. They helped us win the Startup India competition and secure funding that transformed our business.",
      fundingAmount: "₹1 Crore",
      service: "Startup India Competition & Grant",
    },
    {
      id: "4",
      clientName: "Sneha Desai",
      company: "HealthPlus Wellness",
      role: "Founder",
      quote:
        "Getting tax exemption certification seemed impossible until we partnered with Ethix. Their detailed documentation and application support made all the difference. Truly grateful!",
      service: "Tax Exemption Certificate (80-IAC)",
    },
    {
      id: "5",
      clientName: "Vikram Singh",
      company: "AgriTech Innovations",
      role: "CEO",
      quote:
        "Ethix's team prepared an outstanding project report for our Mudra Yojana application. We received approval within weeks, and their ongoing compliance support has been invaluable.",
      fundingAmount: "₹10 Lakhs",
      service: "Mudra Yojana & Documentation",
    },
    {
      id: "6",
      clientName: "Ananya Reddy",
      company: "FashionForward Boutique",
      role: "Owner",
      quote:
        "As a first-time entrepreneur, I was overwhelmed by the certification process. Ethix handled everything from GST registration to MSME certification with such care and efficiency.",
      service: "MSME & GST Registration",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Success Stories
          </h1>
          <p className="text-lg text-primary-foreground/90">
            Real results from real entrepreneurs we've helped succeed
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Over 500 successful partnerships and counting. Here's how we've helped businesses like yours achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Our Impact in Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="stat-clients-helped">
              <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Clients Helped</div>
            </div>
            <div className="text-center" data-testid="stat-funding-secured">
              <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                ₹100Cr+
              </div>
              <div className="text-muted-foreground">Funding Secured</div>
            </div>
            <div className="text-center" data-testid="stat-certifications">
              <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                1000+
              </div>
              <div className="text-muted-foreground">Certifications Issued</div>
            </div>
            <div className="text-center" data-testid="stat-success-rate">
              <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                100%
              </div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
