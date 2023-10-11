import Link from 'next/link';

export default function Page({ params }) {
  return (
    <>
      <p>
        bedanya dengan yang tanpa optional adalah valid ketika tidak ada segment
        routenya, contohnya :
      </p>
      <p>
        <span className="italic font-bold">
          dynamicroutes/optional-catch-all-segments/shop{' '}
        </span>
        <span className="text-red-500">bukan</span>{' '}
        dynamicroutes/optional-catch-all-segments/shop/segment/segment
      </p>
      <p>
        cara buat foldernya contohnya seperti ini{' '}
        <span className="text-blue-400">
          src\app\dynamicroutes\optional-catch-all-segments\shop\[[...slug]]
        </span>
      </p>
      <p>
        bentuk dari optional sama saja dengan catch all segment hanya saja bisa
        jika tidak ada segment dynamic, bentuknya kosong seperti ini
      </p>
      <p className='text-yellow-500'>{JSON.stringify(params)}</p>
      <Link href={`/`}>
        <p className="mt-10">back to home</p>
      </Link>
    </>
  );
}
