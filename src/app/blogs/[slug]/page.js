export default function Page({ params }) {
  // this log will show in server log, not browser because using SSR
  console.log(params.slug);
  return <div>My Post: {params.slug}</div>;
}
