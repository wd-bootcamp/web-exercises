import Character from "./components/Character";
import Layout from "./components/Layout";
import "./styles.css";

export default function App() {
  return (
    <Layout>
      <h1>React Data Fetching: Star Wars</h1>
      <ul className="characters">
        <li>
          <button type="button">Luke Skywalker</button>
        </li>
        <li>
          <button type="button">C-3PO</button>
        </li>
        <li>
          <button type="button">R2-D2</button>
        </li>
        <li>
          <button type="button">Darth Vader</button>
        </li>
      </ul>
      <Character />
    </Layout>
  );
}
