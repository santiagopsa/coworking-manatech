"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

type LoreProps = {
  locale?: "en" | "es";
};

export default function Lore({ locale = "en" }: LoreProps) {
  const isEs = locale === "es";
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 75%" },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="beneficios" className="bg-firo-bg py-24 text-firo-text">
      <Container>
        <div className="max-w-3xl">
          <div data-reveal className="text-sm font-semibold text-[#38F9A5]">
            {isEs ? "Beneficios para la comunidad Mana Tech" : "Benefits for Mana Tech community"}
          </div>
          <h2 data-reveal className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {isEs
              ? "Publica una vacante con ventaja real desde tu comunidad tech."
              : "Post openings with a real hiring edge."}
          </h2>
          <p data-reveal className="mt-4 text-firo-muted">
            {isEs
              ? "Mana Tech ofrece acceso exclusivo a PeakU para atraer talento especializado en LatAm, incluyendo developers de software y ejecutivos comerciales bilingues."
              : "Mana Tech companies get an exclusive lane into PeakU to hire specialized LatAm talent, including software developers and bilingual sales executives."}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card
              title={isEs ? "Acceso a talento especializado" : "Specialized talent, at scale"}
              desc={isEs ? "Conecta con talento especializado en LatAm para posiciones criticas de tecnologia y crecimiento." : "Connect with specialized LatAm talent for critical tech and revenue positions."}
            />
            <Card
              title={isEs ? "Mas de 200 aplicaciones" : "200+ applications per opening"}
              desc={isEs ? "Cada publicacion recibe alto volumen para elegir entre los mejores perfiles." : "Build serious pipeline fast without sacrificing candidate quality."}
            />
            <Card
              title={isEs ? "Evaluacion guiada" : "Signal-rich evaluation"}
              desc={isEs ? "Aplicamos pruebas tecnicas y de personalidad para filtrar con criterio objetivo." : "Use technical and behavioral assessments to shortlist with objective signal."}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div data-reveal className="rounded-2xl border border-firo-line bg-[#0B0B0B] p-5">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-sm text-firo-muted">{desc}</div>
    </div>
  );
}
