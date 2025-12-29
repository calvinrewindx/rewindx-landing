import type { Metadata } from 'next';
import DemoPlayer from '@/app/components/demo/DemoPlayer';

export const metadata: Metadata = {
  title: 'Demo — Rewind X',
  description: 'Interactive demo of Rewind X autonomous protection for AI agents. See how policy-gated autonomy protects against address poisoning attacks.',
  openGraph: {
    title: 'Demo — Rewind X',
    description: 'Interactive demo of Rewind X autonomous protection for AI agents.',
    type: 'website',
  },
};

export default function DemoPage() {
  return <DemoPlayer />;
}
