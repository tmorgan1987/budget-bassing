import Head from 'next/head';
import { PostCard, Categories, PostWidget, Header } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Budget Bassing</title>
        <link rel="icon" href="/BB-logos" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
      <div className='lg:col-span-5 col-span-1'>
        {posts.map((post) => <PostCard post={post.node} key={post.title}/>)}
      </div>
      <div className="lg: col-span-3 col-span-1">
        <div className="lg:sticky relative top-8">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }

}