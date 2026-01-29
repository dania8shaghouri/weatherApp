import { CiCloudOn } from "react-icons/ci";
import { useTranslation } from "react-i18next";

export default function WeatherCard({
  city,
  date,
  temp,
  condition,
  high,
  low,
  icon,
}) {
  // react-i18next kütüphanesinden bir hook
  // React component’ini global çeviri motoruna bağlar ve
  // sana aktif dile göre metin getiren t() fonksiyonunu verir
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-md rounded-2xl shadow-md bg-[var(--app-bg)]">
      {/* Üst satır */}
      <div className="flex justify-between items-center px-5 py-7 rounded-t-2xl text-white bg-[var(--bg-header)]">
        <span className="font-semibold">{city}</span>
        <span className="text-sm">{date}</span>
      </div>

      {/* Orta satır */}
      <div className="flex justify-between items-center px-6 py-6">
        <div className="flex flex-col">
          <div className="flex items-center mt-2">
            <span className="text-4xl font-bold">{temp}°</span>
            {icon && <img src={icon} className="w-20 h-20" />}
          </div>
          <span className="text-gray-600 mt-2">{condition}</span>
        </div>

        {/* Icon */}
        <CiCloudOn size={150} className="text-white" />
      </div>

      {/* Alt satır */}
      <div className="flex justify-start gap-8 px-6 pb-3 mb-5 text-sm text-gray-600">
        <span>
          {t("high")}: {high}°
        </span>
        <span>
          {t("low")}: {low}°
        </span>
      </div>
    </div>
  );
}
