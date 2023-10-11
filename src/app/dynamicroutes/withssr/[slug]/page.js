import { datas } from '@/helper/data';
import Link from 'next/link';

export default function Page({ params }) {
  // this log will show in server log, not browser because using SSR
  console.log('params : ', params.slug);
  const detailData = datas.find((item) => item.id === params.slug);
  console.log('detail data : ', detailData);
  return (
    <>
      {' '}
      <div>My Post: {params.slug}</div>
      <p>{detailData.body}</p>
      <Link href={`/`}>
        <p className="mt-10">back to home</p>
      </Link>
    </>
  );
}
