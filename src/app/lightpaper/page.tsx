import { readFileSync, existsSync } from "fs";
import { join } from "path";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProtocolFlowchart from "../components/ProtocolFlowchart";
import ReadingProgress from "../components/ReadingProgress";

export default function DocsPage() {
  let content = "";
  let hasLightpaper = false;

  try {
    const filePath = join(process.cwd(), "content", "Rewind_X_Lightpaper_PUBLIC_v1.4.md");
    if (existsSync(filePath)) {
      content = readFileSync(filePath, "utf-8");
      hasLightpaper = true;
    }
  } catch {
    hasLightpaper = false;
  }

  // Split content at mermaid block
  const mermaidRegex = /```mermaid[\s\S]*?```/;
  const parts = content.split(mermaidRegex);
  const hasMermaid = parts.length > 1;

  // Helper to generate slug from header text
  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  // Simple markdown to HTML conversion
  const formatMarkdown = (md: string) => {
    return md
      // Headers with IDs for anchor links
      .replace(/^### (.*$)/gm, (_, title) => {
        const id = slugify(title);
        return `<h3 id="${id}" class="text-xl font-semibold text-white mt-8 mb-4" style="font-family: var(--font-space-grotesk)">${title}</h3>`;
      })
      .replace(/^## (.*$)/gm, (_, title) => {
        const id = slugify(title);
        return `<h2 id="${id}" class="text-2xl font-bold text-white mt-12 mb-6 pb-2 border-b border-white/10" style="font-family: var(--font-space-grotesk)">${title}</h2>`;
      })
      .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold gradient-text mb-8" style="font-family: var(--font-space-grotesk)">$1</h1>')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-cyan hover:text-cyan/80 underline underline-offset-2">$1</a>')
      // Horizontal rules
      .replace(/^---$/gm, '<hr class="my-8 border-white/10" />')
      // Numbered lists (preserve numbers)
      .replace(/^(\d+)\. (.*$)/gm, '<li class="flex items-start gap-3 text-white/60 mb-2"><span class="text-cyan font-mono text-sm min-w-[1.5rem]">$1.</span><span class="flex-1">$2</span></li>')
      // Bullet list items
      .replace(/^- (.*$)/gm, '<li class="flex items-start gap-3 text-white/60 mb-3"><span class="text-cyan text-lg leading-6">•</span><span class="flex-1">$1</span></li>')
      // Paragraphs
      .replace(/\n\n/g, '</p><p class="text-white/60 leading-relaxed mb-4">');
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-white/60 hover:text-cyan transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Content */}
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {hasLightpaper ? (
            <article className="prose prose-invert max-w-none">
              {hasMermaid ? (
                <>
                  <div dangerouslySetInnerHTML={{ __html: formatMarkdown(parts[0]) }} />
                  <ProtocolFlowchart />
                  <div dangerouslySetInnerHTML={{ __html: formatMarkdown(parts[1]) }} />
                </>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }} />
              )}
            </article>
          ) : (
            <div className="text-center py-20">
              <h1
                className="text-4xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Lightpaper <span className="gradient-text">Coming Soon</span>
              </h1>
              <p className="text-white/60 text-lg mb-8">
                The full Rewind X Lightpaper is currently in preparation.
              </p>
              <Link
                href="/"
                className="btn-primary inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/30 text-sm">
            Rewind X — Non-custodial · Deterministic · Fully On-Chain
          </p>
        </div>
      </footer>
    </main>
  );
}
