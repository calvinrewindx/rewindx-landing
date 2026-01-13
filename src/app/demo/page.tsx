import type { Metadata } from 'next';
import Header from '@/app/components/Header';
import DemoPlayer from '@/app/components/demo/DemoPlayer';

export const metadata: Metadata = {
  title: 'Demo — Rewind X',
  description: 'Interactive demo of Rewind X protected transfers. See how you can rewind crypto transfers before finality.',
  openGraph: {
    title: 'Demo — Rewind X',
    description: 'Interactive demo of Rewind X protected transfers.',
    type: 'website',
  },
};

export default function DemoPage() {
  return (
    <>
      <Header />
      <DemoPlayer />
    </>
  );
}
