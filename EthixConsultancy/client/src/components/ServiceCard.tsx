import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all duration-300" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex flex-col items-start gap-4">
        <div className="p-3 rounded-md bg-accent">
          <Icon className="h-6 w-6 text-accent-foreground" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
