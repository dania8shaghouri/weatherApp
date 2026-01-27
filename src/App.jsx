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
    <>
      <div
        className="bg-[var(--body-bg)] 
    min-h-screen flex flex-col items-center justify-center gap-4 "
      >
        {/* dil buttonu */}
        <button
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
          }
          className="px-4 py-1 border rounded"
        >
          {i18n.language === "en" ? "AR" : "EN"}
        </button>

        {/* weahter card */}
        <WeatherCard
          city={t("city")}
          date={t("date")}
          condition={t("condition")}
          temp={18}
          high={22}
          low={14}
        />
      </div>
    </>
  );
}

export default App;
