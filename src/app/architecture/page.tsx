import { readFileSync, existsSync } from "fs";
import { join } from "path";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArchitecturePage() {
  let content = "";
  let hasArchitecture = false;

  try {
    const filePath = join(process.cwd(), "content", "ARCHITECTURE.md");
    if (existsSync(filePath)) {
      content = readFileSync(filePath, "utf-8");
      hasArchitecture = true;
    }
  } catch {
    hasArchitecture = false;
  }

  // Parse markdown into sections
  const formatMarkdown = (md: string) => {
    // Store code blocks and tables separately to protect them
    const codeBlocks: string[] = [];
    const tables: string[] = [];

    let html = md;

    // Extract code blocks first (protect from other transformations)
    html = html.replace(/```([\s\S]*?)```/g, (_match, code) => {
      const index = codeBlocks.length;
      codeBlocks.push(`<div class="overflow-x-auto my-8 rounded-xl border border-white/10 bg-white/5"><pre class="p-4 sm:p-6 text-[10px] sm:text-xs md:text-sm text-cyan/80 leading-relaxed whitespace-pre w-max" style="font-family: var(--font-jetbrains-mono), 'Courier New', monospace">${code.trim()}</pre></div>`);
      return `__CODE_BLOCK_${index}__`;
    });

    // Extract tables
    html = html.replace(/\|(.+)\|\n\|[-|\s]+\|\n((?:\|.+\|\n?)+)/g, (_match, header, rows) => {
      const headerCells = header.split('|').filter((c: string) => c.trim()).map((c: string) =>
        `<th class="px-4 py-3 text-left text-white font-semibold border-b border-white/20">${c.trim()}</th>`
      ).join('');

      const bodyRows = rows.trim().split('\n').map((row: string) => {
        const cells = row.split('|').filter((c: string) => c.trim()).map((c: string) =>
          `<td class="px-4 py-3 text-white/60 border-b border-white/5">${c.trim().replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')}</td>`
        ).join('');
        return `<tr class="hover:bg-white/5 transition-colors">${cells}</tr>`;
      }).join('');

      const index = tables.length;
      tables.push(`<div class="overflow-x-auto my-8"><table class="w-full border border-white/10 rounded-xl overflow-hidden"><thead class="bg-white/5"><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>`);
      return `__TABLE_${index}__`;
    });

    // Headers
    html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-white mt-8 mb-4" style="font-family: var(--font-space-grotesk)">$1</h3>');
    html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-white mt-12 mb-6 pb-2 border-b border-white/10" style="font-family: var(--font-space-grotesk)">$1</h2>');
    html = html.replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold gradient-text mb-4" style="font-family: var(--font-space-grotesk)">$1</h1>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');

    // Italic (for disclaimer)
    html = html.replace(/\*(.*?)\*/g, '<em class="text-white/40 italic">$1</em>');

    // Horizontal rules
    html = html.replace(/^---$/gm, '<hr class="my-8 border-white/10" />');

    // List items
    html = html.replace(/^- (.*$)/gm, '<li class="flex items-start gap-3 text-white/60 mb-3"><span class="text-cyan text-lg leading-6">•</span><span class="flex-1">$1</span></li>');

    // Wrap consecutive list items
    html = html.replace(/(<li.*?<\/li>\n?)+/g, '<ul class="my-4">$&</ul>');

    // Paragraphs (lines that aren't already wrapped)
    const lines = html.split('\n');
    html = lines.map(line => {
      const trimmed = line.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('<')) return line;
      if (trimmed.startsWith('__CODE_BLOCK_') || trimmed.startsWith('__TABLE_')) return line;
      return `<p class="text-white/60 leading-relaxed mb-4">${trimmed}</p>`;
    }).join('\n');

    // Restore code blocks and tables
    codeBlocks.forEach((block, i) => {
      html = html.replace(`__CODE_BLOCK_${i}__`, block);
    });
    tables.forEach((table, i) => {
      html = html.replace(`__TABLE_${i}__`, table);
    });

    return html;
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

      {/* Content */}
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {hasArchitecture ? (
            <article className="prose prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }} />
            </article>
          ) : (
            <div className="text-center py-20">
              <h1
                className="text-4xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Architecture <span className="gradient-text">Coming Soon</span>
              </h1>
              <p className="text-white/60 text-lg mb-8">
                The Rewind X Architecture documentation is currently in preparation.
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
