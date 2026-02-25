import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import Join from "@/components/sections/Join";

export const metadata: Metadata = {
  title: "Manatech x PeakU | Hire Better, Move Faster",
  description:
    "Exclusive hiring lane for Manatech companies: hire specialized LatAm talent like software developers and bilingual sales executives with stronger screening and clearer decisions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Manatech x PeakU | Exclusive Hiring Access for Manatech",
    description:
      "Post openings through Manatech and connect with specialized LatAm talent, including software developers and bilingual sales executives, plus decision-ready candidate reports.",
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
