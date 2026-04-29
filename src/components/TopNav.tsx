import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import NavMenu from "@/components/NavMenu";

const sections = [
  { id: "presentation", key: "nav.presentation" },
  { id: "biography", key: "nav.biography" },
  { id: "repertoire", key: "nav.repertoire" },
  { id: "concerts", key: "nav.concerts" },
  { id: "videos", key: "nav.videos" },
  { id: "gallery", key: "nav.gallery" },
  { id: "projects", key: "nav.projects" },
];

const TopNav = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      if (!isHome) return;
      let current = "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const langOption = (code: Language, label: string) => (
    <button
      onClick={() => setLang(code)}
      className={`font-body cursor-pointer text-[11px] tracking-[0.2em] uppercase transition-colors hover:text-primary ${
        lang === code ? "text-primary" : "text-foreground/40"
      }`}
    >
      {label}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-primary/10 bg-background/80 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-5">
          <NavMenu />
          <a
            href="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className={`font-display text-lg font-light tracking-wide transition-opacity ${
              scrolled || !isHome ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            Natalia <span className="text-primary">Uchitel</span>
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => handleNav(e, s.id)}
              className={`group relative font-body text-[11px] tracking-[0.25em] uppercase transition-colors ${
                active === s.id ? "text-primary" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {t(s.key)}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                  active === s.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {langOption("de", "DE")}
          <span className="h-3 w-px bg-foreground/20" />
          {langOption("en", "EN")}
        </div>
      </div>
    </header>
  );
};

export default TopNav;
