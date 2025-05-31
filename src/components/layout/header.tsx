
"use client";

import Link from "next/link";
import { Menu, X, CodeXml } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navLinks = [
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id: string, isMobile: boolean = false) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-card shadow-lg py-3' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" passHref>
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-2 text-xl font-bold font-headline cursor-pointer hover:text-accent transition-colors"
          >
            <CodeXml className="h-7 w-7 text-primary" />
            Garv's Digital Canvas
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Button
              key={link.label}
              variant="link"
              onClick={() => scrollToSection(link.href)}
              className="text-foreground hover:text-accent font-medium text-sm px-0"
            >
              {link.label}
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-card p-6">
              <div className="flex flex-col space-y-6">
                <div className="flex justify-between items-center mb-4">
                   <Link href="/" passHref>
                    <div 
                      onClick={() => scrollToSection('hero', true)} 
                      className="flex items-center gap-2 text-lg font-bold font-headline cursor-pointer hover:text-accent transition-colors"
                    >
                       <CodeXml className="h-6 w-6 text-primary" />
                       GDC
                    </div>
                  </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                      </Button>
                  </SheetClose>
                </div>
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="ghost"
                    onClick={() => scrollToSection(link.href, true)}
                    className="text-foreground hover:text-accent justify-start text-base"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
