import Image from 'next/image';
import Link from 'next/link';
import { datas } from '@/helper/data';

async function getData() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  );

  return posts
    .map((post) => ({
      id: post.id.toString(),
    }))
    .slice(0, 5);
}

export default async function Home() {
  const articles = await getData();
  console.log(articles);
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="mb-10">
        <h2>dynamic route</h2>
        <div>
          {datas?.map((data, index) => (
            <Link href={`dynamicroutes/withssr/${data.id}`}>
              <p>{data.id}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <h2>article</h2>
        <div>
          {articles?.map((item, index) => (
            <Link href={`articles/${item.id}`}>
              <p>{item.id}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
