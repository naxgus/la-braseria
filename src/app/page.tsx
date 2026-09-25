import { ReservationForm } from "./reservation-form";

const featureList = [
  {
    number: "01",
    title: "Fuego real",
    description: "Brasa de encina que aporta un carácter único a cada pieza.",
  },
  {
    number: "02",
    title: "Producto de temporada",
    description: "Seleccionamos cada ingrediente en su mejor momento.",
  },
  {
    number: "03",
    title: "Tradición familiar",
    description: "Recetas heredadas, cocinadas con el mismo mimo de siempre.",
  },
];

const menu = [
  {
    category: "Para empezar",
    items: [
      {
        name: "Croquetas de jamón ibérico",
        description: "Bechamel cremosa, jamón de bellota",
        price: "12€",
      },
      {
        name: "Pimientos de Padrón",
        description: "Flor de sal, aceite de oliva virgen",
        price: "8€",
      },
      {
        name: "Tabla de ibéricos",
        description: "Selección de embutidos artesanos",
        price: "18€",
      },
    ],
  },
  {
    category: "Carnes a la brasa",
    items: [
      {
        name: "Chuletón de vaca madurada",
        description: "800g, brasa de encina",
        price: "45€",
      },
      {
        name: "Entraña a la brasa",
        description: "Con chimichurri de la casa",
        price: "22€",
      },
      {
        name: "Costillar de cerdo ibérico",
        description: "Lenta cocción, glaseado propio",
        price: "24€",
      },
    ],
  },
  {
    category: "Pescados y mariscos",
    items: [
      {
        name: "Rodaballo a la brasa",
        description: "Pieza entera, con su punto justo",
        price: "38€",
      },
      {
        name: "Pulpo a la brasa",
        description: "Puré de patata, pimentón de la Vera",
        price: "26€",
      },
    ],
  },
  {
    category: "Postres",
    items: [
      {
        name: "Torrija caramelizada",
        description: "Helado de vainilla artesano",
        price: "9€",
      },
      {
        name: "Tarta de queso a la brasa",
        description: "Receta de la casa",
        price: "8€",
      },
    ],
  },
];

const gallery = [
  { label: "La brasa", className: "sm:col-span-2 sm:row-span-2", tone: "from-amber-800/60" },
  { label: "Chuletón", className: "", tone: "from-orange-800/60" },
  { label: "Nuestro comedor", className: "", tone: "from-yellow-800/50" },
  { label: "Pulpo a la brasa", className: "", tone: "from-amber-700/50" },
  { label: "Bodega", className: "", tone: "from-orange-900/60" },
  { label: "Postres", className: "sm:col-span-2", tone: "from-yellow-700/50" },
];

