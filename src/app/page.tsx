import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { History } from "@/components/sections/history";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Learn } from "@/components/sections/learn";
import { QuantoraAi } from "@/components/sections/quantora-ai";
import { Research } from "@/components/sections/research";
import { Review } from "@/components/sections/review";
import { Thesis } from "@/components/sections/thesis";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Learn />
        <Research />
        <Thesis />
        <QuantoraAi />
        <Review />
        <History />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
