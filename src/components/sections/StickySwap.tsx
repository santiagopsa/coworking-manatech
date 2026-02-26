"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const cards = [
  { title: "Complete candidate intelligence", desc: "Every finalist profile includes technical outcomes, behavioral insights, and a hiring recommendation." },
  { title: "Faster shortlisting", desc: "Assessment-backed filtering keeps your team focused on high-fit candidates only." },
  { title: "Higher decision confidence", desc: "Hiring managers get objective signal, not just resumes and gut feeling." },
  { title: "Exclusive community advantage", desc: "Mana Tech companies publish through a differentiated channel to attract specialized LatAm talent." },
];
const cardsEs = [
  { title: "Reporte completo por candidato", desc: "Cada perfil preseleccionado incluye resultados tecnicos, rasgos de personalidad y recomendacion." },
  { title: "Preseleccion mas rapida", desc: "El filtrado con evaluaciones permite enfocar entrevistas en perfiles de mayor ajuste." },
  { title: "Decisiones con mas certeza", desc: "Los lideres reciben evidencia objetiva para decidir con seguridad." },
  { title: "Ventaja exclusiva para Mana Tech", desc: "Las empresas de la comunidad Mana Tech publican en un canal diferenciado para atraer mejor talento." },
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
            <div className="text-sm font-semibold text-[#38F9A5]">{isEs ? "Resultados esperados" : "Expected outcomes"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Lo que obtiene tu equipo al publicar con PeakU desde Mana Tech" : "What your team unlocks with PeakU through Mana Tech"}
            </h2>
            <p className="mt-4 max-w-lg text-firo-muted">
              {isEs
                ? "No es solo volumen de postulaciones. Es calidad de filtro y claridad para tomar decisiones de contratacion."
                : "This is not just more applicants. It is better screening and decision-ready evidence for specialized LatAm hiring."}
            </p>
          </div>

          <div className="grid gap-4">
            {cardsToRender.map((c) => (
              <div
                key={c.title}
                data-swap-item
                className="rounded-2xl border border-firo-line bg-[#0B0B0B] p-6 shadow-soft"
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
