import Image from "next/image";
import Link from "next/link";
import { blogCard } from '@/lib/interface';
import { getBlogs } from '@/lib/service';
import ProektiCatMenu from "../../components/ProektiCatMenu";


const BlogPage = async () => {
  const posts: blogCard[] = await getBlogs();
  console.log("Posts")
  console.log(posts)

  return (
    // <p>Loading</p>
    <div className="proekti-page el-mag-page max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <h1 className="font-display-lg text-[32px] md:text-[40px] font-extrabold text-on-surface tracking-tighter uppercase mb-4 text-center leading-tight">
        Фирмени сайтове, блогове и SPA
      </h1>
      <div className="w-16 h-1 bg-primary-container mx-auto mb-8" />
      <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto text-center mb-16">
        Открийте професионални решения за фирмени сайтове, блогове и SPA приложения с Powweb.bg. Ние предлагаме персонализиран дизайн, бърза скорост и интуитивен потребителски интерфейс, за да ви помогнем да изградите успешен онлайн образ. Доверете се на експертите в уеб разработката и създайте уебсайт, който впечатлява и привлича клиенти!
      </p>
      <ProektiCatMenu />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.map((post: any) => (
          <article key={post.slug} className="glass-card flex flex-col group hover:border-primary-container transition-all duration-300 p-4 inner-glow">
            <div className="aspect-video bg-surface-container-lowest mb-6 flex items-center justify-center p-0 overflow-hidden rounded-sm border border-outline-variant relative">
              {post.featuredImage?.node?.sourceUrl && (
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-all duration-500"
                  unoptimized
                />
              )}
            </div>
            <div className="flex-grow flex flex-col px-2">
              <h3 className="font-headline-md text-headline-md text-primary-fixed-dim mb-3">
                {post.title}
              </h3>
              <div
                className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            </div>
            <Link target="_blank" rel="nofollow" href={`${post.url.projectLink}`} className="w-full mt-auto">
              <button className="w-full py-3 border border-outline-variant bg-surface-container-highest text-primary-fixed-dim font-label-md text-label-md uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-fixed transition-all active:scale-95">
                Виж
              </button>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;