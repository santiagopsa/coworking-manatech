import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import Join from "@/components/sections/Join";

export const metadata: Metadata = {
  title: "PeakU | Guia para reclutadores que necesitan respaldo interno",
  description:
    "Landing de PeakU para reclutadores que sienten su criterio subvalorado: evidencia estructurada para defender candidatos y reducir reprocesos.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PeakU | Reclutamiento con evidencia y confianza interna",
    description:
      "Descarga una guia practica para presentar candidatos con claridad, datos y criterios que los lideres entienden.",
    url: "/",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "PeakU dashboard for recruiter decision support",
      },
    ],
  },
};

export default function Page() {
  return (
    <main id="top">
      <Nav />
      <VideoHero />
      <Lore />
      <Levels />
      <div id="thesis">
        <StickySwap />
      </div>
      <Rewards />
      <Join />
    </main>
  );
}
