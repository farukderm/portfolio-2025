import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-4xl w-full grid md:grid-cols-5 gap-8 items-center">
        {/* Sol: Prompt + Typewriter */}
        <div className="md:col-span-3 font-mono">
          <div className="flex items-baseline text-green-400">
            <span className="mr-2">❯</span>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
              <Typewriter
                options={{
                  strings: [
                    "farukdermenci",
                    "FrontEnd Developer",
                    "React • Next • TS",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 35,
                  delay: 60,
                }}
              />
            </h1>
            {/* <span className="ml-2 w-2.5 h-6 bg-green-400 animate-pulse" /> */}
          </div>

          <p className="mt-4 text-gray-300 max-w-lg">
            Modern web teknolojileriyle ölçeklenebilir ve erişilebilir
            uygulamalar geliştiriyorum.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#contact"
              className="px-4 py-2 rounded-md bg-green-500 text-black font-semibold
                         hover:bg-green-400 transition transform hover:scale-105"
            >
              Hire Me
            </a>
            <a
              href="https://github.com/farukderm"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-md border border-green-500 text-green-400
                         hover:bg-green-500/10 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Sağ: Foto + Kart (isteğe bağlı) */}
        <div className="md:col-span-2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 opacity-25 blur-md group-hover:opacity-40 transition" />
            <img
              src="foto.jpeg"
              alt="Faruk"
              className="relative w-48 h-48 rounded-2xl object-cover border-2 border-green-400/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
