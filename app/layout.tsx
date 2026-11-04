import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Primeiro Real — educação financeira para iniciantes",
    template: "%s | Primeiro Real",
  },
  description:
    "Artigos didáticos para quem quer começar a investir com pouco dinheiro, com linguagem simples e conteúdo revisado.",
  openGraph: {
    siteName: "Primeiro Real",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Merriweather:wght@700;900&display=swap"
        />
      </head>
      <body>
        <header className="topo">
          <div className="container">
            <Link href="/" className="logo">
              Primeiro <span>Real</span>
            </Link>
            <nav className="nav">
              <Link href="/">Artigos</Link>
              <Link href="/sobre">Sobre</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="rodape">
          <div className="container">
            <p>
              <strong>Primeiro Real</strong> · Conteúdo educacional. Nada aqui é recomendação de
              investimento, e rentabilidade passada não garante resultado futuro.
            </p>
            <p>
              <Link href="/sobre">Sobre</Link> · <Link href="/privacidade">Política de privacidade</Link>
            </p>
          </div>
        </footer>
        {adsenseId ? (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
