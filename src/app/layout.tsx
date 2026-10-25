import type { Metadata } from 'next';
import { Poppins, Lora } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const lora = Lora({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GalaxFlow | AI Automation, Websites & Mobile Apps Under One Roof',
  description:
    'GalaxFlow engineers high-speed websites, native mobile apps, and 24/7 AI agents that connect directly to your existing software. One team, zero technical surprises.',
  keywords: ['AI automation', 'website development', 'mobile apps', 'AI voice agents', 'Next.js development'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
