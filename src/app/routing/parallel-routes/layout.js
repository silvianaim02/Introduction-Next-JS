export default function Layout({
  children,
  folder1,
  folder2, // will be a page or nested layout
}) {
  return (
    <section>
      <div className="bg-pink-200">{folder1}</div>
      <div className="bg-purple-200">{folder2}</div>
      {children}
    </section>
  );
}
