export default function App() {
  function handleClick(text) {
    console.log(`You clicked the following button: ${text}`);
  }

  return (
    <>
      <Button color="green" text="Submit" onClick={handleClick} />
      <Button color="red" text="Cancel" disabled onClick={handleClick} />
    </>
  );
}

function Button({ color, text, disabled, onClick }) {
  return (
    <button
      onClick={() => onClick(text)}
      type="button"
      style={{ backgroundColor: color }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
