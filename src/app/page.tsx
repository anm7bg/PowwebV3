import Image from "next/image";
import Link from "next/link";
import CopyEmailButton from "@/app/components/CopyEmailButton";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Cyberpunk futuristic interface"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhOX-oF8vmPZmjhBEeVjf3xkXepPYx6EJdLyLFZK5OzPYBc2hUoVxH1oQSaR2JcmELxQFcErMZTVds9S6ldQ6U5nMXxGKOXUZk3CWM5izrhmT-rHAhEu5NKm0sUARnNviOnJY46BOFOl0dAIoPeg1nYP9-4VdIloprzf99thwe8l3QqOWwUjl4vtMq3WIQ2yZAfR2uwQVj46vcz69SB4QVhu4AOmtvphZkfE5rg407fjgoXqXdxZzsW6Hg_Wkg0bZ6Xh2CDJuPIx4-"
            fill
            className="object-cover opacity-0"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-DEFAULT bg-primary-container/10 border border-primary-container/20 backdrop-blur-sm">
            <span className="text-primary-container font-label-sm text-label-sm uppercase tracking-widest">
              Digital Solutions Agency
            </span>
          </div>
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile md:text-display-lg md:font-display-lg text-white mb-6 max-w-4xl mx-auto drop-shadow-lg">
            Професионална изработка, SEO и поддръжка на сайтове, електронни
            магазини и SPA
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Търсите надежден партньор за стартиране или развитие на вашия онлайн
            бизнес? Ние предоставяме високотехнологични решения, съобразени с
            най-новите стандарти за сигурност и производителност.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/#kontakti-home" className="w-full sm:w-auto bg-primary-container text-black font-label-md text-label-md px-8 py-3 rounded-DEFAULT glow-effect transition-all duration-300 flex items-center justify-center gap-2">
              <span>Свържете се с нас</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
            <Link href="/#uslugi" className="w-full sm:w-auto bg-transparent border border-primary-container text-primary-container hover:bg-primary-container/10 font-label-md text-label-md px-8 py-3 rounded-DEFAULT transition-all duration-300 flex items-center justify-center">
              Вижте услугите
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="za-nas" className="py-10 bg-surface-container-low border-y border-white/5 relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-container/5 to-transparent pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-headline-md font-headline-md text-white mb-4">
              Дългогодишен опит и модерни технологии
            </h2>
            <div className="h-1 w-16 bg-primary-container rounded-full mx-auto md:mx-0"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* WordPress Column */}
            <div className="bg-surface border border-white/10 rounded-xl p-8 hover:border-primary-container/30 transition-colors duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-headline-sm font-headline-sm text-white">
                  WordPress Екосистема
                </h3>
                <span className="px-3 py-1 bg-surface-container-high rounded text-label-sm font-label-sm text-on-surface-variant border border-white/5">
                  От 2013 г.
                </span>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                Дълбоко познаване на архитектурата на WordPress. Разработка на
                къстъм теми, плъгини и комплексни WooCommerce решения,
                оптимизирани за скорост и сигурност.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-container/10 text-primary-fixed-dim rounded border border-primary-container/20 text-label-sm font-label-sm">
                  PHP
                </span>
                <span className="px-3 py-1 bg-primary-container/10 text-primary-fixed-dim rounded border border-primary-container/20 text-label-sm font-label-sm">
                  MySQL
                </span>
                <span className="px-3 py-1 bg-primary-container/10 text-primary-fixed-dim rounded border border-primary-container/20 text-label-sm font-label-sm">
                  WooCommerce
                </span>
                <span className="px-3 py-1 bg-primary-container/10 text-primary-fixed-dim rounded border border-primary-container/20 text-label-sm font-label-sm">
                  REST API
                </span>
              </div>
            </div>
            {/* React Column */}
            <div className="bg-surface border border-white/10 rounded-xl p-8 hover:border-primary-container/30 transition-colors duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-headline-sm font-headline-sm text-white">
                  React & Next.js
                </h3>
                <span className="px-3 py-1 bg-surface-container-high rounded text-label-sm font-label-sm text-primary-container border border-primary-container/20 shadow-[0_0_10px_rgba(0,229,255,0.1)]">
                  От 2023 г.
                </span>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                Изграждане на светкавично бързи Single Page Applications (SPA) и
                статично генерирани сайтове (SSG/SSR) с най-модерния
                технологичен стек.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-container/10 text-primary-fixed-dim rounded border border-primary-container/20 text-label-sm font-label-sm">
                  React 18
                </span>
                <span className="px-3 py-1 bg-primary-container/10 text-primary-fixed-dim rounded border border-primary-container/20 text-label-sm font-label-sm">
                  Next.js 14
                </span>
                <span className="px-3 py-1 bg-primary-container/10 text-primary-fixed-dim rounded border border-primary-container/20 text-label-sm font-label-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-primary-container/10 text-primary-fixed-dim rounded border border-primary-container/20 text-label-sm font-label-sm">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="uslugi" className="py-10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg-mobile font-headline-lg-mobile md:text-headline-lg md:font-headline-lg text-white mb-4">
              Какви услуги предлагаме?
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Пълен цикъл от услуги за дигитализация и разрастване на вашия
              бизнес.
            </p>
          </div>
          {/* Bento Grid Style Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Web Dev - Large Card */}
            <div className="md:col-span-2 bg-[#161618] border border-white/5 rounded-xl p-8 hover:border-primary-container/20 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 text-primary-container/5 transform group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined" style={{ fontSize: "200px" }}>
                  code
                </span>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded bg-primary-container/10 flex items-center justify-center mb-6 border border-primary-container/20">
                    <span className="material-symbols-outlined text-primary-container">
                      web
                    </span>
                  </div>
                  <h3 className="text-headline-sm font-headline-sm text-white mb-4">
                    Изработка на уебсайтове и е-магазини
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
                    От корпоративни сайтове до сложни платформи за електронна
                    търговия. Фокус върху UI/UX, конверсии и безпроблемна работа
                    на всяко устройство.
                  </p>
                </div>
                <div className="mt-8 flex gap-2">
                  <span className="px-2 py-1 bg-surface rounded text-label-sm font-label-sm text-on-surface border border-white/10">
                    B2B
                  </span>
                  <span className="px-2 py-1 bg-surface rounded text-label-sm font-label-sm text-on-surface border border-white/10">
                    B2C
                  </span>
                  <span className="px-2 py-1 bg-surface rounded text-label-sm font-label-sm text-on-surface border border-white/10">
                    SaaS UI
                  </span>
                </div>
              </div>
            </div>
            {/* SEO */}
            <div className="bg-[#161618] border border-white/5 rounded-xl p-8 hover:border-primary-container/20 transition-all duration-300">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center mb-6 border border-white/10">
                <span className="material-symbols-outlined text-white">
                  troubleshoot
                </span>
              </div>
              <h3 className="text-[20px] font-headline-sm font-semibold text-white mb-3">
                SEO Оптимизация
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Техническо и съдържателно оптимизиране за водещи позиции в
                търсачките и органичен трафик.
              </p>
            </div>
            {/* Speed */}
            <div className="bg-[#161618] border border-white/5 rounded-xl p-8 hover:border-primary-container/20 transition-all duration-300">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center mb-6 border border-white/10">
                <span className="material-symbols-outlined text-white">speed</span>
              </div>
              <h3 className="text-[20px] font-headline-sm font-semibold text-white mb-3">
                Оптимизация на скоростта
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Редуциране на времето за зареждане (Core Web Vitals) за
                по-добро потребителско изживяване.
              </p>
            </div>
            {/* Maintenance */}
            <div className="md:col-span-2 bg-[#161618] border border-white/5 rounded-xl p-8 hover:border-primary-container/20 transition-all duration-300">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center mb-6 border border-white/10">
                <span className="material-symbols-outlined text-white">build</span>
              </div>
              <h3 className="text-[20px] font-headline-sm font-semibold text-white mb-3">
                Техническа поддръжка
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Регулярни ъпдейти, бекъпи, мониторинг и бърза реакция при
                проблеми 24/7.
              </p>
            </div>
            {/* Server Config */}
            {/* <div className="bg-[#161618] border border-white/5 rounded-xl p-8 hover:border-primary-container/20 transition-all duration-300">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center mb-6 border border-white/10">
                <span className="material-symbols-outlined text-white">dns</span>
              </div>
              <h3 className="text-[20px] font-headline-sm font-semibold text-white mb-3">
                Сървърна конфигурация
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Настройка на VPS/Dedicated сървъри, Nginx/Apache оптимизация
                и сигурност.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-10 bg-surface border-y border-white/5 relative">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-headline-md font-headline-md text-white mb-6">
                Защо да изберете нас?
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant mb-8">
                Ние не просто пишем код; ние изграждаме дигитални активи, които
                носят реална стойност и възвръщаемост на инвестициите.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary-container/10 flex items-center justify-center border border-primary-container/30 flex-shrink-0">
                    <span className="material-symbols-outlined text-[14px] text-primary-container">
                      check
                    </span>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-semibold text-white mb-1">
                      Безкомпромисно внимание към детайла
                    </h4>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Чист код, перфектен пиксел дизайн и изчистена архитектура
                      за дългосрочна стабилност.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary-container/10 flex items-center justify-center border border-primary-container/30 flex-shrink-0">
                    <span className="material-symbols-outlined text-[14px] text-primary-container">
                      check
                    </span>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-semibold text-white mb-1">
                      В крак с актуалните тенденции
                    </h4>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Непрекъснато обучение и имплементиране на най-новите
                      фреймуърци и практики (React 18+, Next.js App Router).
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary-container/10 flex items-center justify-center border border-primary-container/30 flex-shrink-0">
                    <span className="material-symbols-outlined text-[14px] text-primary-container">
                      check
                    </span>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-semibold text-white mb-1">
                      Пълна прозрачност
                    </h4>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Ясна комуникация, спазване на срокове и детайлно отчитане
                      на извършената работа.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              {/* Abstract Tech Visual Container */}
              <div className="bg-[#121214] rounded-xl border border-[#2A2A2C] p-6 relative shadow-2xl">
                <div className="flex items-center gap-2 mb-4 border-b border-[#2A2A2C] pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  <span className="ml-2 text-label-sm font-label-sm text-on-surface-variant font-mono">
                    system_architecture.ts
                  </span>
                </div>
                <pre className="text-label-sm font-label-sm text-on-surface-variant font-mono overflow-x-auto">
                  <code className="text-primary-container">import</code> {"{ "}
                  Quality, Speed, Security {"} "}
                  <code className="text-primary-container">from</code> '@powwebs/core';
                  <br />
                  <br />
                  <code className="text-primary-container">const</code> project ={" "}
                  <code className="text-primary-container">new</code> Project({"{"}
                  <br />
                  {"  "}client: <span className="text-green-400">'Visionary Brand'</span>,<br />
                  {"  "}stack: [<span className="text-green-400">'Next.js'</span>,{" "}
                  <span className="text-green-400">'Tailwind'</span>,{" "}
                  <span className="text-green-400">'TypeScript'</span>],<br />
                  {"  "}requirements: {"{"}
                  <br />
                  {"    "}performance: <span className="text-yellow-400">100</span>,{" "}
                  <span className="text-gray-500">// Lighthouse score</span>
                  <br />
                  {"    "}accessibility: <span className="text-yellow-400">100</span>,<br />
                  {"    "}seo: <span className="text-yellow-400">100</span>
                  <br />
                  {"  }"}
                  <br />
                  {"});"}
                  <br />
                  <br />
                  <code className="text-primary-container">await</code> project.deploy().then(() =&gt; {"{"}
                  <br />
                  {"  "}console.log(
                  <span className="text-green-400">'Success: Digital presence elevated.'</span>
                  );
                  <br />
                  {"});"}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontakti-home" className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-primary-container/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-3xl mx-auto px-margin-mobile text-center relative z-10">
          <h2 className="text-headline-lg-mobile font-headline-lg-mobile md:text-headline-lg md:font-headline-lg text-white mb-6">
            Готови ли сте да развиете бизнеса си онлайн?
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-10">
            Свържете се с нас за безплатна консултация и анализ на вашия
            проект. Нека обсъдим как можем да ви помогнем да постигнете целите
            си.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-primary-container text-black font-label-md text-label-md px-8 py-4 rounded-DEFAULT glow-effect transition-all duration-300 w-full sm:w-auto text-[16px] font-semibold">
              Безплатна консултация
            </button>
            <CopyEmailButton email="powwebs@gmail.com" />
          </div>
        </div>
      </section>
    </>
  );
}