export default function Home() {
  return (
    <>
      <main id="inicio" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(207,161,93,0.12) 0%, rgba(0,0,0,0.9) 55%, #000000 100%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-gold/80 sm:text-sm">
            Cocina a la brasa
          </span>

          <h1 className="font-serif text-6xl font-bold leading-none tracking-tight text-gold drop-shadow-[0_2px_20px_rgba(207,161,93,0.35)] sm:text-8xl md:text-9xl">
            La Brasería
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Fuego real, ingredientes de temporada y el sabor auténtico de la
            brasa en cada plato.
          </p>

          <a
            href="#contacto"
            className="mt-12 inline-flex items-center justify-center rounded-full border border-gold px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-black sm:text-sm"
          >
            Reservar mesa
          </a>
        </div>

        <a
          href="#sobre-nosotros"
          className="absolute bottom-10 flex flex-col items-center gap-2 text-gold/50 transition-colors hover:text-gold"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Descubre más
          </span>
          <svg
            className="h-4 w-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </main>

      <section
        id="sobre-nosotros"
        className="relative bg-black px-6 py-28 text-white sm:py-36"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold/80">
            Nuestra historia
          </span>

          <h2 className="mt-5 font-serif text-4xl font-bold text-gold sm:text-5xl">
            Sobre nosotros
          </h2>

          <div className="mt-6 flex items-center gap-3 text-gold/40">
            <span className="h-px w-10 bg-gold/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
            <span className="h-px w-10 bg-gold/40" />
          </div>

          <p className="mt-8 text-base leading-relaxed text-zinc-300 sm:text-lg">
            Desde hace más de veinte años, La Brasería es el hogar del fuego
            lento y el producto de verdad. Cada plato nace de la brasa de
            encina, de recetas heredadas y de un respeto profundo por el
            ingrediente. Un lugar donde el tiempo se toma con calma y el sabor
            habla por sí solo.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl gap-12 sm:grid-cols-3 sm:divide-x sm:divide-gold/10">
          {featureList.map((feature) => (
            <div
              key={feature.number}
              className="flex flex-col items-center px-6 text-center sm:items-start sm:text-left"
            >
              <span className="font-serif text-3xl text-gold/50">
                {feature.number}
              </span>
              <h3 className="mt-3 font-serif text-xl text-gold">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="menu"
        className="relative border-t border-gold/10 bg-black px-6 py-28 text-white sm:py-36"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold/80">
            Nuestra propuesta
          </span>

          <h2 className="mt-5 font-serif text-4xl font-bold text-gold sm:text-5xl">
            Menú
          </h2>

          <div className="mt-6 flex items-center gap-3 text-gold/40">
            <span className="h-px w-10 bg-gold/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
            <span className="h-px w-10 bg-gold/40" />
          </div>

          <p className="mt-8 text-sm italic leading-relaxed text-zinc-400 sm:text-base">
            Una selección cercana al producto de temporada. Consulta con
            nuestro equipo por sugerencias y maridajes.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl gap-x-16 gap-y-16 sm:grid-cols-2">
          {menu.map((section) => (
            <div key={section.category}>
              <h3 className="border-b border-gold/20 pb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                {section.category}
              </h3>

              <ul className="mt-6 flex flex-col gap-5">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline gap-3">
                      <span className="text-base text-white">
                        {item.name}
                      </span>
                      <span className="h-px flex-1 border-b border-dotted border-zinc-700" />
                      <span className="font-serif text-base text-gold">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-500">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="galeria"
        className="relative border-t border-gold/10 bg-black px-6 py-28 text-white sm:py-36"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold/80">
            Momentos
          </span>

          <h2 className="mt-5 font-serif text-4xl font-bold text-gold sm:text-5xl">
            Galería
          </h2>

          <div className="mt-6 flex items-center gap-3 text-gold/40">
            <span className="h-px w-10 bg-gold/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
            <span className="h-px w-10 bg-gold/40" />
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl auto-rows-[200px] grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[220px]">
          {gallery.map((photo) => (
            <figure
              key={photo.label}
              className={`group relative overflow-hidden border border-gold/10 bg-gradient-to-br ${photo.tone} to-black ${photo.className}`}
            >
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 font-serif text-lg text-gold opacity-80 transition-opacity group-hover:opacity-100">
                {photo.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="contacto"
        className="relative border-t border-gold/10 bg-black px-6 py-28 text-white sm:py-36"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold/80">
            Reservas
          </span>

          <h2 className="mt-5 font-serif text-4xl font-bold text-gold sm:text-5xl">
            Contacto
          </h2>

          <div className="mt-6 flex items-center gap-3 text-gold/40">
            <span className="h-px w-10 bg-gold/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
            <span className="h-px w-10 bg-gold/40" />
          </div>

          <p className="mt-8 text-sm italic leading-relaxed text-zinc-400 sm:text-base">
            Reserva tu mesa y déjanos el resto al fuego.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/80">
                Dirección
              </h3>
              <p className="mt-2 text-zinc-300">Calle del Fuego, 12<br />28001 Madrid</p>
            </div>
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/80">
                Teléfono
              </h3>
              <p className="mt-2 text-zinc-300">+34 600 000 000</p>
            </div>
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/80">
                Horario
              </h3>
              <p className="mt-2 text-zinc-300">
                Mar - Dom: 13:00 - 16:00 · 20:30 - 23:30
                <br />
                Lunes cerrado
              </p>
            </div>
          </div>

          <div id="reservas">
            <ReservationForm />
          </div>
        </div>
      </section>
    </>
  );
}
