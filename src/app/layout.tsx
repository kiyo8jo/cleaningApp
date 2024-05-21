import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "../../features/header/components/Header/Header";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "Cleaning App",
  description: "The cleaning management application for hotels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
