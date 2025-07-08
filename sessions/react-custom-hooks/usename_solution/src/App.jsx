import useName from "./hooks/useName";
import "./styles.css";

export default function App() {
  const [name, setFirstName, setLastName] = useName();
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="first name"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
      </form>
      <h2>The full name:</h2>
      <output>{name}</output>
    </>
  );
}
