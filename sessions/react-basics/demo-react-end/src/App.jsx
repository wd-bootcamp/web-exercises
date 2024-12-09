export default function App() {
  return (
    <main>
      <Button />
      <Button />
      <Button />
    </main>
  );
}

function Button() {
  const buttonText = "click with React";
  return (
    <button type="button" onClick={() => console.log("Hello React World")}>
      {buttonText}
    </button>
  );
}
