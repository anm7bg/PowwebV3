import { getWpPosts} from '@/lib/service';
import { blogCard } from '@/lib/interface';
import AnimatedPost from '@/components/AnimatedPosts';

const WpPublikacii = async () => {
	const posts: blogCard[] = await getWpPosts();

	console.log("Posts2")
	console.log(posts)

	return (
        // <p>Loading</p>
        <div className='wordpress-post-page leftRightWrap'>
            <AnimatedPost posts={posts} title="За WordPress" />
            <p>Категорията - За WordPress предлага пълна гама от ресурси и инструменти за изграждане и оптимизация на WordPress сайтове. Открийте полезни ръководства, плъгини, теми и съвети за подобряване на функционалността, сигурността и SEO оптимизацията на вашия уебсайт. Независимо дали сте начинаещ или напреднал потребител, тук ще намерите всичко необходимо за създаване на успешен и професионален WordPress сайт.</p>
        </div>
	);
};

export default WpPublikacii