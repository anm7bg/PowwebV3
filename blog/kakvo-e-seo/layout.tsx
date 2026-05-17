import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Какво е SEO - Powweb.bg",
    template: "Какво е SEO - Powweb.bg",
  },
  description: "Категорията - Какво е SEO? предоставя подробна информация за оптимизацията за търсачки (SEO) – процес, който помага на уебсайтовете да се...",
  icons: {
    icon: "/new-favicon.ico",
  },
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-[100%] px-[20px] text-center justify-center">
        {children}
      </div>
    </section>
  );
}
