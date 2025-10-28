import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  TrendingUp, 
  Award, 
  Briefcase, 
  FileText, 
  CheckCircle, 
  ArrowRight 
} from "lucide-react";
import docsImage from "@assets/generated_images/Documentation_and_certification_services_image_f3bc7d1c.png";
import successImage from "@assets/generated_images/Success_and_funding_celebration_image_67add4f8.png";

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "Government Funding & Schemes Assistance",
      description:
        "Navigate the complex landscape of government funding with our expert guidance. We help you access and maximize benefits from various schemes.",
      schemes: [
        "Startup India Seed Fund Scheme (SISFS)",
        "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
        "Pradhan Mantri Mudra Yojana (PMMY)",
        "Stand-Up India Scheme",
        "Atal Innovation Mission (AIM)",
        "National Startup Awards",
        "Fund of Funds for Startups (FFS)",
        "Hackathon 5.0 and Innovation Challenges",
      ],
      image: successImage,
    },
    {
      icon: Award,
      title: "Startup Certifications",
      description:
        "Obtain essential certifications that unlock government benefits, tax exemptions, and enhanced credibility for your startup.",
      schemes: [
        "Udyam Registration (MSME Registration)",
        "DPIIT Recognition (Department for Promotion of Industry and Internal Trade)",
        "Tax Exemption Certificate under Section 80-IAC",
        "Startup India Certificate",
        "ISO Certifications",
        "Import Export Code (IEC)",
        "GST Registration",
        "Professional Tax Registration",
      ],
      image: docsImage,
    },
    {
      icon: Briefcase,
      title: "Loan & Grant Consultancy",
      description:
        "Secure the financial support your business needs with our comprehensive loan and grant consultancy services.",
      schemes: [
        "Business Loan Application Assistance",
        "Working Capital Loans",
        "Term Loans for Expansion",
        "Equipment Financing",
        "Government Grant Applications",
        "Subsidy Claims and Processing",
        "Credit Assessment and Improvement",
        "Loan Restructuring Support",
      ],
      image: successImage,
    },
    {
      icon: FileText,
      title: "Documentation & Application Support",
      description:
        "Professional preparation of all necessary documents to ensure smooth application processes and higher success rates.",
      schemes: [
        "Detailed Project Reports (DPR)",
        "Comprehensive Business Plans",
        "Financial Projections and Statements",
        "Market Research Reports",
        "Technical Feasibility Studies",
        "CMA Reports for Loan Applications",
        "Legal Documentation Support",
        "Compliance Documentation",
      ],
      image: docsImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-lg text-primary-foreground/90">
            Comprehensive consultancy solutions tailored to your business needs
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Card className="p-6 bg-card">
                  <h3 className="font-semibold text-foreground mb-4">What We Offer:</h3>
                  <ul className="space-y-2">
                    {service.schemes.map((scheme, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{scheme}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-md shadow-lg w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a free consultation with our experts to discuss your business needs and funding requirements.
          </p>
          <Link href="/contact" data-testid="link-services-contact">
            <Button size="lg">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
