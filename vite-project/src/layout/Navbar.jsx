import { useEffect, useState } from "react";
import { Button } from "@/components/Button";

const navLinks = [
    {section: "home", label: "Home"},
    {section: "about", label: "About"},
    {section: "projects", label: "Projects"},
    {section: "experience", label: "Experience"}
]

export const Navbar = ({ setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 w-full transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
      <nav className="w-full px-6 flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-bold font-clean tracking-wider hover:text-primary"
        >
          KS<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(link.section)}
                className="px-4 py-2 text-sm font-clean text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

            {/* MOBILE MENU BUTTON */}
            <div className="hidden md:block cursor-pointer">
                <Button size="sm" onClick={() => setActiveSection("contact")}>Contact Me</Button>
            </div>

            {/* Mobile Menu (only when user is on a small screen) */}
            <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                {isMobileMenuOpen ? "✕" : "☰"}
            </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="md:hidden bg-background/97 animate-fade-in"> // translucent background, might change colour later
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                    <button className="text-lg text-muted-foreground hover:text-foreground py-2 text-left text-lg font-clean"
                            key={index}
                            onClick={() => {
                                setActiveSection(link.section);
                                setIsMobileMenuOpen(false);
                            }}
                    >
                        {link.label}
                    </button>
                ))}

                <Button onClick={() => {setActiveSection("contact"); setIsMobileMenuOpen(false)}}>Contact Me</Button>
            </div>
        </div>
        )}
      </header>
    );
}