import { Mail, Phone, MapPin, Instagram, Youtube, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { lang } = useLanguage();
  const tx = (de: string, en: string) => (lang === "de" ? de : en);

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary">
            {tx("Kontakt", "Contact")}
          </p>
          <h2 className="font-display mt-6 text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
            {tx("Schreiben ", "Get in ")}
            <span className="italic text-primary">{tx("Sie mir", "touch")}</span>
          </h2>
          <p className="font-body mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/70">
            {tx(
              "Für Konzertanfragen, Unterricht oder Projekte — ich freue mich auf Ihre Nachricht.",
              "For concert enquiries, lessons, or projects — I look forward to hearing from you.",
            )}
          </p>
        </div>

        {/* Contact grid */}
        <div className="mt-16 grid gap-px bg-border sm:grid-cols-3">
          <div className="bg-background p-8">
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="h-3 w-3" />
              <span className="font-body text-[10px] tracking-[0.3em] uppercase">
                {tx("Standort", "Location")}
              </span>
            </div>
            <p className="font-display mt-4 text-lg font-light leading-snug">
              Lübeck
              <br />
              <span className="text-foreground/70">Wakentizmauer 3A · 23552</span>
            </p>
          </div>

          <div className="bg-background p-8">
            <div className="flex items-center gap-2 text-primary">
              <Phone className="h-3 w-3" />
              <span className="font-body text-[10px] tracking-[0.3em] uppercase">
                {tx("Telefon", "Phone")}
              </span>
            </div>
            <a
              href="tel:+4917662779950"
              className="font-display mt-4 block text-lg font-light transition-colors hover:text-primary"
            >
              +49 176 6277 9950
            </a>
            <a
              href="https://wa.me/491631877567"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body mt-1 block text-xs text-foreground/50 transition-colors hover:text-primary"
            >
              +49 1631 877567 · WhatsApp
            </a>
          </div>

          <div className="bg-background p-8">
            <div className="flex items-center gap-2 text-primary">
              <Mail className="h-3 w-3" />
              <span className="font-body text-[10px] tracking-[0.3em] uppercase">E-Mail</span>
            </div>
            <a
              href="mailto:tatatatauchitel@gmail.com"
              className="font-display mt-4 block break-all text-lg font-light transition-colors hover:text-primary"
            >
              tatatatauchitel@gmail.com
            </a>
          </div>
        </div>

        {/* Social */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-foreground/40">
            {tx("Folgen Sie", "Follow")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-px bg-border">
            <a
              href="https://www.instagram.com/natalia_uchitel"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body group flex items-center gap-3 bg-background px-6 py-4 text-xs tracking-[0.2em] uppercase text-foreground/70 transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
              Instagram
            </a>
            <a
              href="https://m.youtube.com/@natalia_uchitel"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body group flex items-center gap-3 bg-background px-6 py-4 text-xs tracking-[0.2em] uppercase text-foreground/70 transition-colors hover:text-primary"
            >
              <Youtube className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
              YouTube
            </a>
            <a
              href="https://t.me/natalia_uchitel"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body group flex items-center gap-3 bg-background px-6 py-4 text-xs tracking-[0.2em] uppercase text-foreground/70 transition-colors hover:text-primary"
            >
              <Send className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
