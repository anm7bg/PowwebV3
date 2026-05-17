import Link from 'next/link';


// import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { getSeoPosts} from '@/lib/service';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'; 
import { blogCard } from '@/lib/interface';
import PostCatMenu from '@/components/PostCatMenu';
import AnimatedPost from '@/components/AnimatedPosts';
// import SideNav from '@/components/side-nav';

const SeoPublikacii = async () => {
	const posts: blogCard[] = await getSeoPosts();

	// console.log("Posts2")
	// console.log(posts2)

	return (
        // <p>Loading</p>
        <div className='leftRightWrap'>
            <div className="blog-page">
                <AnimatedPost posts={posts} title="Какво е SEO" />
                <p>Категорията - Какво е SEO? предоставя подробна информация за оптимизацията за търсачки (SEO) – процес, който помага на уебсайтовете да се класират по-високо в резултатите на търсачките като Google. Тук ще откриете ключови понятия, основни техники и стратегии, които подобряват видимостта на вашия сайт, увеличават органичния трафик и водят до по-добро онлайн присъствие. Независимо дали сте начинаещ или опитен специалист в областта на SEO, тази категория предлага полезни съвети и актуални тенденции, които ще ви помогнат да подобрите позициите си в търсачките и да постигнете по-добри резултати.</p>
            </div>
            {/* <SideNav /> */}
        </div>
	);
};

export default SeoPublikacii