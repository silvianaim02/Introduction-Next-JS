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

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="mb-10">
        <h2 className="text-xl underline">dynamic route with simple</h2>
        <div>
          {datas?.map((data, index) => (
            <Link href={`dynamicroutes/withssr/${data.id}`}>
              <p>{data.id}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-xl underline">
          dynamic route with catch all route
        </h2>
        <Link href={`dynamicroutes/catch-all-segments/shop/a/b/c/d/e`}>
          pergi ke dynamicroutes/catch-all-segments/shop/a/b/c/d/e
        </Link>
      </div>
      <div className="mb-10">
        <h2 className="text-xl underline">
          dynamic route with [optional] catch all route
        </h2>
        <Link href={`dynamicroutes/optional-catch-all-segments/shop`}>
          pergi ke dynamicroutes/optional-catch-all-segments/shop
        </Link>
      </div>
      <div className="mb-10">
        <h2 className="text-xl underline">article with generateStaticParams</h2>
        <div>
          {articles?.map((item, index) => (
            <Link href={`articles/${item.id}`}>
              <p>{item.id}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-xl underline">Loading</h2>
        <div>
          <Link href={`/routing/loading`}>Klik loading</Link>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-xl underline">Error handling</h2>
        <div>
          <Link href={`/routing/error`}>Klik error</Link>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-xl underline">Parallel Routes</h2>
        <div>
          <Link href={`/routing/parallel-routes`}>Klik Parallel Routes</Link>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-xl underline">Parallel Routes Modals</h2>
        <div>
          <Link href={`/routing/parallel-routes-modal/login`}>
            Klik Parallel Routes Modal
          </Link>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-xl underline">
          Parallel Routes Conditional (auth case)
        </h2>
        <div>
          <Link href={`/routing/parallel-routes-conditional`}>
            Klik Parallel Routes Conditional
          </Link>
        </div>
      </div>
    </main>
  );
}
