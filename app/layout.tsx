import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Parisienne } from "next/font/google";
import { content } from "@/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${content.meta.favicon}</text></svg>`;

export const metadata: Metadata = {
  title: content.meta.pageTitle,
  description: content.meta.description,
  // keeps the page out of Google — it is meant for one person
  robots: { index: false, follow: false },
  icons: {
    icon: `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // the font variables go on <html> so :root can build the tokens from them
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${parisienne.variable}`}
    >
      <head>
        {/* A refresh normally drops you back where you were scrolled to, which
            would put her halfway down the page behind the envelope. This runs
            before the browser restores anything, so the letter always starts
            from the top. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if('scrollRestoration' in history)history.scrollRestoration='manual';window.scrollTo(0,0);}catch(e){}",
          }}
        />

        {/* if JavaScript is off, skip the envelope and let the page scroll */}
        <noscript>
          <style>{`.intro{display:none!important}body.locked{overflow:auto!important;height:auto!important}.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="locked antialiased">{children}</body>
    </html>
  );
}
