import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import Join from "@/components/sections/Join";

export const metadata: Metadata = {
  title: "Manatech x PeakU | Contrata talento especializado en LatAm",
  description:
    "Ruta exclusiva para empresas de Manatech: encuentra talento especializado en LatAm como desarrolladores de software y ejecutivos comerciales bilingues, con mejor filtrado y decisiones mas claras.",
  alternates: {
    canonical: "/es",
  },
  openGraph: {
    locale: "es_ES",
    title: "Manatech x PeakU | Acceso exclusivo a talento especializado",
    description:
      "Publica vacantes desde Manatech y conecta con talento especializado en LatAm, incluyendo developers de software y ejecutivos comerciales bilingues, con reportes por candidato.",
    url: "/es",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "Dashboard PeakU para respaldo de decisiones de seleccion",
      },
    ],
  },
};

export default function PageEs() {
  return (
    <main id="top">
      <Nav locale="es" />
      <VideoHero locale="es" />
      <Lore locale="es" />
      <Levels locale="es" />
      <StickySwap locale="es" />
      <Rewards locale="es" />
      <Join locale="es" />
    </main>
  );
}
