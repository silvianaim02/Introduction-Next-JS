export default function layout({ children }) {
  return (
    <div className="layout">
      <p className="bg-blue-200">layout about</p>
      {children}
      <p className="bg-blue-200">layout about</p>
    </div>
  );
}
