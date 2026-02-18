import Image from "next/image";
import Container from "../ui/Container";

type RewardsProps = {
  locale?: "en" | "es";
};

export default function Rewards({ locale = "en" }: RewardsProps) {
  const isEs = locale === "es";
  return (
    <section id="rewards" className="bg-firo-bg py-24 text-firo-text">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-sm font-semibold text-firo-blue">{isEs ? "Origen de PeakU" : "Why PeakU exists"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Esto fue exactamente lo que nos llevo a crear PeakU" : "This is exactly why we built PeakU"}
            </h2>
            <p className="mt-4 text-firo-muted">
              {isEs
                ? "Vimos reclutadores con buen criterio quedarse sin respaldo interno. PeakU les ayuda a estructurar evaluaciones, generar reportes de seleccion y presentar candidatos en un formato que los equipos si confian."
                : "We kept seeing recruiters with solid judgment lose internal support. PeakU helps structure evaluations, build hiring reports, and present candidates in a format teams trust."}
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <Loot title={isEs ? "Evaluaciones claras" : "Clear evaluations"} value={isEs ? "Criterios visibles" : "Visible criteria"} />
              <Loot title={isEs ? "Reportes de seleccion" : "Hiring reports"} value={isEs ? "Evidencia ordenada" : "Organized evidence"} />
              <Loot title={isEs ? "Alineacion interna" : "Internal alignment"} value={isEs ? "Menos friccion" : "Less friction"} />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-[40px] bg-firo-blue/15 blur-3xl" />
            <Image
              src="/assets/hero/dashboard.png"
              alt="FIRO dashboard"
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
    <div className="rounded-2xl border border-firo-line bg-white p-5">
      <div className="text-xs font-semibold text-firo-muted">{title}</div>
      <div className="mt-2 text-xl font-semibold">{value}</div>
    </div>
  );
}
