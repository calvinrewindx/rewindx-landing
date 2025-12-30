import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import AgentsHero from "../components/agents/AgentsHero";
import ProblemSection from "../components/agents/ProblemSection";
import SolutionSection from "../components/agents/SolutionSection";
import AgentsHowItWorks from "../components/agents/AgentsHowItWorks";
import AudienceSection from "../components/agents/AudienceSection";
import AgentsCTA from "../components/agents/AgentsCTA";

export const metadata: Metadata = {
  title: "AI Agents | Rewind X - Safety for Autonomous Transfers",
  description:
    "Protect AI agents with bounded reversibility. Policy-gated autonomy, on-chain enforcement, 24h rewind window.",
};

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AgentsHero />
      <ScrollReveal>
        <ProblemSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <SolutionSection />
      </ScrollReveal>
      <ScrollReveal>
        <AgentsHowItWorks />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <AudienceSection />
      </ScrollReveal>
      <ScrollReveal>
        <AgentsCTA />
      </ScrollReveal>
      <ScrollReveal direction="none">
        <Footer />
      </ScrollReveal>
    </main>
  );
}
