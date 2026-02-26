import Image from "next/image";
import Container from "../ui/Container";

type RewardsProps = {
  locale?: "en" | "es";
};

export default function Rewards({ locale = "en" }: RewardsProps) {
  const isEs = locale === "es";
  return (
    <section id="resultados" className="bg-firo-bg py-24 text-firo-text">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-sm font-semibold text-[#5CA1F3]">{isEs ? "Alianza Mana Tech + PeakU" : "Mana Tech + PeakU partnership"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Toda la informacion para decidir mejor, en un solo sistema" : "All applicant intelligence in one AI-powered system"}
            </h2>
            <p className="mt-4 text-firo-muted">
              {isEs
                ? "Tu equipo accede a la informacion completa de cada aplicante, resultados de pruebas tecnicas y de personalidad, y un sistema con IA que clasifica y recomienda a los mejores candidatos."
                : "Your team gets complete applicant profiles, technical and behavioral assessment results, and an AI system that ranks and recommends the strongest candidates."}
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <Loot title={isEs ? "Alcance de candidatos" : "Candidate reach"} value={isEs ? "+200 por oferta" : "200+ per post"} />
              <Loot title={isEs ? "Evaluacion tecnica" : "Technical assessment"} value={isEs ? "Guiada por PeakU" : "Guided by PeakU"} />
              <Loot title={isEs ? "Reporte final" : "Final report"} value={isEs ? "Por cada candidato" : "Per candidate"} />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-[40px] bg-[#5CA1F3]/20 blur-3xl" />
            <Image
              src="/assets/hero/dashboard.png"
              alt="PeakU dashboard"
              width={1400}
              height={900}
              className="relative w-full rounded-3xl shadow-soft"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Loot({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-firo-line bg-[#0B0B0B] p-5">
      <div className="text-xs font-semibold text-firo-muted">{title}</div>
      <div className="mt-2 text-xl font-semibold">{value}</div>
    </div>
  );
}
