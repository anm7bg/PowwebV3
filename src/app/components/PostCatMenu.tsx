"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const filters = [
  { label: "Всички", href: "/blog" },
  { label: "SEO", href: "/blog/kakvo-e-seo" },
  { label: "WordPress", href: "/blog/za-wordpress" },
];

const PostCatMenu = () => {
  const pathname = usePathname();

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-outline-variant pb-4">
        {filters.map((f) => {
          // Use exact match for the main blog page to avoid highlighting both "Всички" and a specific category.
          const isActive = f.href === "/blog" 
            ? pathname === "/blog" 
            : pathname.startsWith(f.href);
            
          return (
            <Link
              key={f.href}
              href={f.href}
              className={`font-headline-md text-headline-md pb-2 transition-all duration-200 ${isActive
                  ? "text-primary-fixed-dim border-b-2 border-primary-container active-filter"
                  : "text-on-surface-variant hover:text-primary"
                }`}
            >
              {f.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PostCatMenu;