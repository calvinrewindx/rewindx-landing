'use client';

import { Scene, getTerminalBlock } from '@/data/scenario';
import type { ViewMode } from './DemoPlayer';
import SetupScene from './scenes/SetupScene';
import TransferScene from './scenes/TransferScene';
import ScanScene from './scenes/ScanScene';
import AlarmScene from './scenes/AlarmScene';
import AgentScene from './scenes/AgentScene';
import RewindScene from './scenes/RewindScene';
import VerifiedScene from './scenes/VerifiedScene';
import ProofScene from './scenes/ProofScene';

interface MainStageProps {
  currentStep: number;
  viewMode: ViewMode;
  scene: Scene;
  onShowReceipt: () => void;
  onPlay: () => void;
  onNext: () => void;
}

export default function MainStage({
  currentStep,
  viewMode,
  scene,
  onShowReceipt,
  onPlay,
  onNext,
}: MainStageProps) {
  // Step 1 (Intro) always shows SetupScene, regardless of view mode
  if (currentStep === 1) {
    return (
      <div className="demo-glass-card demo-main-stage p-6 md:p-10">
        <div className="relative z-10">
          <SetupScene onPlay={onPlay} onNext={onNext} />
        </div>
      </div>
    );
  }

  // Terminal View (for steps 2-8)
  if (viewMode === 'terminal') {
    const terminalContent = getTerminalBlock(scene);
    return (
      <div className="demo-glass-card demo-main-stage p-6 md:p-8">
        <div className="demo-terminal">
          <pre>{terminalContent}</pre>
        </div>
      </div>
    );
  }

  // Clean UI View - render scene component based on step
  const renderScene = () => {
    switch (currentStep) {
      case 1:
        return <SetupScene onPlay={onPlay} onNext={onNext} />;
      case 2:
        return <TransferScene />;
      case 3:
        return <ScanScene />;
      case 4:
        return <AlarmScene />;
      case 5:
        return <AgentScene />;
      case 6:
        return <RewindScene />;
      case 7:
        return <VerifiedScene />;
      case 8:
        return <ProofScene onShowReceipt={onShowReceipt} />;
      default:
        return <SetupScene onPlay={onPlay} onNext={onNext} />;
    }
  };

  return (
    <div className="demo-glass-card demo-main-stage p-6 md:p-10">
      <div className="relative z-10">
        {renderScene()}
      </div>
    </div>
  );
}
