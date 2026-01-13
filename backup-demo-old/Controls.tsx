'use client';

import { RotateCcw, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface ControlsProps {
  currentStep: number;
  totalSteps: number;
  isPlaying: boolean;
  onNext: () => void;
  onBack: () => void;
  onReset: () => void;
  onTogglePlay: () => void;
}

export default function Controls({
  currentStep,
  totalSteps,
  isPlaying,
  onNext,
  onBack,
  onReset,
  onTogglePlay,
}: ControlsProps) {
  const isAtStart = currentStep === 1;
  const isAtEnd = currentStep === totalSteps;

  return (
    <div className="relative flex items-center justify-center gap-3 mb-12">
      {/* Reset */}
      <button
        onClick={onReset}
        disabled={isAtStart && !isPlaying}
        className="demo-btn-control"
        title="Reset to beginning"
      >
        <RotateCcw size={16} />
        <span className="hidden sm:inline">Reset</span>
      </button>

      {/* Back */}
      <button
        onClick={onBack}
        disabled={isAtStart}
        className="demo-btn-control"
        title="Previous step"
      >
        <ChevronLeft size={18} />
        <span className="hidden sm:inline">Back</span>
      </button>

      {/* Play/Pause */}
      <button
        onClick={onTogglePlay}
        className="demo-btn-control"
        style={{
          background: 'rgba(255,255,255,0.1)',
          borderColor: 'rgba(255,255,255,0.15)',
          color: '#fff',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
        title={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <>
            <Pause size={18} />
            <span>Pause</span>
          </>
        ) : (
          <>
            <Play size={18} />
            <span>{isAtEnd ? 'Replay' : 'Auto'}</span>
          </>
        )}
      </button>

      {/* Next - with pulse animation when not playing */}
      <button
        onClick={onNext}
        disabled={isAtEnd}
        className={`demo-btn-control ${!isPlaying && !isAtEnd ? 'demo-next-pulse' : ''}`}
        title="Next step (→)"
        style={!isPlaying && !isAtEnd ? {
          background: 'rgba(68, 136, 255, 0.15)',
          borderColor: 'rgba(68, 136, 255, 0.4)',
          color: '#fff',
        } : undefined}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={18} />
      </button>

      {/* Navigation hints - only show when not playing */}
      {!isPlaying && !isAtEnd && (
        <>
          {/* Desktop: Keyboard hint */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap hidden sm:block" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Press <kbd className="px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>→</kbd> or click Next
          </div>
          {/* Mobile: Swipe hint */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap flex items-center gap-2 sm:hidden" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <span>←</span>
            <span>Swipe to navigate</span>
            <span>→</span>
          </div>
        </>
      )}
    </div>
  );
}
