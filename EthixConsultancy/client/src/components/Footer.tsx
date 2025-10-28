import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">
              Ethix Business Consultancy
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Empowering Indian startups and MSMEs with expert guidance on government funding, certifications, and business growth.
            </p>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                data-testid="button-social-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                data-testid="button-social-twitter"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                data-testid="button-social-facebook"
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/services" data-testid="link-footer-services">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start h-auto py-1 px-2"
                >
                  Our Services
                </Button>
              </Link>
              <Link href="/about" data-testid="link-footer-about">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start h-auto py-1 px-2"
                >
                  About Us
                </Button>
              </Link>
              <Link href="/success-stories" data-testid="link-footer-success">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start h-auto py-1 px-2"
                >
                  Success Stories
                </Button>
              </Link>
              <Link href="/contact" data-testid="link-footer-contact">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start h-auto py-1 px-2"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@ethixconsultancy.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 Ethix Business Consultancy Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="h-auto py-0 px-2" data-testid="link-privacy">
                Privacy Policy
              </Button>
              <Button variant="ghost" size="sm" className="h-auto py-0 px-2" data-testid="link-terms">
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
