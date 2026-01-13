'use client';

import { Bot, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const codeLines = [
  { text: '// Policy Engine Evaluation', type: 'comment' },
  { text: '', type: 'empty' },
  { text: 'if (riskScore >= 95) {', type: 'code', highlights: [{ text: 'riskScore', class: 'demo-code-function' }, { text: '95', class: 'demo-code-number' }] },
  { text: '  if (threatType === "CRITICAL") {', type: 'code', highlights: [{ text: 'threatType', class: 'demo-code-function' }, { text: '"CRITICAL"', class: 'demo-code-string' }] },
  { text: '    if (status === "PENDING") {', type: 'code', highlights: [{ text: 'status', class: 'demo-code-function' }, { text: '"PENDING"', class: 'demo-code-string' }] },
  { text: '      → initiateAutonomousRewind()', type: 'action' },
  { text: '    }', type: 'code' },
  { text: '  }', type: 'code' },
  { text: '}', type: 'code' },
];

export default function AgentScene() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const renderCodeLine = (line: typeof codeLines[0], index: number) => {
    if (line.type === 'comment') {
      return <span className="demo-code-comment">{line.text}</span>;
    }
    if (line.type === 'empty') {
      return <br />;
    }
    if (line.type === 'action') {
      return (
        <span className="demo-code-success flex items-center gap-2">
          {line.text}
          {visibleLines > index && <CheckCircle size={14} className="inline" />}
        </span>
      );
    }
    // Regular code with syntax highlighting
    return <span style={{ color: '#c9d1d9' }}>{line.text}</span>;
  };

  return (
    <div className="text-center">
      {/* Header */}
      <div className="inline-flex items-center gap-3 mb-8">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(136, 68, 255, 0.15)', border: '1px solid rgba(136, 68, 255, 0.3)' }}
        >
          <Bot size={24} style={{ color: '#8844ff' }} />
        </div>
        <h2
          className="text-xl md:text-2xl font-semibold"
          style={{ fontFamily: 'var(--font-space-grotesk)', letterSpacing: '-0.02em', color: '#8844ff' }}
        >
          Autonomous Decision
        </h2>
      </div>

      {/* Card */}
      <div className="demo-inner-card max-w-lg mx-auto" style={{ borderColor: 'rgba(136, 68, 255, 0.2)' }}>
        {/* Code Block with Typewriter */}
        <div
          className="p-5 rounded-xl mb-6 text-left overflow-x-auto"
          style={{ background: '#0d1117', border: '1px solid #30363d', fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          {codeLines.map((line, i) => (
            <div
              key={i}
              className={`text-sm leading-relaxed ${i < visibleLines ? 'demo-typewriter-line' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {renderCodeLine(line, i)}
            </div>
          ))}
        </div>

        {/* Explanation */}
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
          The AI agent evaluates the threat and decides to rewind — all within user-defined policy bounds.
        </p>
      </div>
    </div>
  );
}
