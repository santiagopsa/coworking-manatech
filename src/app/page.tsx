import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import Join from "@/components/sections/Join";

export const metadata: Metadata = {
  title: "Mana Tech x PeakU | Hire Better, Move Faster",
  description:
    "Exclusive hiring lane for the Mana Tech LatAm tech community, based in Miami: hire specialized talent like software developers and bilingual sales executives with stronger screening and clearer decisions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mana Tech x PeakU | Exclusive Hiring Access for Mana Tech",
    description:
      "Post openings through Mana Tech's Miami-based LatAm tech community and connect with specialized talent, including software developers and bilingual sales executives, plus decision-ready candidate reports.",
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
      <StickySwap />
      <Rewards />
      <Join />
    </main>
  );
}
