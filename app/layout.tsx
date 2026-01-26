import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import IndustryHeader from '@/components/IndustryHeader';
import Footer from '@/components/Footer';
import FloatingValueThemeLegend from '@/components/FloatingValueThemeLegend';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agentic AI Industry Transformation Explorer',
  description: 'Explore how Agentic AI transforms Telecom processes across Work, Workforce, Workbench, and Digital Core',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <IndustryHeader />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Footer />
        <FloatingValueThemeLegend />
      </body>
    </html>
  );
}
