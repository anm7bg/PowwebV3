"use client";

import { useState } from "react";

type Category = "all" | "ecommerce" | "corporate";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageBg: string;
  grayscale: boolean;
  category: Category;
  url?: string;
}

const projects: Project[] = [
  {
    name: "Agroparts24.com",
    description:
      "Оптимизации, SEO и поддръжка до 2024г. на електронен мултиезичен магазин – WordPress с повече от 1000 продукта.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADDfrfxDJTB31m_W5u_OjkMvdzKXiVEM1vRAoetkbTY4BtWkyeypj5eU3VkAKOQrXt6RkEIfSEsXFz6UzmuR1DGpGkR19znheMzFjsqVVDDFXFnSqqKI1JNezR7HM_xwmmCS32EtWIyBr0sqen5ZeESDwYw09kDU20v_92NyMVbhweMATFYXumN281zGIjsTSfP4_SOV_ve8Uu-hxfmndk0rFI1jZb1Kh_qCsj01P6_CDHDd4rkok0FcKtpcfHwjAfrhnBWbV_t-FC",
    imageAlt: "Agroparts Logo",
    imageBg: "bg-white",
    grayscale: true,
    category: "ecommerce",
  },
  {
    name: "Theweekend.bg",
    description:
      "Подобрения и нови функционалности... електронен магазин – WordPress.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0p4WcTvdQNwYlwYOZf0yV2RpDd5V4vJyso9NjaTNKGyNyxoD-KJjNdYTL1ckCJ2xhswXcr64bxqHrwof9Vvm4sGErUCnbm1Viy__oJAmb9SvOWE89s7B4ssjNpmBndSmmhBsj7LmCKovDq0o5yq5EvdfwwEzJnJhRCBPNIsPwmuGz7ZVbdquzyoorlI6ATlmFjdFIvch49zhGMWZ26T6blK6Pa6mINOjpn_0YrJNBOwpZKRcJ5pkwd7k2wNcPOxCerwMH9SJgkMn6",
    imageAlt: "The Weekend Logo",
    imageBg: "bg-black",
    grayscale: false,
    category: "ecommerce",
  },
  {
    name: "Darkrenaissance.club",
    description:
      "Подобрения и нови функционалности... електронен магазин – WordPress.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjJlXMz5vZMQmXXFBtpJ1AYkdd7cpUQ5fkCdaDld8kVHr0slR_HZgjbDxv-oL-6P6nmPbaZXqxpFOoYlrPh-6AKLeDamIevqwENIn3WtOq2LncW0q-VGlxdbOvP6x_brcjBlessV1ZHs7OBmGHum5sTjdga7jLf0CgnwgBMnE-Ki7y0HyvD2-mr0xp1YeYH37Ght84EctMHvmXpDUnm5OJ02n4LG8_BxAoh3w6yJ1K0tJMBHqmo-1mrSZaHWIjpgU77_CGzycpuFsj",
    imageAlt: "Dark Renaissance Logo",
    imageBg: "bg-surface-container-lowest",
    grayscale: false,
    category: "ecommerce",
  },
  {
    name: "Agroniva.bg",
    description:
      "Оптимизации, SEO и поддръжка до 2024г. на електронен мултиезичен магазин – WordPress с повече от 1000 продукта.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWJpSGsNlpAbLOAmXPwGHcTPTMP0S7hnxldRJ3xjY1Pvy-CQ1ViivsMhz9dsrZM2PUp32hYVSqH8Rgy5x7l6YPGLnDX2aS9QHZzBzkihJsrXL0ET8wXzKbukXNmbpiYXCDSLOgyKvQc51faSnFaQN_brBuuc70fbuqlgTFN6vrHfl2duBM0VybJcKWK51S9vDhCeaa2l5-yzxVebpD1uK4mhdpoNRQ2nPiBV7eg2se9FAkUU0z5vtsmoKEPcIM7R8fztV8m_G8QrYg",
    imageAlt: "Agroniva Logo",
    imageBg: "bg-white",
    grayscale: true,
    category: "ecommerce",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "Всички", value: "all" },
  { label: "Ел. магазини", value: "ecommerce" },
  { label: "Фирмени сайтове, блогове и SPA", value: "corporate" },
];

export default function ProektiClient() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Filter Bar */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-outline-variant pb-4">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`font-headline-md text-headline-md pb-2 transition-all duration-200 ${
                activeFilter === f.value
                  ? "text-primary-fixed-dim border-b-2 border-primary-container active-filter"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24">
        {filtered.length === 0 ? (
          <p className="text-center text-on-surface-variant py-24 text-body-lg font-body-lg">
            Няма проекти в тази категория.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((project) => (
              <article
                key={project.name}
                className="glass-card flex flex-col group hover:border-primary-container transition-all duration-300 p-4 inner-glow"
              >
                <div
                  className={`aspect-video ${project.imageBg} mb-6 flex items-center justify-center p-4 overflow-hidden rounded-sm border border-outline-variant`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={project.imageAlt}
                    src={project.imageUrl}
                    className={`max-w-full h-auto transition-all duration-500 ${
                      project.grayscale
                        ? "grayscale group-hover:grayscale-0"
                        : ""
                    }`}
                  />
                </div>
                <div className="flex-grow flex flex-col px-2">
                  <h3 className="font-headline-md text-headline-md text-primary-fixed-dim mb-3">
                    {project.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <button className="w-full py-3 border border-outline-variant bg-surface-container-highest text-primary-fixed-dim font-label-md text-label-md uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-fixed transition-all active:scale-95">
                  Виж
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
