import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KITZONE1 - Vault 2026',
  description: 'Catalogo maglie da calcio introvabili e custom',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-slate-950 text-slate-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}