import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Harshika Saini | Fullstack Software Engineer',
  description: 'Portfolio of Harshika Saini, Fullstack Software Engineer with 2+ years of experience building end-to-end React/TypeScript frontends and Node.js/Express backend services.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-orange-500/30 selection:text-orange-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
