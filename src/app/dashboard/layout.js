export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <nav>layout dashboard</nav>
      {children}
    </section>
  );
}
