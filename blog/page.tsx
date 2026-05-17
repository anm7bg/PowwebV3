import Link from 'next/link';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { blogCard } from '@/lib/interface';
import { getPosts } from '@/lib/service';
import AnimatedPost from '@/components/AnimatedPosts';
import PostPageTitle from '@/components/PostPageTitle';


const BlogPage = async () => {
	const posts: blogCard[] = await getPosts();
	// console.log("Posts")
	// console.log(posts)
    
    return (
        // <p>Loading</p>
		<div className="blog-page">
            <AnimatedPost posts={posts} title="Публикации"/>
		</div>
	);
};

export default BlogPage;