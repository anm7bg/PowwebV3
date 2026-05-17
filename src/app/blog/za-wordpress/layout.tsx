import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "За WordPress - Powweb.bg",
    template: "За WordPress - Powweb.bg",
  },
  description: "Категорията - За WordPress предлага пълна гама от ресурси и инструменти за изграждане и оптимизация на WordPress сайтове.  ...",
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
