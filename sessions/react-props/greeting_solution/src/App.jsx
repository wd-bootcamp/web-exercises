export default function App() {
  return <Greeting name="Bob" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name === "Jessica" ? "Coach" : name}!</h1>;
}
