import portraitHero from "@/assets/portrait-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Decorative background type */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <span className="font-display select-none whitespace-nowrap text-[28vw] font-light leading-none text-primary/[0.05] md:text-[20vw]">
          Uchitel
        </span>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-12 lg:gap-16 lg:py-20">
        {/* Left text column */}
        <div className="lg:col-span-7 lg:pr-8">
          <div className="animate-fade-in flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary">
              {t("hero.tagline")}
            </p>
          </div>

          <h1 className="animate-reveal-up delay-200 font-display mt-6 text-6xl font-light leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-8xl lg:text-[8.5rem]">
            Natalia
            <br />
            <span className="italic text-primary">Uchitel</span>
          </h1>

          <p className="animate-reveal-up delay-400 mt-8 max-w-xl font-body text-lg leading-[1.7] text-foreground/80 md:text-xl">
            {t("hero.intro")}
          </p>

          <div className="animate-reveal-up delay-500 mt-10 flex flex-wrap gap-4">
            <a
              href="#presentation"
              className="font-body group inline-flex items-center gap-3 rounded-none border border-primary bg-primary px-8 py-4 text-xs tracking-[0.25em] uppercase text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:scale-[0.97]"
            >
              <span>{t("hero.watchVideo")}</span>
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
            <a
              href="#concerts"
              className="font-body inline-flex items-center gap-3 rounded-none border border-primary/40 px-8 py-4 text-xs tracking-[0.25em] uppercase text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/5 active:scale-[0.97]"
            >
              {t("hero.concerts")}
            </a>
          </div>

          {/* Stats / credentials strip */}
          <div className="animate-fade-in delay-700 mt-14 grid grid-cols-3 gap-6 border-t border-primary/15 pt-8 max-w-xl">
            <div>
              <p className="font-display text-3xl font-light text-primary md:text-4xl">10+</p>
              <p className="font-body mt-1 text-[11px] tracking-[0.2em] uppercase text-foreground/60">
                {t("hero.stat.countries")}
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-light text-primary md:text-4xl">20+</p>
              <p className="font-body mt-1 text-[11px] tracking-[0.2em] uppercase text-foreground/60">
                {t("hero.stat.years")}
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-light text-primary md:text-4xl">2</p>
              <p className="font-body mt-1 text-[11px] tracking-[0.2em] uppercase text-foreground/60">
                {t("hero.stat.books")}
              </p>
            </div>
          </div>
        </div>

        {/* Right portrait column */}
        <div className="animate-fade-in delay-300 relative lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden lg:max-w-none">
            <div className="absolute -left-3 -top-3 h-full w-full border border-primary/40 lg:-left-5 lg:-top-5" />
            <img
              src={portraitHero}
              alt="Natalia Uchitel — concert pianist portrait"
              className="relative h-full w-full object-cover"
              loading="eager"
              width={1024}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

            {/* Caption badge */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary">
                  Essen · St. Petersburg
                </p>
                <p className="font-display mt-1 text-lg italic text-foreground/90">
                  «{t("hero.quote")}»
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom social column */}
      <div className="absolute bottom-8 right-6 z-20 flex flex-col gap-4 animate-fade-in delay-700">
        <a href="https://www.instagram.com/natalia_uchitel" target="_blank" rel="noopener noreferrer" className="text-foreground/50 transition-colors hover:text-primary" aria-label="Instagram">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </a>
        <a href="https://m.youtube.com/@natalia_uchitel" target="_blank" rel="noopener noreferrer" className="text-foreground/50 transition-colors hover:text-primary" aria-label="YouTube">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </a>
        <a href="https://t.me/natalia_uchitel" target="_blank" rel="noopener noreferrer" className="text-foreground/50 transition-colors hover:text-primary" aria-label="Telegram">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
