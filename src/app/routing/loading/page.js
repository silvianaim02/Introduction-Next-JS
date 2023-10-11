import Image from 'next/image';
import Link from 'next/link';
import { datas } from '@/helper/data';
import { Suspense } from 'react';
import Loading from './loading';

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Suspense fallback={<Loading />}>
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
      </Suspense>
      <Link href={`/`}>
        <p className="mt-10">back to home</p>
      </Link>
    </main>
  );
}
