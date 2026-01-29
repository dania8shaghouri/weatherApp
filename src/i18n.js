import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// React’e i18n’i bağlamak
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        city: "Istanbul",
        date: "27 Jan",
        condition: "Cloudy",
        high: "H",
        low: "L",
      },
    },
    ar: {
      translation: {
        city: "اسطنبول",
        date: "27 يناير",
        condition: "غائم",
        high: "الكبرى",
        low: "الصغرى",
      },
    },
  },
  lng: "en",  // başlangıç dili
  fallbackLng: "en", // hata olursa
  interpolation: { escapeValue: false }, //Tekrar escape yapma, React’e bırak (guvenlik)
});

export default i18n;
