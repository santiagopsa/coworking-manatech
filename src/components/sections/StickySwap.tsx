"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const cards = [
  { title: "Evidence-backed decisions", desc: "Each recommendation is presented with clear criteria and objective signals." },
  { title: "Fewer repeated hiring processes", desc: "Shared structure reduces resets, delays, and unnecessary back-and-forth." },
  { title: "Higher hiring leader trust", desc: "Leaders understand why a candidate fits, before relying on gut feeling." },
  { title: "Your work becomes visible", desc: "The depth of your recruiting process is no longer hidden behind opinions." },
];
const cardsEs = [
  { title: "Decisiones respaldadas con evidencia", desc: "Cada recomendacion se presenta con criterios claros y senales objetivas." },
  { title: "Menos reprocesos de seleccion", desc: "Una estructura compartida evita reinicios, demoras y discusiones circulares." },
  { title: "Mayor confianza del lider contratante", desc: "El lider entiende por que el candidato encaja antes de decidir por intuicion." },
  { title: "Tu trabajo se vuelve visible", desc: "El valor de tu proceso deja de perderse en opiniones aisladas." },
];

type StickySwapProps = {
  locale?: "en" | "es";
};

export default function StickySwap({ locale = "en" }: StickySwapProps) {
  const isEs = locale === "es";
  const cardsToRender = isEs ? cardsEs : cards;
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-swap-item]");
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.25, y: 20 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "bottom 50%",
              scrub: true,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-firo-bg py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="md:sticky md:top-24 md:h-fit">
            <div className="text-sm font-semibold text-firo-blue">{isEs ? "Resultados" : "Outcomes"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Lo que cambia cuando hay evidencia compartida" : "What changes when evidence is shared"}
            </h2>
            <p className="mt-4 max-w-lg text-firo-muted">
              {isEs
                ? "No se trata de convencer con mas opinion. Se trata de mostrar mejor el trabajo que ya haces."
                : "It is not about arguing harder. It is about making your process visible and credible."}
            </p>
          </div>

          <div className="grid gap-4">
            {cardsToRender.map((c) => (
              <div
                key={c.title}
                data-swap-item
                className="rounded-2xl border border-firo-line bg-white p-6 shadow-soft"
              >
                <div className="text-lg font-semibold">{c.title}</div>
                <div className="mt-2 text-firo-muted">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
