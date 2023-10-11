// you can try with /shop/a/b/c
import Link from "next/link";

export default function Page({ params }) {
  console.log(params);
  return (
    <>
      <p>contoh : dynamicroutes/catch-all-segments/shop/a/b</p>
      <p>
        bentuk dari catch all segment mendapatkan slug berisi array seperti ini,
        nantinya isi array tersebut bisa kamu modifikasi :
      </p>
      <p>{JSON.stringify(params)}</p>
      <Link href={`/`}>
        <p className="mt-10">back to home</p>
      </Link>
    </>
  );
}
