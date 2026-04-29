import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
// Inline VisuallyHidden to avoid extra dependency
const VisuallyHidden = ({ children }: { children: React.ReactNode }) => (
  <span className="sr-only">{children}</span>
);

const NavMenu = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { href: "#presentation", key: "nav.presentation" },
    { href: "#biography", key: "nav.biography" },
    { href: "#repertoire", key: "nav.repertoire" },
    { href: "#concerts", key: "nav.concerts" },
    { href: "#videos", key: "nav.videos" },
    { href: "#gallery", key: "nav.gallery" },
    { href: "#projects", key: "nav.projects" },
    { href: "#contact", key: "nav.contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const id = href.replace("#", "");
    if (location.pathname === "/") {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 250);
    } else {
      setTimeout(() => navigate(`/#${id}`), 250);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="group flex h-10 w-10 flex-col items-center justify-center gap-[5px] text-foreground transition-colors hover:text-primary"
      >
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-full border-r border-primary/20 bg-background/95 backdrop-blur-xl sm:max-w-md"
      >
        <VisuallyHidden>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Main site navigation</SheetDescription>
        </VisuallyHidden>

        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute right-6 top-6 text-foreground/60 transition-colors hover:text-primary"
        >
          <X className="h-6 w-6" />
        </button>

        <nav className="flex h-full flex-col justify-center px-8">
          <p className="font-body mb-12 text-[10px] tracking-[0.4em] uppercase text-primary">
            Natalia Uchitel
          </p>
          <ul className="space-y-6">
            {links.map((link, i) => (
              <li
                key={link.key}
                className="animate-reveal-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="font-display group flex items-baseline gap-4 text-3xl font-light tracking-tight text-foreground transition-colors hover:text-primary sm:text-4xl"
                >
                  <span className="font-body text-[10px] tracking-[0.3em] text-foreground/30 group-hover:text-primary/60">
                    0{i + 1}
                  </span>
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-16 border-t border-primary/10 pt-8">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-foreground/40">
              {t("nav.follow")}
            </p>
            <div className="mt-4 flex gap-6">
              <a href="https://www.instagram.com/natalia_uchitel" target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-[0.2em] uppercase text-foreground/60 transition-colors hover:text-primary">
                Instagram
              </a>
              <a href="https://m.youtube.com/@natalia_uchitel" target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-[0.2em] uppercase text-foreground/60 transition-colors hover:text-primary">
                YouTube
              </a>
              <a href="https://t.me/natalia_uchitel" target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-[0.2em] uppercase text-foreground/60 transition-colors hover:text-primary">
                Telegram
              </a>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenu;
