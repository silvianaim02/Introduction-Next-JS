import Link from 'next/link';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  );

  return posts
    .map((post) => ({
      id: post.id.toString(),
    }))
    .slice(0, 5);
}

async function getDetailData(id) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

  return {
    id: post.id.toString(),
    title: post.title, // Access title directly from the post object
    body: post.body, // Access body directly from the post object
  };
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }) {
  const { id } = params;
  console.log(id);
  const detailArticle = await getDetailData(id);
  return (
    <>
      {' '}
      <div>My Article: {id}</div>
      <h1>{detailArticle.title}</h1>
      <p>{detailArticle.body}</p>
      <Link href={`/`}>
        <p className="mt-10">back to home</p>
      </Link>
    </>
  );
}
