'use client';

import { SCENES } from '@/data/scenario';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onGoToStep: (step: number) => void;
}

export default function StepIndicator({
  currentStep,
  totalSteps,
  onGoToStep,
}: StepIndicatorProps) {
  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      {/* Dots and connectors */}
      <div className="flex items-center justify-center">
        {Array.from({ length: totalSteps }, (_, i) => {
          const step = i + 1;
          const isCompleted = step < currentStep;
          const isCurrent = step === currentStep;
          const scene = SCENES[i];

          return (
            <div key={step} className="flex items-center">
              {/* Dot */}
              <button
                onClick={() => onGoToStep(step)}
                className={`demo-step-dot ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
                style={{
                  transform: isCurrent ? 'scale(1.2)' : 'scale(1)',
                }}
                title={scene.name}
                aria-label={`Go to step ${step}: ${scene.name}`}
              />

              {/* Connector */}
              {step < totalSteps && (
                <div
                  className={`demo-step-connector ${isCompleted ? 'completed' : ''}`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Current step label */}
      <div className="text-center">
        <span className="text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Step {currentStep} of {totalSteps}
        </span>
        <span className="mx-2" style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
        <span
          className="text-xs font-medium uppercase tracking-wider"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          {SCENES[currentStep - 1]?.name}
        </span>
      </div>
    </div>
  );
}
