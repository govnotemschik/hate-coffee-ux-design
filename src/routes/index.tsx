import { createFileRoute } from "@tanstack/react-router";
import heroBarista from "@/assets/hero-barista.jpg";
import menuCoffee from "@/assets/menu-coffee.jpg";
import menuLatte from "@/assets/menu-latte.jpg";
import menuHotdog from "@/assets/menu-hotdog.jpg";
import menuPastry from "@/assets/menu-pastry.jpg";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { MagneticButton } from "@/components/MagneticButton";
import { TiltCard } from "@/components/TiltCard";
import { useParallax, useScrollProgress } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hate Coffee — Лучший кофе в Приморском районе, Одеса" },
      { name: "description", content: "Спешелти кофейня на Пішонівській, 27. Свежая обжарка, альтернативное молоко, десерты и легендарные хот-доги. Рейтинг 5.0 ★ на Google." },
      { property: "og:title", content: "Hate Coffee — Одеса" },
      { property: "og:description", content: "Лучший кофе в Приморском районе. Спешелти, десерты, хот-доги." },
      { property: "og:image", content: heroBarista },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const reviews = [
  {
    quote: "Василий, выше всяких похвал! Лучшая кофейня в городе ❤️",
    author: "Olha K.",
  },
  {
    quote: "Кофе очень вкусный, много десертов, хот-догов и альтернативное молоко ✨",
    author: "Daria M.",
  },
  {
    quote: "Персонал легендарный. Всегда умеют поднять настроение!",
    author: "Артем С.",
  },
];

const features = [
  { title: "Свежая обжарка", desc: "Зерно из локальных ростерий, каждую неделю.", icon: "◐" },
  { title: "Альтернативное молоко", desc: "Овсяное, миндальное, кокосовое — без доплат за вкус.", icon: "≈" },
  { title: "Десерты & Хот-доги", desc: "Большой выбор сладкого и легендарные хот-доги.", icon: "✦" },
];

const menu = [
  { name: "V60 Спешелти", desc: "Альтернативный заваp на выбор зерна", price: "95 ₴", img: menuCoffee },
  { name: "Латте на овсяном", desc: "Двойной эспрессо, бархатное молоко", price: "75 ₴", img: menuLatte },
  { name: "Легендарный хот-дог", desc: "Хрустящая булочка, фирменные соусы", price: "85 ₴", img: menuHotdog },
  { name: "Свежая выпечка", desc: "Круассаны и десерты каждое утро", price: "от 45 ₴", img: menuPastry },
];

const schedule = [
  "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс",
];

const marqueeWords = [
  "Спешелти", "★", "Свежая обжарка", "★", "Овсяное молоко", "★",
  "V60", "★", "Хот-доги", "★", "Приморский район", "★", "07:00 — 21:30", "★",
];

const INSTAGRAM_URL = "https://instagram.com/hate_coffee_01";

