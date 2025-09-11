import { useEffect, useState } from "react";

export default function LogoFDDev() {
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursor((c) => !c), 300);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="group relative cursor-pointer">
      {/* Dış glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 opacity-40 blur-md group-hover:opacity-70 transition duration-500" />

      {/* "Ekran" kasası */}
      <div
        className="relative flex items-baseline font-mono font-extrabold text-2xl tracking-wider
                      bg-gray-900 dark:bg-black
                      px-4 py-3 rounded-xl
                      border border-green-400/40 dark:border-green-300/30
                      shadow-[0_0_10px_theme(colors.green.400)] group-hover:shadow-[0_0_20px_theme(colors.green.400)]
                      transform group-hover:scale-105 transition-all duration-300"
      >
        {/* Tarama çizgisi (CRT effect) */}
        <div className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute h-px w-full bg-green-400/20 animate-scan" />
        </div>

        {/* Prompt + FDDev */}
        <span className="text-green-400">❯</span>
        <span className="text-gray-100 ml-2">FDDev</span>

        {/* Katod-tüpü imleci */}
        <span
          className={`ml-2 w-2.5 h-6 bg-green-400 ${
            cursor ? "opacity-100" : "opacity-0"
          } transition-opacity duration-75`}
        />
      </div>
    </div>
  );
}
