import React from "react";
import En from "./svgs/en.svg";
import Bg from "./svgs/bg.svg";
import De from "./svgs/de.svg";
import Arab from "./svgs/arab.svg";

export const Languages = {
  en: {
    flagIcon: <En width="100%" height="100%" />,
    hello: "Hello",
    langName: "English",
    goHome: "Navigate to Home",
    startScreen: "StartScreen",
    homeScreen: "Home screen"
  },
  bg: {
    flagIcon: <Bg width="100%" height="100%" />,
    hello: "Здравей",
    langName: "Български",
    goHome: "Навигирай към Началo",
    startScreen: "Стартиращ екран",
    homeScreen: "Начален Екран"
  },
  de: {
    flagIcon: <De width="100%" height="100%" />,
    hello: "Hallo",
    langName: "Deutsch",
    goHome: "Zum Anfang navigieren",
    startScreen: "Startbildschirm",
    homeScreen: "Anfangsbildschirm"
  },
  arab: {
    flagIcon: <Arab width="100%" height="100%" />,
    hello: "مرحبا",
    langName: "عربى",
    goHome: "انتقل إلى المنزل",
    startScreen: "بدء الشاشة",
    homeScreen: "الشاشة الرئيسية"
  }
};
