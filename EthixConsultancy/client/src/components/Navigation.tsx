import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/success-stories", label: "Success Stories" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary border-b border-primary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" data-testid="link-brand-home">
            <div className="font-serif text-xl font-bold text-primary-foreground">
              Ethix Business Consultancy
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-primary-foreground ${
                    isActive(link.path)
                      ? "bg-white/20"
                      : ""
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact" data-testid="link-nav-get-consultation">
              <Button
                size="sm"
                variant="secondary"
                className="ml-4"
              >
                Get Consultation
              </Button>
            </Link>
            <ThemeToggle />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-primary-border">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`w-full justify-start text-primary-foreground ${
                    isActive(link.path) ? "bg-white/20" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact" data-testid="link-mobile-get-consultation">
              <Button
                size="sm"
                variant="secondary"
                className="w-full mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
