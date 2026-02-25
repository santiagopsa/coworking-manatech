"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

type VideoHeroProps = {
  locale?: "en" | "es";
};

export default function VideoHero({ locale = "en" }: VideoHeroProps) {
  const isEs = locale === "es";
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-counter]",
        { innerText: 0 },
        {
          innerText: 200,
          duration: 1.2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: { trigger: root.current!, start: "top 70%" },
        } as any
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100vh] overflow-hidden bg-firo-bg text-firo-text"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/firo-hero-poster.jpg"
      >
        <source src="/video/firo-hero.webm" type="video/webm" />
        <source src="/video/firo-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/78 to-firo-bg/98" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,.9) 0, rgba(255,255,255,.9) 1px, transparent 2px, transparent 7px)",
        }}
      />

      <Container>
        <div className="relative z-10 flex min-h-[100vh] items-center py-16">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2 text-xs text-firo-text">
              <a
                href="/"
                className={`rounded-md px-2 py-1 hover:text-firo-text ${
                  !isEs ? "bg-[#5CA1F3]/20 text-firo-text" : ""
                }`}
              >
                EN
              </a>
              <a
                href="/es"
                className={`rounded-md px-2 py-1 hover:text-firo-text ${
                  isEs ? "bg-[#5CA1F3]/20 text-firo-text" : ""
                }`}
              >
                ES
              </a>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-firo-line bg-black/70 px-4 py-2 text-sm text-firo-text">
              <span className="h-2 w-2 rounded-full bg-[#38F9A5]" />
              {isEs ? "PeakU + Manatech Coworking" : "PeakU + Manatech Coworking"}
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              {isEs ? (
                <>
                  Publica tu vacante desde Manatech y recibe
                  <span className="text-[#38F9A5] drop-shadow-[0_0_22px_rgba(56,249,165,.45)]">
                    {" "}talento especializado de alto nivel.
                  </span>
                </>
              ) : (
                <>
                  Stop hiring blind. Launch your opening through Manatech and get
                  <span className="text-[#38F9A5] drop-shadow-[0_0_22px_rgba(56,249,165,.45)]">
                    {" "}specialized LatAm talent that moves the needle.
                  </span>
                </>
              )}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-firo-muted md:text-lg">
              {isEs
                ? "PeakU conecta a empresas de Manatech con talento especializado en LatAm, desde desarrolladores de software hasta ejecutivos comerciales bilingues, con mejor filtrado y reportes por candidato."
                : "PeakU gives Manatech companies privileged access to specialized LatAm talent, from software developers to bilingual sales executives, with stronger screening and decision-ready candidate reports."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#join"
                className="rounded-xl bg-[#38F9A5] px-5 py-3 text-sm font-semibold text-black shadow-soft transition hover:brightness-95"
              >
                {isEs ? "Publicar oferta en PeakU" : "Launch your opening on PeakU"}
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 text-sm md:grid-cols-3">
              <div className="rounded-xl border border-firo-line bg-[#0B0B0B]/90 p-3">
                <div className="text-firo-muted">{isEs ? "Aplicaciones por vacante" : "Applications per opening"}</div>
                <div className="mt-1 text-xl font-semibold text-firo-text">+<span data-counter>0</span></div>
              </div>
              <div className="rounded-xl border border-firo-line bg-[#0B0B0B]/90 p-3">
                <div className="text-firo-muted">{isEs ? "Base de talento" : "Talent network"}</div>
                <div className="mt-1 text-xl font-semibold text-[#5CA1F3]">{isEs ? "Especializado" : "Specialized"}</div>
              </div>
              <div className="rounded-xl border border-firo-line bg-[#0B0B0B]/90 p-3">
                <div className="text-firo-muted">{isEs ? "Seleccion guiada" : "Screening quality"}</div>
                <div className="mt-1 text-xl font-semibold text-[#38F9A5]">{isEs ? "Pruebas + reporte" : "Assessments + reports"}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
