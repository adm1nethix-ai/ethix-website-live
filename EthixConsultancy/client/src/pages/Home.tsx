import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { ArrowRight, Award, Briefcase, FileText, TrendingUp, Users, CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_business_consultation_hero_image_45b3622a.png";

export default function Home() {
  const services = [
    {
      icon: TrendingUp,
      title: "Government Funding & Schemes",
      description: "Access to Hackathon 5.0, Mudra Yojana, CGTMSE, and 50+ government funding schemes for your business growth.",
    },
    {
      icon: Award,
      title: "Startup Certifications",
      description: "Complete assistance with Udyam Registration, DPIIT Recognition, Tax Exemption Certificates, and more.",
    },
    {
      icon: Briefcase,
      title: "Loan & Grant Consultancy",
      description: "Expert guidance on securing business loans, grants, and financial support tailored to your needs.",
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Professional help with project reports, business plans, financial statements, and compliance documentation.",
    },
    {
      icon: Users,
      title: "Compliance Consulting",
      description: "Stay compliant with government regulations and maximize benefits from available schemes.",
    },
    {
      icon: CheckCircle,
      title: "Application Assistance",
      description: "End-to-end support in preparing and submitting applications for funding and certifications.",
    },
  ];

  const stats = [
    { number: "500+", label: "Startups Funded" },
    { number: "₹100Cr+", label: "Funding Sanctioned" },
    { number: "50+", label: "Government Schemes" },
    { number: "100%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Empowering Your Business with Government Support
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Expert consultancy for Indian startups and MSMEs seeking government funding, certifications, and growth opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" data-testid="link-hero-get-funding">
              <Button size="lg" className="text-base">
                Get Funding Assistance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services" data-testid="link-hero-explore-services">
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-white/20 backdrop-blur-md border-white/40 text-white hover:bg-white/30"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Ethix Business Consultancy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are a professional consultancy firm dedicated to helping Indian startups and MSMEs access government funding, loans, grants, and essential certifications. With our expertise, navigate the complex world of government schemes with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions for all your business funding and certification needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" data-testid="link-view-all-services">
              <Button size="lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[hsl(185_65%_45%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Access Government Funding?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Get expert guidance from our consultants and unlock opportunities for your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" data-testid="link-cta-consult">
              <Button size="lg" variant="secondary">
                Consult Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about" data-testid="link-cta-learn-more">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-white/20"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
