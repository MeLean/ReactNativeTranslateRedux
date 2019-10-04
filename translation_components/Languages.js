import React from "react";
import En from "./svgFlags/en.svg";
import Bg from "./svgFlags/bg.svg";
import Ru from "./svgFlags/ru.svg";
import De from "./svgFlags/de.svg";
import Sp from "./svgFlags/sp.svg";
import Arab from "./svgFlags/arab.svg";
import Fr from "./svgFlags/fr.svg";
import Ch from "./svgFlags/ch.svg";

export const Languages = {
  en: {
    flagIcon: <En width="100%" height="100%" />,
    hello: "Hello",
    langName: "English",
    goHome: "Navigate to Home",
    startScreen: "Star tScreen",
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
  ru: {
    flagIcon: <Ru width="100%" height="100%" />,
    hello: "Привет",
    langName: "Русский",
    goHome: "Перейдите к началу",
    startScreen: "Стартовый экран",
    homeScreen: "Начален экран"
  },
 
  de: {
    flagIcon: <De width="100%" height="100%" />,
    hello: "Hallo",
    langName: "Deutsch",
    goHome: "Zum Anfang navigieren",
    startScreen: "Startbildschirm",
    homeScreen: "Anfangsbildschirm"
  },
  sp: {
    flagIcon: <Sp width="100%" height="100%" />,
    hello: "Hola",
    langName: "Española",
    goHome: "Navega a Inicio",
    startScreen: "Pantalla de inicio",
    homeScreen: "Inicio"
  },
  arab: {
    flagIcon: <Arab width="100%" height="100%" />,
    hello: "مرحبا",
    langName: "عربى",
    goHome: "انتقل إلى المنزل",
    startScreen: "بدء الشاشة",
    homeScreen: "الشاشة الرئيسية"
  },
  fr: {
    flagIcon: <Fr width="100%" height="100%" />,
    hello: "Salut",
    langName: "Française",
    goHome: "Naviguer vers la maison",
    startScreen: "Écran de démarrage",
    homeScreen: "Écran d'accueil"
  },
  ch: {
    flagIcon: <Ch width="100%" height="100%" />,
    hello: "你好",
    langName: "中文",
    goHome: "導航到首頁",
    startScreen: "開始畫面",
    homeScreen: "主屏幕"
  }
};
