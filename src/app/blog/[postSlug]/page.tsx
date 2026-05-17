import Image from "next/image";
import Link from "next/link";
import { blogCard } from "@/lib/interface";
import { getPostBySlug, getPosts } from "@/lib/service";

export const dynamicParams = true;

export async function generateStaticParams() {
    const response = await getPosts()

    if (!response) return [];

    return response.map((post: any) => ({
        postSlug: post.slug,
    }));
}

const Page = async ({ params }: { params: Promise<{ postSlug: string }> }) => {
    const resolvedParams = await params;

    console.log("Params")
    console.log(resolvedParams.postSlug)

    const post: blogCard = await getPostBySlug(resolvedParams.postSlug);

    if (!post) {
        return <div className="text-center py-12">Loading...</div>;
    }

    return (
        <main className="single-post max-w-container-max mx-auto">
            {/* Hero Section */}
            <section className="relative w-full aspect-[21/9] flex items-end p-margin-desktop mb-16 overflow-hidden">
                {post.featuredImage?.node?.sourceUrl ? (
                    <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.title}
                        fill
                        className="absolute inset-0 w-full h-full object-cover brightness-50"
                        unoptimized
                    />
                ) : (
                    <div className="absolute inset-0 bg-surface-container" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                <div className="relative z-10 max-w-4xl">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-3 py-1 bg-primary-container text-on-primary-container text-label-md font-label-md tracking-widest uppercase">Разработка</span>
                        <span className="text-on-surface-variant font-label-md text-label-md">15 Юни 2024</span>
                    </div>
                    <h1 className="font-display-lg text-display-lg md:text-[64px] md:leading-[1.1] text-white mb-6">
                        {post.title}
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                        {post.excerpt ? (
                            <span dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                        ) : (
                            "Разберете повече за тази тема в нашата подробна статия."
                        )}
                    </p>
                </div>
            </section>

            {/* Article Layout --> */}
            <div className="post-content px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 pb-24">
                {/* Side Navigation / Share (Left) --> */}
                <aside className="hidden lg:block lg:col-span-1">
                    <div className="sticky top-28 flex flex-col items-center gap-8">
                        <Link className="text-on-surface-variant hover:text-primary transition-colors flex flex-col items-center gap-2" href="/blog">
                            <span className="material-symbols-outlined">arrow_back</span>
                            <span className="text-label-md font-label-md [writing-mode:vertical-lr] rotate-180">НАЗАД</span>
                        </Link>
                        <div className="w-px h-12 bg-outline-variant"></div>
                        <div className="flex flex-col gap-4">
                            <button className="w-10 h-10 flex items-center justify-center cyber-border hover:cyber-border-active text-on-surface-variant hover:text-primary transition-all">
                                <span className="material-symbols-outlined">share</span>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center cyber-border hover:cyber-border-active text-on-surface-variant hover:text-primary transition-all">
                                <span className="material-symbols-outlined" data-weight="fill">bookmark</span>
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Content --> */}
                <article className="lg:col-span-11 prose prose-invert prose-primary max-w-none">
                    <div className="mb-12">
                        <div className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant mb-6" dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    {/* Tags & Social End --> */}
                    <div className="pt-8 border-t border-outline-variant flex flex-wrap items-center justify-between gap-6">
                        <div className="flex gap-2">
                            <span className="px-3 py-1 border border-outline-variant text-label-md font-label-md text-on-surface-variant">API-FIRST</span>
                            <span className="px-3 py-1 border border-outline-variant text-label-md font-label-md text-on-surface-variant">TECH STACK</span>
                            <span className="px-3 py-1 border border-outline-variant text-label-md font-label-md text-on-surface-variant">JAMSTACK</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <span className="text-label-md font-label-md text-on-surface-variant">СПОДЕЛИ:</span>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors"><span className="material-symbols-outlined">public</span></button>
                                <button className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors"><span className="material-symbols-outlined">alternate_email</span></button>
                                <button className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors"><span className="material-symbols-outlined">send</span></button>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Sidebar / Related (Right) --> 
                <aside className="lg:col-span-4 space-y-12">
                    <div className="cyber-border p-8 inner-glow">
                        <h4 className="font-headline-md text-headline-md text-white mb-6 border-b border-outline-variant pb-4">Свързани статии</h4>
                        <div className="space-y-8">
                            {/* Related Item --> 
                            <a className="group block" href="#">
                                <div className="aspect-video mb-4 overflow-hidden cyber-border">
                                    <img alt="Performance Metrics" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX_5CqvAaRUuF7yIiXwBCb8W9dopGk6bFhy8xxvX73-J2Me5PFUo4TdxL6qm95qGK95LaKRlT-jRlw5AMl4m44NkKNyMu99n4ZvFrNQJVs4LUQ-nDa2bzZgkSUpxTEFLjFRFGuDL5KerpwTP--s057o1-P_meUZWucjmJdzJZHpHT5oUvLM9TnnLmyJIsyCDploep7hvIrWSRI8SARtYTMNBxUDzkhkb6eL7ay7vcuiHKnbv_rG1NYOw9V_RTqcnpj3fuZzLjZzp9o" />
                                </div>
                                <h5 className="font-body-md text-body-md font-bold text-white group-hover:text-primary transition-colors">Оптимизация на производителността при Next.js 14</h5>
                                <span className="text-label-md font-label-md text-on-surface-variant mt-2 block">10 Юни 2024</span>
                            </a>
                            {/* Related Item --> 
                            <a className="group block" href="#">
                                <div className="aspect-video mb-4 overflow-hidden cyber-border">
                                    <img alt="Digital Security" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoJEKYKEPnKjd5-HnZpo78yiy3mMAoTD0WbNxOOXEgaxv3BJS5CS8bW4gbsORrOxpkPP7gxALgfyTUMS8PMxAqwxEu2uczDfosGTn4DOmFTgaSaZz8MPXAQ29fq-wi9fK0v5d4c4YVr0Td2MEJl3s2vA1TV7eRTrMfmkNGKNivvvu3pjSRwyakwTZgf1NDIY9V-ITFUTfVhcpdeAE6vIahC8XfUnwJ2jRKZBOQfHc32Ay6imzhbgy9G827y3qPp6Nw28Oyp9S6rTUT" />
                                </div>
                                <h5 className="font-body-md text-body-md font-bold text-white group-hover:text-primary transition-colors">Защо сигурността е приоритет №1 при разработка на софтуер</h5>
                                <span className="text-label-md font-label-md text-on-surface-variant mt-2 block">5 Юни 2024</span>
                            </a>
                        </div>
                    </div>
                    {/* Newsletter CTA --> 
                    <div className="bg-primary-container p-8">
                        <h4 className="font-headline-md text-headline-md text-on-primary-fixed mb-4">Бъдете в крак с технологиите</h4>
                        <p className="font-body-sm text-body-sm text-on-primary-container mb-6">Абонирайте се за нашия месечен бюлетин с избрани технически материали и новини.</p>
                        <form className="space-y-4">
                            <input className="w-full bg-surface/20 border-0 border-b border-on-primary-container focus:ring-0 focus:border-on-primary-fixed text-on-primary-fixed placeholder:text-on-primary-container/60 px-0 py-3 font-body-md" placeholder="Вашият email" type="email" />
                            <button className="w-full bg-on-primary-fixed text-white font-bold py-3 hover:bg-on-primary-fixed/90 transition-all uppercase tracking-widest text-label-md" type="submit">
                                Абониране
                            </button>
                        </form>
                    </div>
                </aside>*/}
            </div>
        </main>
    );

};

export default Page;