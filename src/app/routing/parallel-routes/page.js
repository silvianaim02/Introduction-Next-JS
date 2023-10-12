import Link from "next/link";

export default function Page() {
  // anything you add here will be rendered as a children of RootLayout
  return (
    <div>
      <p>parallel routes</p>
      <Link href={`/`}>
        <p className="mt-10">back to home</p>
      </Link>
    </div>
  );
}
