import { Card } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";
import teamImage from "@assets/generated_images/Leadership_team_professional_portrait_a0f62226.png";

export default function About() {
  const mission = {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower Indian startups and MSMEs by providing expert guidance and seamless access to government funding, certifications, and business growth opportunities.",
  };

  const vision = {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become India's most trusted consultancy partner, enabling thousands of entrepreneurs to realize their business dreams through strategic government support.",
  };

  const values = [
    {
      title: "Transparency",
      description: "Clear communication and honest guidance at every step of your journey.",
    },
    {
      title: "Expertise",
      description: "Deep knowledge of government schemes, regulations, and compliance requirements.",
    },
    {
      title: "Results-Driven",
      description: "Committed to achieving tangible outcomes for our clients' business success.",
    },
    {
      title: "Client-Centric",
      description: "Your success is our success. We tailor solutions to your unique needs.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            About Ethix Business Consultancy
          </h1>
          <p className="text-lg text-primary-foreground/90">
            Your trusted partner in navigating government funding and business certifications
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Ethix Business Consultancy Pvt. Ltd. is a professional consultancy firm specializing in helping Indian startups and MSMEs access government funding, loans, grants, and essential business certifications.
                </p>
                <p className="leading-relaxed">
                  With years of experience and deep expertise in government schemes, we've successfully assisted over 500 businesses in securing funding and achieving their growth objectives. Our team of dedicated consultants understands the challenges entrepreneurs face and provides personalized solutions.
                </p>
                <p className="leading-relaxed">
                  From Udyam Registration to DPIIT Recognition, from Mudra Yojana to CGTMSE schemes, we handle all aspects of documentation, application, and compliance, ensuring you can focus on what matters most—growing your business.
                </p>
              </div>
            </div>
            <div>
              <img
                src={teamImage}
                alt="Ethix Business Consultancy Team"
                className="rounded-md shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8" data-testid="card-mission">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary">
                  <mission.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    {mission.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8" data-testid="card-vision">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary">
                  <vision.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    {vision.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {vision.description}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6" data-testid={`card-value-${value.title.toLowerCase()}`}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-2 rounded-md bg-accent">
                    <Award className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
            Why Choose Ethix?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Successful Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">₹100Cr+</div>
              <div className="text-muted-foreground">Funding Secured</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
