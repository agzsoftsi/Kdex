"use client";

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
import IconAbout from "../assets/icons/icons8-about-64.png";
import IconReset from "../assets/icons/icons8-restart-64.png";
import logo from "../assets/icons/logo.png";
import stereoBox from "../assets/icons/stereobox.png";
import Image from "next/image";
import Display from "@/components/Display/Display";

export default function Home() {
  return (
    <main id="kdex-layout" className="kdex__layout">
      <div className="kdex__layout-controls">
        <RoundButton
          image={IconAbout}
          onClick={() => console.log("actions")}
          cssModified="button__round--info"
        />
        <RoundButton
          image={IconReset}
          onClick={() => console.log("actions")}
          cssModified="button__round--reset"
        />
      </div>
      <div id="kdex-layout-left" className="kdex__layout-left">
        <div className="kdex__layout-main-buttons">
          <MainButton
            text="Search"
            image={IconSearch}
            onClick={() => console.log("actions")}
            disabled
          />
          <MainButton text="Filter  " image={IconFilter} />
          <MainButton text="Speech" image={IconSpeech} />
          <MainButton text="Favorites" image={IconFavorite} />
        </div>
      </div>
      <div id="kdex-layout-top" className="kdex__layout-top">
        <div className="kdex__layout-logo">
          <Image src={logo} alt="Logo"></Image>
        </div>

        <div id="kdex-layout-between-1" className="kdex__layout-between-1">
          <div
            id="kdex-layout-between-2"
            className="kdex__layout-between-2"
          ></div>
        </div>
        <div className="kdex__layout-round-buttons">
          <RoundButton
            image={IconTranslate}
            onClick={() => console.log("actions")}
          />
          <RoundButton image={IconTheme} />
          <RoundButton image={IconMode} />
          <RoundButton image={IconDownload} />
          <RoundButton
            image={IconRotation}
            onClick={() => console.log("actions")}
            disabled
          />
        </div>
        <div className="kdex__layout-stereo">
          <Image
            src={stereoBox}
            alt="stereobox"
            className="kdex__layout-stereo-box"
          ></Image>
          <Image
            src={stereoBox}
            alt="stereobox"
            className="kdex__layout-stereo-box"
          ></Image>
        </div>
      </div>
      <div id="kdex-layout-display" className="kdex__layout-display">
        <Display />
      </div>
    </main>
  );
}
