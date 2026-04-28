import Header from "./components/Header";
import HeroV2 from "./components/HeroV2";
import ProblemStats from "./components/ProblemStats";
import WhatIsRewindX from "./components/WhatIsRewindX";
import HowItWorks from "./components/HowItWorks";
import UseCases from "./components/UseCases";
import UserStory from "./components/UserStory";
import MultiTokenPreview from "./components/MultiTokenPreview";
import NFTProof from "./components/NFTProof";
import FeeSection from "./components/FeeSection";
import RewindSimulator from "./components/RewindSimulator";
import SecurityPrinciples from "./components/SecurityPrinciples";
import FAQ from "./components/FAQ";
import InvestorInfo from "./components/InvestorInfo";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var key='home-pos';
              if('scrollRestoration' in history){history.scrollRestoration='manual'}
              var saving=false;
              function save(){if(!saving){saving=true;sessionStorage.setItem(key,String(window.scrollY));saving=false}}
              window.addEventListener('scroll',save,{passive:true});
              window.addEventListener('beforeunload',save);
              window.addEventListener('pagehide',save);
              if(!window.location.hash){
                var pos=sessionStorage.getItem(key);
                if(pos&&parseInt(pos)>100){
                  var p=parseInt(pos);
                  function go(){
                    try{window.scrollTo({top:p,left:0,behavior:'instant'})}
                    catch(e){window.scrollTo(0,p)}
                  }
                  go();
                  requestAnimationFrame(go);
                  document.addEventListener('DOMContentLoaded',go);
                  window.addEventListener('load',go);
                }
              }
            })();
          `,
        }}
      />
      <Header />
      <HeroV2 />
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
      <ScrollReveal>
        <FeeSection />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <NFTProof />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <RewindSimulator />
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
