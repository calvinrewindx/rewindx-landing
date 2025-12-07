import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemStats from "./components/ProblemStats";
import WhatIsRewindX from "./components/WhatIsRewindX";
import HowItWorks from "./components/HowItWorks";
import UseCases from "./components/UseCases";
import UserStory from "./components/UserStory";
import MultiTokenPreview from "./components/MultiTokenPreview";
import NFTProof from "./components/NFTProof";
import FeeSection from "./components/FeeSection";
import SecurityPrinciples from "./components/SecurityPrinciples";
import FAQ from "./components/FAQ";
import InvestorInfo from "./components/InvestorInfo";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ScrollReveal>
        <ProblemStats />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div id="features">
          <WhatIsRewindX />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div id="how-it-works">
          <HowItWorks />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <UseCases />
      </ScrollReveal>
      <ScrollReveal direction="left">
        <UserStory />
      </ScrollReveal>
      <ScrollReveal>
        <MultiTokenPreview />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <NFTProof />
      </ScrollReveal>
      <ScrollReveal>
        <FeeSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div id="security">
          <SecurityPrinciples />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <InvestorInfo />
      </ScrollReveal>
      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
      <ScrollReveal direction="none">
        <Footer />
      </ScrollReveal>
    </main>
  );
}
