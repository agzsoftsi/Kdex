import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainButton from "@/components/MainButton/MainButton";
import RoundButton from "@/components/RoundButton/RoundButton";
import IconSpeech from "../assets/icons/icons8-voice-64.png";
import IconSearch from "../assets/icons/icons8-search-64.png";
import IconFilter from "../assets/icons/icons8-filter-48.png";
import IconFavorite from "../assets/icons/icons8-favorite-64.png";
import IconTranslate from "../assets/icons/icons8-translate-64.png";
import IconTheme from "../assets/icons/icons8-theme-50.png";
import IconMode from "../assets/icons/icons8-night-mode-32.png";
import IconDownload from "../assets/icons/icons8-download-50.png";
import IconRotation from "../assets/icons/icons8-rotation-64.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KDex",
  description: "KDex app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main id="kdex-layout" className="kdex__layout">
          <div id="kdex-layout-left" className="kdex__layout-left">
            <div className="kdex__layout-main-buttons">
              <MainButton text="Search" image={IconSearch} />
              <MainButton text="Filter  " image={IconFilter} />
              <MainButton text="Speech" image={IconSpeech} />
              <MainButton text="Favorites" image={IconFavorite} />
            </div>
          </div>
          <div id="kdex-layout-top" className="kdex__layout-top">
            <div className="kdex__layout-logo"></div>
            <div id="kdex-layout-between-1" className="kdex__layout-between-1">
              <div
                id="kdex-layout-between-2"
                className="kdex__layout-between-2"
              ></div>
            </div>
            <div className="kdex__layout-round-buttons">
              <RoundButton image={IconTranslate} />
              <RoundButton image={IconTheme} />
              <RoundButton image={IconMode} />
              <RoundButton image={IconDownload} />
              <RoundButton image={IconRotation} />
            </div>
          </div>
          <div id="kdex-layout-display" className="kdex__layout-display">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
