import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function Section({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <div className="relative pl-5">
      <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-cyan/10" />
      <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#050505] border-2 border-cyan/20 text-cyan">
        {num}
      </div>
      <h2 className="text-sm font-bold mb-3 pt-0.5 text-white/90">{title}</h2>
      <div className="h-px mb-3 bg-white/[0.06]" />
      <div className="text-sm leading-[1.75] space-y-2.5 text-white/70">
        {children}
      </div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-20 px-6">
      <div className="max-w-2xl mx-auto space-y-5 pb-12">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-white/70 bg-white/[0.03] border border-white/[0.08] hover:border-cyan/30 hover:bg-cyan/[0.05]"
        >
          <ArrowLeft size={15} className="text-cyan" />
          <span className="text-sm font-medium">Back</span>
        </Link>

        {/* Header */}
        <div className="rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-sm border border-cyan/10">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
          <div className="p-6">
            <h1 className="text-xl font-black text-white/90">Terms of Use</h1>
            <p className="text-xs mt-1 mb-4 text-white/30">Last updated: April 2026</p>
            <p className="text-sm font-medium text-white/90">Welcome to Rewind X.</p>
            <p className="text-sm leading-[1.75] mt-2 text-white/70">
              By accessing or using this interface, you agree to the following terms. If you do not agree, do not use the interface.
            </p>
          </div>
        </div>

        <Section num={1} title="Nature of the Interface">
          <p>Rewind X provides a user interface for interacting with smart contracts deployed on public, permissionless blockchain networks.</p>
          <p>The interface itself does not custody assets, execute transactions on behalf of users, or control user funds.</p>
          <p>All transactions are initiated through the user&apos;s wallet and executed directly on the blockchain.</p>
          <p>These terms apply only to the user interface. Interaction with smart contracts occurs directly on the blockchain and is outside the control of this interface.</p>
        </Section>

        <Section num={2} title="Non-Custodial Design">
          <p>Rewind X is a non-custodial interface. You remain fully responsible for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>your wallet</li>
            <li>private keys</li>
            <li>transaction confirmations</li>
            <li>on-chain actions</li>
          </ul>
          <p>No party associated with this interface can access, recover, or reverse transactions except where such outcomes are explicitly defined by protocol smart contract logic.</p>
        </Section>

        <Section num={3} title="Early Version Notice">
          <p>This interface represents an early public release of the protocol. Features and functionality may change, be modified, or be removed over time.</p>
          <p>Interface updates do not by themselves alter the behavior of already deployed smart contracts.</p>
          <p>Users should review available documentation before interacting with the system. Use of the interface and protocol occurs at your own discretion and responsibility.</p>
        </Section>

        <Section num={4} title="User Responsibility">
          <p>You agree that you are solely responsible for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>verifying transaction details</li>
            <li>understanding protocol behavior</li>
            <li>ensuring compatibility with your wallet and network</li>
            <li>complying with applicable laws in your jurisdiction</li>
          </ul>
        </Section>

        <Section num={5} title="Blockchain Risks">
          <p>Blockchain systems involve inherent risks, including but not limited to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>network interruptions</li>
            <li>smart contract behavior</li>
            <li>transaction delays</li>
            <li>third-party wallet software issues</li>
            <li>blockchain congestion or reorganization</li>
            <li>losses caused by incorrect transaction inputs</li>
          </ul>
          <p>By using this interface, you acknowledge and accept these general risks.</p>
        </Section>

        <Section num={6} title="Error Monitoring">
          <p>Technical error monitoring tools may be activated in the future to maintain stability and improve the interface.</p>
          <p>If such tools are activated, the related data processing will be described in the Privacy Policy before activation.</p>
        </Section>

        <Section num={7} title="No Financial Advice">
          <p>This interface is a technical tool only.</p>
          <p>Nothing provided through Rewind X constitutes financial, investment, legal, or tax advice.</p>
        </Section>

        <Section num={8} title="Availability and Legal Restrictions">
          <p>Use of this interface may be restricted or prohibited under the laws or regulations of certain jurisdictions.</p>
          <p>You are solely responsible for ensuring that your use of the interface is lawful where you access it.</p>
        </Section>

        <Section num={9} title="No Guarantees">
          <p>The interface is provided on an &quot;as available&quot; and &quot;as is&quot; basis.</p>
          <p>No guarantees are made regarding uninterrupted access, performance, or outcomes of smart contract interactions.</p>
        </Section>

        <Section num={10} title="Limitation of Liability">
          <p>To the maximum extent permitted by law, the operators, developers, and contributors associated with this interface shall not be liable for any loss of funds, damages, or claims arising from:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>use of the interface</li>
            <li>interaction with blockchain systems</li>
            <li>user error</li>
            <li>incorrect transaction inputs</li>
            <li>wallet software issues</li>
            <li>smart contract behavior</li>
          </ul>
        </Section>

        <Section num={11} title="Age Requirement">
          <p>You must be at least 18 years old to use this interface.</p>
          <p>By accessing or using the interface, you represent and warrant that you are at least 18 years of age.</p>
        </Section>

        <Section num={12} title="No Independent External Audit">
          <p>The protocol has not undergone an independent external security audit.</p>
          <p>By using the interface, you acknowledge and accept this risk.</p>
        </Section>

        <Section num={13} title="Emergency Controls">
          <p>The protocol may include emergency pause or safety control functionality for security purposes.</p>
          <p>In a paused state, normal protocol operations may be temporarily restricted. Balances remain in place according to smart contract logic unless and until normal operation resumes.</p>
        </Section>

        <Section num={14} title="Fees">
          <p>Use of the protocol may involve protocol fees, interface-disclosed fees, and blockchain network fees.</p>
          <p>Any applicable fees are presented through the interface or determined by protocol smart contract logic. You are solely responsible for reviewing and accepting any such fees before confirming a transaction.</p>
        </Section>

        <Section num={15} title="Sanctions and Restricted Persons">
          <p>You may not use the interface if you are subject to economic or trade sanctions, located in a comprehensively sanctioned jurisdiction, or otherwise prohibited from using the interface under applicable laws or regulations.</p>
          <p>You may not use the interface in connection with any unlawful activity, including sanctions evasion or the facilitation of prohibited transactions.</p>
        </Section>

        <Section num={16} title="Prohibited Uses">
          <p>You agree not to use the interface or protocol for any unlawful, abusive, or harmful purpose, including but not limited to money laundering, sanctions evasion, fraud, market manipulation, wash trading, or attempts to interfere with or misuse the protocol.</p>
          <p>You also agree not to use the interface in a manner that could damage, disable, overburden, or impair the operation of the interface or related systems.</p>
        </Section>

        <Section num={17} title="Indemnification">
          <p>To the maximum extent permitted by law, you agree to indemnify, defend, and hold harmless the operators, developers, and contributors associated with the interface from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal costs, arising out of or related to your use of the interface, your violation of these Terms, your violation of any applicable law or regulation, or your infringement of the rights of any third party.</p>
        </Section>

        <Section num={18} title="Intellectual Property">
          <p>The interface, branding, design, text, graphics, and other content made available through the interface are protected by applicable intellectual property laws.</p>
          <p>Except as otherwise expressly stated, no part of the interface or related materials may be copied, reproduced, modified, distributed, or used for commercial purposes without prior written permission from the relevant rights holder.</p>
        </Section>

        <Section num={19} title="Token Compatibility">
          <p>The interface and protocol do not guarantee compatibility with every token, wallet, or smart contract implementation.</p>
          <p>Certain token designs, including non-standard or modified token behavior, may result in unexpected outcomes. You are solely responsible for determining whether a particular asset or transaction type is suitable for use with the protocol.</p>
        </Section>

        <Section num={20} title="Governing Law and Jurisdiction">
          <p>These Terms of Use shall be governed by and construed in accordance with the laws of England and Wales.</p>
          <p>Any dispute, claim, or controversy arising out of or relating to these Terms or the use of the interface shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
        </Section>

        <Section num={21} title="Updates to These Terms">
          <p>These Terms of Use may be updated from time to time.</p>
          <p>Updated terms become effective upon publication on the website or interface. Continued use after publication constitutes acceptance of the updated terms.</p>
        </Section>

        <p className="text-xs text-center pt-2 text-white/30">
          &copy; 2026 Rewind X
        </p>
      </div>
    </main>
  );
}
