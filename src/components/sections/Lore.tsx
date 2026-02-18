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
    <section ref={root} id="lore" className="bg-firo-bg py-24 text-firo-text">
      <Container>
        <div className="max-w-3xl">
          <div data-reveal className="text-sm font-semibold text-firo-blue">
            {isEs ? "Contexto" : "Context"}
          </div>
          <h2 data-reveal className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {isEs
              ? "El trabajo invisible del reclutador"
              : "The recruiter’s invisible work"}
          </h2>
          <p data-reveal className="mt-4 text-firo-muted">
            {isEs
              ? "Filtras cientos de perfiles. Haces entrevistas estructuradas. Evaluas habilidades tecnicas y humanas. Construyes una recomendacion solida."
              : "You review hundreds of profiles, run structured interviews, and build strong recommendations."}
          </p>
          <p data-reveal className="mt-3 text-firo-muted">
            {isEs
              ? "Y muchas veces todo termina en una frase: \"No me convencio.\""
              : "And too often everything ends with one sentence: \"I am not convinced.\""}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card
              title={isEs ? "Filtro riguroso" : "Rigorous filtering"}
              desc={isEs ? "Filtras cientos de perfiles para separar potencial real de ruido." : "You filter hundreds of profiles to separate signal from noise."}
            />
            <Card
              title={isEs ? "Criterio profesional" : "Structured judgment"}
              desc={isEs ? "Estructuras entrevistas, evaluas habilidades y comparas evidencia." : "You structure interviews, evaluate skills, and compare evidence."}
            />
            <Card
              title={isEs ? "Desgaste interno" : "Internal friction"}
              desc={isEs ? "Sin contexto compartido, tus recomendaciones quedan expuestas a opiniones sueltas." : "Without shared context, your recommendations are exposed to subjective calls."}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div data-reveal className="rounded-2xl border border-firo-line bg-white p-5">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-sm text-firo-muted">{desc}</div>
    </div>
  );
}
