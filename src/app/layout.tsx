import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.scss";
import NavBar from "./components/NavBar";

const sofiaSans = Sofia_Sans({
  variable: "--font-sofia",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "POWWEBS - Професионална изработка, SEO и поддръжка",
  description: "Професионални уеб решения за модерния бизнес. Изработка на уебсайтове, е-магазини, SEO и техническа поддръжка.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className={`dark ${sofiaSans.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
        {/* Full-screen video background */}
        <video
          className="video-bg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/background.mp4" type="video/mp4" />
        </video>

        {/* TopNavBar */}
        <NavBar />

        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-surface-container-lowest border-t border-white/5 w-full py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="col-span-1 md:col-span-1 mb-8 md:mb-0">
              <span className="text-headline-sm font-headline-sm font-bold text-primary dark:text-primary-fixed-dim block mb-4">
                POWWEBS
              </span>
              <p className="text-body-md font-body-md text-on-surface-variant max-w-xs">
                Професионални уеб решения за модерния бизнес.
              </p>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-wrap gap-x-8 gap-y-4">
              <a
                className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="#"
              >
                Услуги
              </a>
              <a
                className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="#"
              >
                Експертиза
              </a>
              <a
                className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="#"
              >
                Контакти
              </a>
              <a
                className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="#"
              >
                Политика за поверителност
              </a>
            </div>
            <div className="col-span-1 md:col-span-1 text-left md:text-right">
              <p className="text-label-sm font-label-sm text-on-surface-variant">
                © 2024 POWWEBS. Всички права запазени.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
