import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Реализирани фирмени сайтове, блогове и SPA от Powweb.bg",
    template: "Реализирани фирмени сайтове, блогове и SPA от Powweb.bg",
  },
  description: "Доверете се на експертите в уеб разработката и създайте уебсайт, който впечатлява и привлича клиенти!...",
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
