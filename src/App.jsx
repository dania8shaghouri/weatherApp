import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import "./App.css";
import "./index.css";
import WeatherCard from "./components/WeatherCard";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div
      className="bg-[var(--body-bg)] 
    min-h-screen flex flex-col items-center justify-center gap-4"
    >
      {/* Dil butonları */}
      <div className="flex gap-2">
        <button
          onClick={() => i18n.changeLanguage("en")}
          className="px-3 py-1 border rounded"
        >
          EN
        </button>
        <button
          onClick={() => i18n.changeLanguage("ar")}
          className="px-3 py-1 border rounded"
        >
          AR
        </button>
      </div>

      {/* Başlık */}
      <h1 className="text-3xl font-bold text-black">
        {t("title")}
      </h1>

      {/* Senin kartın (aynı kalıyor) */}
      <WeatherCard
        city={t("city")}
        date={t("date")}
        condition={t("condition")}
        temp={18}
        high={22}
        low={14}
      />
    </div>
  );
}

export default App;
