import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/footer";
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
      <body className="bg-[#efefef]">
        {children}
        <section className="md:hidden bg-white mt-1">
        <Footer />
        <div className="flex justify-center text-sm text-black/95 p-2">
          <p>© 2024 Adriana Nimo All Rights Reserved</p>
        </div>
      </section>
      </body>
    </html>
  );
}
