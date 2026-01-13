'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';
import SendScene from './scenes/SendScene';
import OopsScene from './scenes/OopsScene';
import RewindScene from './scenes/RewindScene';
import DelegateScene from './scenes/DelegateScene';

const STEPS = [
  { id: 1, name: 'SEND', label: 'Transfer', duration: 5000 },
  { id: 2, name: 'DETECT', label: 'Detect', duration: 5000 },
  { id: 3, name: 'REWIND', label: 'Rewind', duration: 5000 },
  { id: 4, name: 'MODES', label: 'Modes', duration: 6000 },
];

const TOTAL_STEPS = STEPS.length;

export default function DemoPlayer() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [stepProgress, setStepProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentStepData = STEPS[currentStep - 1] || STEPS[0];

  // Autoplay: progress within step
  useEffect(() => {
    if (!isPlaying) return;

    const stepDuration = currentStepData.duration;
    const updateInterval = 50;
    const progressIncrement = (updateInterval / stepDuration) * 100;

    const timer = setInterval(() => {
      setStepProgress((prev) => {
        const next = prev + progressIncrement;
        if (next >= 100) {
          return 100;
        }
        return next;
      });
    }, updateInterval);

    return () => clearInterval(timer);
  }, [isPlaying, currentStep, currentStepData.duration]);

  // Move to next step when progress reaches 100
  useEffect(() => {
    if (stepProgress >= 100 && isPlaying) {
      setStepProgress(0);
      setCurrentStep((prev) => (prev < TOTAL_STEPS ? prev + 1 : 1));
    }
  }, [stepProgress, isPlaying]);

  const handleNext = useCallback(() => {
    setStepProgress(0);
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setCurrentStep(1);
    }
  }, [currentStep]);

  const handleBack = useCallback(() => {
    setStepProgress(0);
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      setCurrentStep(TOTAL_STEPS);
    }
  }, [currentStep]);

  const handleReset = useCallback(() => {
    setCurrentStep(1);
    setStepProgress(0);
    setIsPlaying(true);
  }, []);

  const handleTogglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const handleGoToStep = useCallback((step: number) => {
    setCurrentStep(step);
    setStepProgress(0);
    setIsPlaying(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleBack();
      } else if (e.key === 'r' || e.key === 'R') {
        handleReset();
      } else if (e.key === 'p' || e.key === 'P') {
        handleTogglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handleBack, handleReset, handleTogglePlay]);

  // Swipe gesture support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) {
      return;
    }

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handleBack();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  }, [handleNext, handleBack]);

  // Total progress: completed steps + current step progress
  const totalProgress = ((currentStep - 1) / TOTAL_STEPS + (stepProgress / 100) / TOTAL_STEPS) * 100;

  // Render current scene
  const renderScene = () => {
    switch (currentStep) {
      case 1:
        return <SendScene />;
      case 2:
        return <OopsScene />;
      case 3:
        return <RewindScene />;
      case 4:
        return <DelegateScene />;
      default:
        return <SendScene />;
    }
  };

  return (
    <div className="demo-page min-h-screen bg-[#050505]">
      {/* Progress Bar - smooth animation */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-black/50">
        <div
          className="h-full bg-gradient-to-r from-cyan to-violet transition-[width] duration-100 ease-linear"
          style={{ width: `${totalProgress}%` }}
        />
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan/5 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-2xl md:text-3xl font-bold text-white mb-2"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            <span className="gradient-text">Rewind X</span> Demo
          </h1>
          <p className="text-white/50 text-sm">
            See how protected transfers work
          </p>
        </div>

        {/* Step Counter */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm">
            Step {currentStep} of {TOTAL_STEPS}
            <span className="text-white/30">·</span>
            <span className="text-white/80 font-medium">{currentStepData.label}</span>
          </span>
        </div>

        {/* Main Stage */}
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative"
        >
          {renderScene()}
        </div>

        {/* Step Indicator Dots with Progress */}
        <div className="flex items-center justify-center gap-3 mt-8 mb-6">
          {STEPS.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <button
                key={step.id}
                onClick={() => handleGoToStep(step.id)}
                className="relative group"
                aria-label={`Go to step ${step.id}: ${step.label}`}
              >
                {/* Dot background */}
                <div
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-10 bg-white/10'
                      : isCompleted
                      ? 'w-2.5 bg-cyan'
                      : 'w-2.5 bg-white/20 group-hover:bg-white/30'
                  }`}
                />
                {/* Active dot fill */}
                {isActive && (
                  <div
                    className="absolute top-0 left-0 h-2.5 rounded-full bg-gradient-to-r from-cyan to-violet transition-[width] duration-100 ease-linear"
                    style={{ width: `${stepProgress}%` }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleBack}
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Previous step"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleTogglePlay}
            className={`p-4 rounded-xl border transition-colors ${
              isPlaying
                ? 'bg-gradient-to-r from-cyan/20 to-violet/20 border-cyan/30 text-white'
                : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
            }`}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={handleNext}
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Next step"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={handleReset}
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:bg-white/10 hover:text-white/60 transition-colors"
            aria-label="Reset demo"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Status */}
        <div className="text-center mt-4">
          <span className="text-white/40 text-xs">
            {isPlaying ? 'Auto-playing...' : 'Paused'}
          </span>
        </div>

        {/* Keyboard Hints */}
        <div className="hidden md:flex items-center justify-center gap-4 mt-6 text-white/30 text-xs">
          <span>← → Navigate</span>
          <span>·</span>
          <span>P Play/Pause</span>
          <span>·</span>
          <span>R Reset</span>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-10 pt-6 text-center border-t border-white/5">
          <span className="inline-block px-3 py-1 mb-3 rounded-lg text-xs font-medium uppercase tracking-wider bg-cyan/10 border border-cyan/20 text-cyan">
            Simulation
          </span>
          <p className="text-xs text-white/30 leading-relaxed">
            For demonstration purposes only. No real transactions occur.
            <br />
            Not financial advice. Product features may vary.
          </p>
        </div>
      </div>
    </div>
  );
}
