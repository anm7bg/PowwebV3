import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Реализирани проекти за електронни магазини от Powweb.bg",
    template: "Реализирани проекти за електронни магазини от Powweb.bg",
  },
  description: "Разгледайте нашите успешно реализирани проекти за електронни магазини! Powweb.bg предлага професионални уеб решения за онлайн търговия, съчетаващи...",
  icons: {
    icon: "/new-favicon.ico",
  },
};
export default function SEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="proekti flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-[100%] px-[20px] text-center justify-center">
        {children}
      </div>
    </section>
  );
}
