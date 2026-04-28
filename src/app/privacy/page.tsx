import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Rewind X — Privacy Policy",
  description: "Privacy Policy for the Rewind X interface.",
};

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

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4 pl-4 py-3 rounded-lg bg-white/[0.02] border-l-2 border-cyan/15">
      <h3 className="text-xs font-bold mb-2 text-cyan">{title}</h3>
      <div className="text-sm leading-[1.75] space-y-2 text-white/70">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-20 px-6">
      <div className="max-w-2xl mx-auto space-y-5 pb-12">
        {/* Back */}
        <a
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-white/70 bg-white/[0.03] border border-white/[0.08] hover:border-cyan/30 hover:bg-cyan/[0.05]"
        >
          <ArrowLeft size={15} className="text-cyan" />
          <span className="text-sm font-medium">Back</span>
        </a>

        {/* Header */}
        <div className="rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-sm border border-cyan/10">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
          <div className="p-6">
            <h1 className="text-xl font-black text-white/90">Privacy Policy</h1>
            <p className="text-xs mt-1 text-white/30">Last updated: April 2026</p>
          </div>
        </div>

        <Section num={1} title="Overview">
          <p>Rewind X is a non-custodial web interface for interacting with smart contracts deployed on public blockchain networks.</p>
          <p>This interface is not intended for use by persons under the age of 18.</p>
          <p>This Privacy Policy explains what limited data is processed when you use this interface, and why.</p>
          <p>This interface does not collect personal data for marketing, analytics, or profiling purposes. Data processing is limited to what is technically necessary to operate the interface.</p>
        </Section>

        <Section num={2} title="What is processed and why">
          <Sub title="2.1 Cloudflare (Infrastructure & CDN)">
            <p>This interface is served through Cloudflare, Inc., a third-party infrastructure and content delivery provider.</p>
            <p>When you access this interface, Cloudflare processes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>IP address</li>
              <li>Date and time of access</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages accessed</li>
            </ul>
            <p><strong className="text-white/80">Purpose:</strong> Content delivery, DDoS protection, infrastructure security, and performance optimization.</p>
            <p><strong className="text-white/80">Legal basis:</strong> Legitimate interest (Art. 6(1)(f) GDPR).</p>
            <p>Cloudflare&apos;s privacy policy: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="underline text-cyan hover:text-cyan/80">cloudflare.com/privacypolicy</a></p>
          </Sub>

          <Sub title="2.2 Browser storage (localStorage / sessionStorage)">
            <p>This interface uses browser storage strictly for product functionality.</p>
            <p>What may be stored locally in your browser:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cached on-chain data (transfer states, rewind details) — temporary, 4h TTL</li>
              <li>Recently used recipient addresses — automatically stored locally after successful transfers for convenience, with a 14-day retention period</li>
              <li>Transaction references (TX hashes) — for UI state continuity</li>
              <li>NFT display state — for interface rendering</li>
              <li>Session flow state — tab-scoped, deleted automatically when tab closes</li>
            </ul>
            <p><strong className="text-white/80">This browser-stored data stays on your device and is not sent to any Rewind X backend server for analytics, marketing, or profiling purposes.</strong></p>
            <p>This interface does not use analytics, advertising, or marketing cookies. Browser storage is used only where technically necessary for core product functionality and convenience features.</p>
          </Sub>

          <Sub title="2.3 Blockchain data">
            <p>All transfers, rewinds, and on-chain interactions are executed directly through your wallet on the public blockchain.</p>
            <p>Wallet addresses and transaction data are publicly visible on-chain by nature. This interface does not collect, store, or process wallet addresses on any backend.</p>
          </Sub>

          <Sub title="2.4 External resources">
            <p>When the interface loads certain content, your browser makes standard requests to external services:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white/80">IPFS gateway (ipfs.io)</strong> — for NFT image content</li>
              <li><strong className="text-white/80">GitHub CDN (raw.githubusercontent.com)</strong> — for token logo assets</li>
            </ul>
            <p>These requests are initiated by your browser as part of normal interface operation. These providers may log your IP address as part of their standard CDN operation.</p>
          </Sub>
        </Section>

        <Section num={3} title="What we do not collect">
          <ul className="list-disc pl-5 space-y-1">
            <li>No analytics</li>
            <li>No marketing trackers</li>
            <li>No profiling</li>
            <li>No user accounts</li>
            <li>No form submissions</li>
            <li>No private keys or wallet secrets</li>
            <li>No signing data</li>
            <li>No user account database or application backend database</li>
          </ul>
        </Section>

        <Section num={4} title="Technical error monitoring">
          <p>We may activate technical error monitoring tools in the future to maintain interface stability and identify bugs.</p>
          <p>If such tools are activated, this Privacy Policy will be updated before activation to reflect which service is used, what data may be collected, how that data is handled, and whether any data transfer outside the EEA occurs.</p>
          <p>Until then, no error monitoring service is active.</p>
        </Section>

        <Section num={5} title="Third-party services">
          <div className="rounded-xl overflow-hidden border border-white/[0.08]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0a0a0e]">
                  <th className="text-left px-4 py-2 text-xs font-medium text-white/30">Service</th>
                  <th className="text-left px-4 py-2 text-xs font-medium text-white/30">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cloudflare", "Infrastructure, CDN, security"],
                  ["IPFS gateway (ipfs.io)", "NFT image delivery"],
                  ["GitHub CDN", "Token logo assets"],
                ].map(([service, purpose]) => (
                  <tr key={service} className="border-t border-white/[0.06]">
                    <td className="px-4 py-2 text-white/90">{service}</td>
                    <td className="px-4 py-2 text-white/60">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>This interface does not use advertising networks, social media trackers, or analytics platforms.</p>
        </Section>

        <Section num={6} title="Data transfers outside the EEA">
          <p>Cloudflare operates infrastructure globally, including in the United States. Cloudflare states that it relies on appropriate transfer mechanisms, including Standard Contractual Clauses, for relevant international data transfers under GDPR.</p>
        </Section>

        <Section num={7} title="Your rights under GDPR">
          <p>If you are located in the European Economic Area, you have the following rights:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-white/80">Right of access</strong> — request information about what data is processed</li>
            <li><strong className="text-white/80">Right to rectification</strong> — request correction of inaccurate data</li>
            <li><strong className="text-white/80">Right to erasure</strong> — request deletion where applicable</li>
            <li><strong className="text-white/80">Right to object</strong> — object to processing based on legitimate interest</li>
            <li><strong className="text-white/80">Right to lodge a complaint</strong> — file a complaint with your national data protection authority</li>
          </ul>
          <p>Please note that blockchain transaction data is public by nature and cannot be deleted or modified through this interface.</p>
          <p>For privacy-related questions, contact us at: <a href="mailto:contact.rewindx@proton.me" className="underline text-cyan hover:text-cyan/80">contact.rewindx@proton.me</a></p>
        </Section>

        <Section num={8} title="Data retention">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-white/80">Cloudflare logs:</strong> Retained according to Cloudflare&apos;s own practices</li>
            <li><strong className="text-white/80">Transfer cache and similar locally cached interface data:</strong> Up to 4 hours</li>
            <li><strong className="text-white/80">Recently used recipient addresses stored locally for convenience:</strong> Up to 14 days</li>
            <li><strong className="text-white/80">Session storage:</strong> Deleted automatically when the browser tab is closed</li>
            <li><strong className="text-white/80">Blockchain data:</strong> Permanent by nature of public blockchain infrastructure</li>
          </ul>
        </Section>

        <Section num={9} title="Changes to this policy">
          <p>This Privacy Policy may be updated from time to time. Where appropriate, users will be notified of material changes through the interface.</p>
        </Section>

        <Section num={10} title="Contact">
          <p>For privacy-related questions: <a href="mailto:contact.rewindx@proton.me" className="underline text-cyan hover:text-cyan/80">contact.rewindx@proton.me</a></p>
        </Section>

        <p className="text-xs text-center pt-2 text-white/30">&copy; 2026 Rewind X</p>
      </div>
    </main>
  );
}
