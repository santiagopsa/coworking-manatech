"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const levels = [
  {
    level: "Step 1",
    title: "Launch your opening",
    earns: "Publish through Mana Tech in minutes",
    does: "Access an exclusive hiring lane for the Mana Tech LatAm tech community",
  },
  {
    level: "Step 2",
    title: "Attract top applicants",
    earns: "Receive high-intent candidate flow",
    does: "Source specialized LatAm profiles, from software developers to bilingual sales executives",
  },
  {
    level: "Step 3",
    title: "Filter with real signal",
    earns: "Run technical and behavioral assessments",
    does: "Prioritize candidates with objective evidence",
  },
  {
    level: "Step 4",
    title: "Decide with confidence",
    earns: "Get a full report for every finalist",
    does: "Skills, fit, and clear recommendations for final interviews",
  },
];
const levelsEs = [
  {
    level: "Paso 1",
    title: "Publica tu oferta",
    earns: "Subes tu vacante desde Mana Tech",
    does: "Acceso exclusivo para la comunidad tech LatAm de Mana Tech",
  },
  {
    level: "Paso 2",
    title: "Recibe candidatos top",
    earns: "Obtienes flujo de perfiles de alto nivel",
    does: "Conectas con talento especializado en LatAm, desde developers hasta ejecutivos comerciales bilingues",
  },
  {
    level: "Paso 3",
    title: "Filtra con evaluaciones",
    earns: "Guiamos pruebas tecnicas y de personalidad",
    does: "Priorizas candidatos con criterios objetivos",
  },
  {
    level: "Paso 4",
    title: "Decide con reportes",
    earns: "Recibes un reporte completo por candidato",
    does: "Habilidades, ajuste y recomendacion final",
  },
];

type LevelsProps = {
  locale?: "en" | "es";
};

export default function Levels({ locale = "en" }: LevelsProps) {
  const isEs = locale === "es";
  const levelItems = isEs ? levelsEs : levels;
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-level]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="proceso" className="bg-firo-bg py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="md:sticky md:top-28">
            <div className="text-sm font-semibold text-[#5CA1F3]">{isEs ? "Proceso" : "Process"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Asi funciona la seleccion para empresas de Mana Tech" : "How Mana Tech companies hire faster"}
            </h2>
            <p className="mt-4 text-firo-muted">
              {isEs
                ? "Combinamos alcance, evaluacion y analitica para que cada vacante se convierta en una contratacion mejor respaldada."
                : "We combine reach, assessments, and reporting so every opening turns into a smarter, faster decision for specialized LatAm hiring."}
            </p>
          </div>

          <div className="grid gap-4">
            {levelItems.map((l) => (
              <div
                key={l.title}
                data-level
                className="group rounded-3xl border border-firo-line bg-[#0B0B0B] p-6 shadow-soft transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-firo-muted">{l.level}</div>
                  <div className="h-2 w-2 rounded-full bg-[#38F9A5] opacity-70 group-hover:opacity-100" />
                </div>
                <div className="mt-2 text-xl font-semibold tracking-tight">{l.title}</div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <Stat label={isEs ? "Que incluye" : "Included"} value={l.earns} />
                  <Stat label={isEs ? "Resultado" : "Outcome"} value={l.does} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-firo-line bg-[#111111] p-4">
      <div className="text-xs font-semibold text-firo-muted">{label}</div>
      <div className="mt-1 text-sm">{value}</div>
    </div>
  );
}
