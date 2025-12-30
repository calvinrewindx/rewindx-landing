'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { SCENES, getScene } from '@/data/scenario';
import StepIndicator from './StepIndicator';
import MainStage from './MainStage';
import Controls from './Controls';
import UnderTheHood from './UnderTheHood';
import ReceiptModal from './ReceiptModal';

export type ViewMode = 'clean' | 'terminal';

export default function DemoPlayer() {
  const [currentStep, setCurrentStep] = useState(1);
  const [viewMode, setViewMode] = useState<ViewMode>('clean');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [hoodExpanded, setHoodExpanded] = useState(false);

  const totalSteps = SCENES.length;
  const currentScene = getScene(currentStep);

  // Autoplay logic with scene durations
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentStep < totalSteps) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setIsPlaying(false);
      }
    }, currentScene.duration * 1000);

    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, currentScene.duration, totalSteps]);

  const handleNext = useCallback(() => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, totalSteps]);

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const handleReset = useCallback(() => {
    setCurrentStep(1);
    setIsPlaying(false);
    setShowReceipt(false);
    setHoodExpanded(false);
  }, []);

  const handleTogglePlay = useCallback(() => {
    if (currentStep === totalSteps && !isPlaying) {
      // Restart from step 2 (skip intro)
      setCurrentStep(2);
      setIsPlaying(true);
    } else if (currentStep === 1) {
      // From intro, go directly to step 2 and start playing
      setCurrentStep(2);
      setIsPlaying(true);
    } else {
      setIsPlaying((prev) => !prev);
    }
  }, [currentStep, totalSteps, isPlaying]);

  const handleGoToStep = useCallback((step: number) => {
    setCurrentStep(step);
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
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handleBack, handleReset]);

  // Calculate progress percentage
  const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;

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
    if (!touchStartX.current || !touchEndX.current) return;

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

  // Transition state for smooth animations
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevStep = useRef(currentStep);

  useEffect(() => {
    if (prevStep.current !== currentStep) {
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 300);
      prevStep.current = currentStep;
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  // Get step background color from CSS variables
  const getStepBg = () => {
    switch (currentStep) {
      case 1:
      case 2:
      case 3:
        return '#0a0f1a';
      case 4:
        return '#1a0a0a';
      case 5:
      case 6:
        return '#0a0a1a';
      case 7:
      case 8:
        return '#0a1a0a';
      default:
        return '#0a0f1a';
    }
  };

  return (
    <div
      className="demo-page min-h-screen transition-colors duration-700"
      data-step={currentStep}
      style={{ backgroundColor: getStepBg() }}
    >

      {/* Progress Bar - fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-black/30">
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${progressPercent}%`,
            background: currentStep >= 7 ? 'linear-gradient(90deg, #22cc66, #4ade80)' :
                       currentStep >= 4 ? 'linear-gradient(90deg, #ff4444, #ff6b6b)' :
                       'linear-gradient(90deg, #4488ff, #60a5fa)'
          }}
        />
      </div>

      {/* Gradient Blobs */}
      <div className="demo-gradient-blob demo-gradient-blob-1" />
      <div className="demo-gradient-blob demo-gradient-blob-2" />
      <div className="demo-gradient-blob demo-gradient-blob-3" />

      {/* Background Grid */}
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-24 pb-8 md:pt-28 md:pb-12 demo-main-content">
        {/* Step Counter */}
        {currentStep > 1 && (
          <div className="text-center mb-8">
            <span
              className="text-sm px-3 py-1 rounded-full"
              style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.6)' }}
            >
              Step {currentStep}/{totalSteps}
            </span>
          </div>
        )}

        {/* View Toggle - hidden on intro */}
        {currentStep > 1 && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-xl p-1" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <button
                onClick={() => setViewMode('clean')}
                className="px-5 py-2 text-sm rounded-lg transition-all"
                style={{
                  background: viewMode === 'clean' ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: viewMode === 'clean' ? '#fff' : 'rgba(255,255,255,0.5)',
                }}
              >
                Visual
              </button>
              <button
                onClick={() => setViewMode('terminal')}
                className="px-5 py-2 text-sm rounded-lg transition-all"
                style={{
                  background: viewMode === 'terminal' ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: viewMode === 'terminal' ? '#fff' : 'rgba(255,255,255,0.5)',
                }}
              >
                Terminal View
              </button>
            </div>
          </div>
        )}

        {/* Main Stage - with swipe support */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`demo-stage-transition ${isTransitioning ? 'transitioning' : ''}`}
        >
          <MainStage
            currentStep={currentStep}
            viewMode={viewMode}
            scene={currentScene}
            onShowReceipt={() => setShowReceipt(true)}
            onPlay={handleTogglePlay}
            onNext={handleNext}
          />
        </div>

        {/* Narration - hidden on intro (step 1 has its own explanation) */}
        {currentStep > 1 ? (
          <div className="text-center mt-8 mb-10">
            <p
              className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide"
              style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 400 }}
            >
              {currentScene.narration}
            </p>
          </div>
        ) : (
          <div className="mt-10" />
        )}

        {/* Step Indicator */}
        <StepIndicator
          currentStep={currentStep}
          totalSteps={totalSteps}
          onGoToStep={handleGoToStep}
        />

        {/* Controls */}
        <Controls
          currentStep={currentStep}
          totalSteps={totalSteps}
          isPlaying={isPlaying}
          onNext={handleNext}
          onBack={handleBack}
          onReset={handleReset}
          onTogglePlay={handleTogglePlay}
        />

        {/* Under the Hood - only show from step 4 onwards */}
        {currentStep >= 4 && (
          <UnderTheHood
            expanded={hoodExpanded}
            onToggle={() => setHoodExpanded(!hoodExpanded)}
            currentStep={currentStep}
          />
        )}

        {/* Legal Disclaimer */}
        <div className="mt-12 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span
            className="inline-block px-3 py-1 mb-3 rounded-lg text-xs font-medium uppercase tracking-wider"
            style={{
              background: 'rgba(0, 212, 255, 0.15)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              color: '#00d4ff',
            }}
          >
            Simulation
          </span>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
            For demonstration purposes only. No real transactions occur.
            <br />
            Not financial advice. Product features may vary.
          </p>
        </div>
      </div>

      {/* Receipt Modal */}
      <ReceiptModal isOpen={showReceipt} onClose={() => setShowReceipt(false)} />
    </div>
  );
}
