import Image from "next/image";
import styles from "./page.module.css";

import Background from '@/components/Background';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Background>
          <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
            <img alt="Cyberpunk futuristic interface" className="w-full h-full object-cover opacity-30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhOX-oF8vmPZmjhBEeVjf3xkXepPYx6EJdLyLFZK5OzPYBc2hUoVxH1oQSaR2JcmELxQFcErMZTVds9S6ldQ6U5nMXxGKOXUZk3CWM5izrhmT-rHAhEu5NKm0sUARnNviOnJY46BOFOl0dAIoPeg1nYP9-4VdIloprzf99thwe8l3QqOWwUjl4vtMq3WIQ2yZAfR2uwQVj46vcz69SB4QVhu4AOmtvphZkfE5rg407fjgoXqXdxZzsW6Hg_Wkg0bZ6Xh2CDJuPIx4-"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
            </div>
            <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-DEFAULT bg-primary-container/10 border border-primary-container/20 backdrop-blur-sm">
            <span className="text-primary-container font-label-sm text-label-sm uppercase tracking-widest">Digital Solutions Agency</span>
            </div>
            <h1 className="text-headline-lg-mobile font-headline-lg-mobile md:text-display-lg md:font-display-lg text-white mb-6 max-w-4xl mx-auto drop-shadow-lg">
                                Професионална изработка, SEO и поддръжка на сайтове, електронни магазини и SPA
                            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
                                Търсите надежден партньор за стартиране или развитие на вашия онлайн бизнес? Ние предоставяме високотехнологични решения, съобразени с най-новите стандарти за сигурност и производителност.
                            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-primary-container text-black font-label-md text-label-md px-8 py-3 rounded-DEFAULT glow-effect transition-all duration-300 flex items-center justify-center gap-2">
            <span>Свържете се с нас</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-primary-container text-primary-container hover:bg-primary-container/10 font-label-md text-label-md px-8 py-3 rounded-DEFAULT transition-all duration-300">
                                    Вижте услугите
                                </button>
            </div>
            </div>
          </section>
        </Background>
      </main>
    </div>
  );
}