function SplitText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((c, i) => (
        <span key={i} className="char" style={{ animationDelay: `${i * 0.04}s` }} aria-hidden>
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Index() {
  const { ref: heroRef, offset } = useParallax<HTMLImageElement>(0.25);
  const progress = useScrollProgress();
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scroll progress bar */}
      <div
        className="fixed left-0 top-0 z-50 h-[3px] origin-left bg-[var(--cream)] mix-blend-difference"
        style={{ transform: `scaleX(${progress})`, width: "100%" }}
        aria-hidden
      />

      {/* Floating IG badge */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[var(--espresso)] py-3 pl-4 pr-5 text-sm font-medium text-[var(--cream)] shadow-2xl ring-1 ring-[var(--cream)]/10 transition hover:scale-105 hover:bg-[var(--roast)]"
      >
        <InstagramIcon className="h-5 w-5 transition group-hover:rotate-12" />
        <span className="hidden sm:inline">@hate_coffee_01</span>
      </a>

      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight text-[var(--cream)]">
            Hate<span className="opacity-60">.</span>Coffee
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-[var(--cream)]/80 md:flex">
            {[
              { href: "#menu", label: "Меню" },
              { href: "#about", label: "О нас" },
              { href: "#reviews", label: "Отзывы" },
              { href: "#visit", label: "Контакты" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="group relative hover:text-[var(--cream)]">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--cream)] transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-[var(--cream)]/30 p-2 text-[var(--cream)] transition hover:bg-[var(--cream)] hover:text-[var(--espresso)]"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="tel:+380682802994"
              className="rounded-full border border-[var(--cream)]/30 px-4 py-2 text-sm text-[var(--cream)] transition hover:bg-[var(--cream)] hover:text-[var(--espresso)]"
            >
              068 280 29 94
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[var(--espresso)] text-[var(--cream)]">
        <div className="absolute inset-0">
          <img
            ref={heroRef}
            src={heroBarista}
            alt="Бариста Василий готовит V60 в Hate Coffee, Одеса"
            width={1536}
            height={1792}
            className="h-[115%] w-full object-cover opacity-55 will-change-transform"
            style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.05)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--espresso)] via-[var(--espresso)]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)] via-transparent to-transparent" />
          {/* Steam */}
          <div className="pointer-events-none absolute bottom-1/3 right-[18%] hidden lg:block">
            <span className="steam" style={{ animationDelay: "0s" }} />
            <span className="steam ml-3" style={{ animationDelay: "1.2s" }} />
            <span className="steam ml-6" style={{ animationDelay: "2.4s" }} />
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-12">
          <div className="max-w-2xl">
            <Reveal variant="up" className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/20 bg-[var(--cream)]/5 px-3 py-1 text-xs uppercase tracking-[0.2em] backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--cream)]" /> Одеса · Молдаванка
              </div>
            </Reveal>
            <Reveal variant="blur" delay={120}>
              <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)] font-semibold leading-[0.9] tracking-tighter">
                Hate<br />Coffee<span className="text-[var(--cream)]/40">.</span>
              </h1>
            </Reveal>
            <Reveal variant="up" delay={350}>
              <p className="mt-8 max-w-md text-lg text-[var(--cream)]/80 md:text-xl">
                Лучший кофе на Молдаванке. Имя звучит грубо — кофе звучит идеально.
              </p>
            </Reveal>
            <Reveal variant="up" delay={500} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--cream)] px-7 py-4 text-sm font-semibold text-[var(--espresso)] transition hover:scale-[1.03] hover:bg-white active:scale-100"
              >
                <span className="relative z-10">Посмотреть меню</span>
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#visit"
                className="inline-flex items-center gap-2 px-2 py-4 text-sm font-medium text-[var(--cream)]/80 hover:text-[var(--cream)]"
              >
                Как добраться
              </a>
            </Reveal>
          </div>

          <Reveal variant="up" delay={700} className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-[var(--cream)]/15 pt-8">
            <div>
              <div className="font-display text-4xl">
                <CountUp to={5} decimals={1} /> <span className="text-2xl">★</span>
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-[var(--cream)]/60">
                <CountUp to={23} /> отзыва Google
              </div>
            </div>
            <div className="hidden text-right text-xs uppercase tracking-widest text-[var(--cream)]/60 sm:block">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Открыто сегодня · 07:00 — 21:30
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-[var(--cream)]/40">
          <span className="float-slow inline-block">↓ scroll</span>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-[var(--espresso)] py-5 text-[var(--cream)]">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-display text-2xl tracking-tight">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className={w === "★" ? "opacity-50" : ""}>{w}</span>
          ))}
        </div>
      </div>

      {/* SOCIAL PROOF */}
      <section id="reviews" className="border-b border-border bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <Reveal variant="up">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Социальное доказательство</p>
              <h2 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">
                Любимое место района.
              </h2>
              <div className="mt-10 rounded-2xl bg-[var(--espresso)] p-8 text-[var(--cream)] transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="font-display text-7xl font-semibold">
                  <CountUp to={5} decimals={1} />
                </div>
                <div className="mt-2 text-lg tracking-wide">★ ★ ★ ★ ★</div>
                <div className="mt-4 text-sm text-[var(--cream)]/70">
                  Средняя оценка по <CountUp to={23} /> проверенным отзывам в Google.
                </div>
              </div>
            </Reveal>

            <Reveal variant="stagger" className="grid gap-5 sm:grid-cols-2">
              {reviews.map((r, i) => (
                <figure
                  key={i}
                  className={`group rounded-2xl border border-border bg-card p-7 transition duration-500 hover:-translate-y-1 hover:border-[var(--roast)]/40 hover:shadow-xl ${i === 0 ? "sm:row-span-2 sm:flex sm:flex-col sm:justify-between" : ""}`}
                >
                  <blockquote className="font-display text-xl leading-snug text-foreground md:text-2xl">
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="h-8 w-8 rounded-full bg-[var(--sand)]" />
                    {r.author} · Google Review
                  </figcaption>
                </figure>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="about" className="bg-[var(--sand)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal variant="up" className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl font-display text-4xl font-semibold md:text-5xl">
              Маленький киоск.<br />Большая забота о деталях.
            </h2>
            <p className="max-w-sm text-muted-foreground">
              Мы варим спешелти каждый день с 7 утра — для тех, кто понимает разницу.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group bg-[var(--sand)] p-10 transition duration-500 hover:bg-background">
                <div className="font-display text-5xl text-[var(--roast)] transition duration-500 group-hover:rotate-12 group-hover:scale-110">{f.icon}</div>
                <h3 className="mt-8 text-xl font-semibold">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal variant="up" className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Меню</p>
              <h2 className="mt-3 font-display text-5xl font-semibold md:text-6xl">Что попробовать</h2>
            </div>
            <a href="#visit" className="text-sm font-medium underline underline-offset-4 hover:text-[var(--roast)]">
              Полное меню в кофейне →
            </a>
          </Reveal>

          <Reveal variant="stagger" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {menu.map((m) => (
              <article key={m.name} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--sand)]">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-3 transition group-hover:translate-x-1">
                  <h3 className="font-display text-xl font-semibold">{m.name}</h3>
                  <span className="text-sm font-medium text-[var(--roast)]">{m.price}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="bg-[var(--espresso)] py-24 text-[var(--cream)] lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal variant="up">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--cream)]/50">Как нас найти</p>
              <h2 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">
                Приходи варить день вместе.
              </h2>
              <p className="mt-6 max-w-md text-[var(--cream)]/70">
                Маленький оранжевый киоск во дворе на Пішонівській. Найти просто — иди на запах свежего эспрессо.
              </p>

              <dl className="mt-12 grid gap-8 sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-[var(--cream)]/50">Адрес</dt>
                  <dd className="mt-2 font-display text-xl">Пішонівська, 27<br />Одеса</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-[var(--cream)]/50">Телефон</dt>
                  <dd className="mt-2 font-display text-xl">
                    <a href="tel:+380682802994" className="hover:underline">068 280 29 94</a>
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs uppercase tracking-widest text-[var(--cream)]/50">Часы работы</dt>
                  <dd className="mt-3 grid grid-cols-7 gap-2">
                    {schedule.map((d) => (
                      <div
                        key={d}
                        className="rounded-lg border border-[var(--cream)]/15 px-2 py-3 text-center transition hover:-translate-y-0.5 hover:border-[var(--cream)]/40 hover:bg-[var(--cream)]/5"
                      >
                        <div className="text-xs text-[var(--cream)]/60">{d}</div>
                        <div className="mt-1 font-display text-sm">07—21:30</div>
                      </div>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal variant="zoom" className="relative min-h-[400px] overflow-hidden rounded-3xl border border-[var(--cream)]/10">
              <iframe
                title="Hate Coffee на карте"
                src="https://www.google.com/maps?q=Пішонівська+27,+Одеса&output=embed"
                loading="lazy"
                className="absolute inset-0 h-full w-full grayscale-[0.4]"
              />
              <div className="float-slow pointer-events-none absolute bottom-4 left-4 rounded-full bg-[var(--espresso)] px-4 py-2 text-xs font-medium text-[var(--cream)] shadow-lg">
                ★ Hate Coffee · 5.0
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--espresso)] pb-12 text-[var(--cream)]/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-[var(--cream)]/10 px-6 pt-8 text-xs sm:flex-row sm:items-center lg:px-12">
          <div>© {new Date().getFullYear()} Hate Coffee · Одеса</div>
          <div className="font-display text-sm tracking-tight text-[var(--cream)]/40">
            Made with hate. Served with love.
          </div>
        </div>
      </footer>
    </div>
  );
}
