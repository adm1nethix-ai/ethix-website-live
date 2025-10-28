import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  clientName: string;
  company: string;
  role: string;
  quote: string;
  fundingAmount?: string;
  service: string;
}

export function TestimonialCard({
  clientName,
  company,
  role,
  quote,
  fundingAmount,
  service,
}: TestimonialCardProps) {
  return (
    <Card className="p-8 hover-elevate transition-all duration-300" data-testid={`card-testimonial-${clientName.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex flex-col gap-4">
        <Quote className="h-10 w-10 text-accent-foreground" />
        <p className="text-foreground italic leading-relaxed">"{quote}"</p>
        <div className="mt-4">
          <p className="font-semibold text-foreground">{clientName}</p>
          <p className="text-sm text-muted-foreground">{role}, {company}</p>
          {fundingAmount && (
            <p className="text-sm text-accent-foreground font-semibold mt-1">
              Funding Secured: {fundingAmount}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-2">Service: {service}</p>
        </div>
      </div>
    </Card>
  );
}
