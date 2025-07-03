import "./Cursor.css";

export default function Cursor() {
  const [x, y] = [200, 100];
  return (
    <div className="cursor">
      <div className="cursor__horizontal" style={{ top: `${y}px` }}></div>
      <div className="cursor__vertical" style={{ left: `${x}px` }}></div>
    </div>
  );
}
