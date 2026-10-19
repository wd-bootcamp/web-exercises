import { useState } from "react";
import Character from "./components/Character";
import Layout from "./components/Layout";
import "./styles.css";

export default function App() {
  const [id, setId] = useState(1);

  return (
    <Layout>
      <h1>React Data Fetching: Star Wars</h1>
      <ul className="characters">
        <li>
          <button type="button" onClick={() => setId(1)}>
            Luke Skywalker
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setId(2)}>
            C-3PO
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setId(3)}>
            R2-D2
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setId(4)}>
            Darth Vader
          </button>
        </li>
      </ul>
      <Character id={id} />
    </Layout>
  );
}
