export default function WeatherCard({
  city,
  date,
  temp,
  condition,
  high,
  low,
}) {
  return (
    <div className="w-full max-w-md  rounded-2xl shadow-md  bg-[var(--app-bg)]">
      {/* Üst satır */}
      <div
        className="flex justify-between items-center 
      px-5 py-7 rounded-t-2xl
      text-white bg-[var(--bg-header)]"
      >
        <span className="font-semibold">{city}</span>
        <span className="text-sm">{date}</span>
      </div>

      {/* Orta satır */}
      <div className="flex justify-between items-center mt-4 p-6">
        <span className="text-gray-500">{condition}</span>
        <span className="text-4xl font-bold">{temp}°</span>
      </div>

      {/* Alt satır */}
      <div className="flex justify-between mt-6 text-sm text-gray-500 p-6">
        <span>H: {high}°</span>
        <span>L: {low}°</span>
      </div>
    </div>
  );
}
