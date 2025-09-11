import { useState } from "react";

const links = [
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

export default function NavTabs() {
  const [active, setActive] = useState("about");

  return (
    <nav className="hidden md:flex items-end relative">
      {/* Sekme satırı */}
      <div className="flex rounded-t-lg overflow-hidden border-b border-green-400/30">
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => {
              setActive(l.id);
              document
                .getElementById(l.id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`px-4 py-2 font-mono text-sm tracking-wide
                        border-r border-green-400/20 last:border-r-0
                        transition-all duration-200
                        ${
                          active === l.id
                            ? "bg-gray-900 text-green-400 shadow-[0_0_12px_theme(colors.green.400)]"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-green-300"
                        }`}
          >
            ❯ {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
// aynı dosyaya ek
export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 rounded-md bg-gray-800 text-green-400 font-mono text-sm border border-green-400/30"
      >
        $ menu
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md bg-gray-900 border border-green-400/30 shadow-lg z-10">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                setOpen(false);
                document
                  .getElementById(l.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="block w-full text-left px-3 py-2 font-mono text-sm text-gray-300 hover:bg-gray-800 hover:text-green-400"
            >
              ❯ {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
