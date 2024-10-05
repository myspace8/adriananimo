import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://adriananimo.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Adriana Nimo',
    template: '%s | Adriananimo',
  },
  description: 'Frontend developer, optimist, community builder.',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
