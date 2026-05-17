import type { Metadata } from "next";
import ProektiClient from "./ProektiClient";

export const metadata: Metadata = {
  title: "Проекти | POWWEBS",
  description:
    "Разгледайте нашето портфолио от реализирани проекти – електронни магазини, фирмени сайтове, SPA приложения и SEO оптимизации.",
};

export default function ProektiPage() {
  return (
    <div className="cyber-grid relative overflow-hidden min-h-screen">
      {/* Visual Accent Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary-container/5 blur-[100px] -z-10 rounded-full pointer-events-none" />

      {/* Hero Title */}
      <section className="pt-16 pb-8 text-center px-margin-mobile md:px-margin-desktop">
        <h1 className="font-display-lg text-[40px] md:text-display-lg font-extrabold text-on-surface tracking-tighter uppercase mb-4">
          ПРОЕКТИ
        </h1>
        <div className="w-16 h-1 bg-primary-container mx-auto" />
      </section>

      {/* Interactive client section (filter + grid) */}
      <ProektiClient />
    </div>
  );
}
