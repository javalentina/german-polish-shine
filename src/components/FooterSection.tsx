import { useLanguage } from "@/contexts/LanguageContext";

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="font-display text-3xl font-light">Natalia Uchitel</h2>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/natalia_uchitel" target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground transition-colors hover:text-primary">Instagram</a>
            <a href="https://m.youtube.com/@natalia_uchitel" target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground transition-colors hover:text-primary">YouTube</a>
            <a href="https://t.me/natalia_uchitel" target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground transition-colors hover:text-primary">Telegram</a>
          </div>
          <p className="font-body text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Natalia Uchitel. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
