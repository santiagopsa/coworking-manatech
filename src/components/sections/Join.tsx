import Container from "../ui/Container";

type JoinProps = {
  locale?: "en" | "es";
};

export default function Join({ locale = "en" }: JoinProps) {
  const isEs = locale === "es";
  return (
    <section id="join" className="bg-firo-bg py-24">
      <Container>
        <div className="rounded-3xl border border-firo-line bg-firo-bg p-8 shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <div className="text-sm font-semibold text-firo-blue">{isEs ? "Guia gratuita" : "Free guide"}</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {isEs
                  ? "Guia gratuita: Como defender tus candidatos sin entrar en discusiones subjetivas"
                  : "Free guide: How to defend your candidates without subjective debates"}
              </h2>
              <p className="mt-3 text-firo-muted">
                {isEs
                  ? "Un framework practico usado por reclutadores para presentar candidatos con claridad, datos y argumentos que los lideres si entienden."
                  : "A practical framework recruiters use to present candidates with clarity, evidence, and arguments leaders can understand."}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <form
                action="https://formsubmit.co/santiagopsa@gmail.com"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="PeakU Guia gratuita para reclutadores" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="name">
                    {isEs ? "Nombre" : "Name"}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "Tu nombre completo" : "Your full name"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="email">
                    {isEs ? "Correo electronico" : "Email"}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "tu@email.com" : "you@email.com"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="phone">
                    {isEs ? "Telefono" : "Phone"}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "+57 300 000 0000" : "+1 (555) 000-0000"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  {isEs ? "Descargar ahora" : "Download now"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-6 text-xs text-firo-muted">
            {isEs
              ? "Sin spam. Creado por personas que tambien han estado en tu lugar."
              : "No spam. Built by people who have been in your position."}
          </div>
        </div>
      </Container>
    </section>
  );
}
