import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function SubpageHeader({ title }: { title?: string }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-white/5 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Back */}
          <Link
            href="/"
            className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
          >
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 text-cyan/60 group-hover:text-cyan group-hover:-translate-x-0.5 transition-all duration-200" />
              <Image
                src="/logov2.png"
                alt="Rewind X"
                width={120}
                height={60}
                className="h-9 w-auto"
                unoptimized
              />
            </div>
          </Link>

          {/* Page title */}
          {title && (
            <span className="text-white/30 text-xs font-mono tracking-wider hidden sm:block">
              {title}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
