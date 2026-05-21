import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "LUCID（ルシッド）｜「なんとなく」を、終わらせる。",
  description:
    "Lovegraph専属フォトグラファーのための、基礎を磨き直すサロン。Back to the Basics. 自分の写真を、自分の言葉で語れるようになる場所。",
  openGraph: {
    title: "LUCID（ルシッド）",
    description: "「なんとなく」を、終わらせる。本気で、磨いていく。",
    url: SITE.url,
    siteName: "LUCID",
    images: ["/og-image.png"],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUCID（ルシッド）",
    description: "「なんとなく」を、終わらせる。",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${playfair.variable} ${notoSansJp.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
