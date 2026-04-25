import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  variant?: "line" | "ornament" | "wave";
  flip?: boolean;
}

const SectionDivider = ({ variant = "ornament", flip = false }: Props) => {
  const { ref, isVisible } = useScrollReveal();

  if (variant === "wave") {
    return (
      <div aria-hidden className="relative h-24 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <svg
          className={`absolute inset-x-0 ${flip ? "top-0 rotate-180" : "bottom-0"} h-full w-full`}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C300,100 600,0 1200,60 L1200,120 L0,120 Z"
            className="fill-card/40"
          />
        </svg>
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className={`h-px w-full origin-left bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-transform duration-1000 ${
              isVisible ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </div>
      </div>
    );
  }

  // ornament
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="relative py-16 md:py-20">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-6">
        <div
          className={`h-px flex-1 origin-right bg-gradient-to-l from-primary/30 to-transparent transition-transform duration-1000 ${
            isVisible ? "scale-x-100" : "scale-x-0"
          }`}
        />
        <div
          className={`flex items-center gap-3 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <span className="h-1 w-1 rounded-full bg-primary/40" />
          <span className="h-1.5 w-1.5 rotate-45 bg-primary/70" />
          <span className="h-1 w-1 rounded-full bg-primary/40" />
        </div>
        <div
          className={`h-px flex-1 origin-left bg-gradient-to-r from-primary/30 to-transparent transition-transform duration-1000 ${
            isVisible ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </div>
    </div>
  );
};

export default SectionDivider;
