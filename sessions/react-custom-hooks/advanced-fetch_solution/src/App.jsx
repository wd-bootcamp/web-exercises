import React, { useState } from "react";
import "./styles.css";
import useFetch from "./hooks/useFetch";

export default function App() {
  const [id, setId] = useState(0);
  const { data: joke, isLoading } = useFetch(
    `https://example-apis.vercel.app/api/bad-jokes/${id}`
  );

  if (!joke) {
    return null;
  }

  return (
    <>
      <h1>{isLoading ? "⏳" : joke.joke}</h1>
      <div className="button-group">
        <button type="button" onClick={() => setId(joke.prevId)}>
          Previous Joke
        </button>
        <button type="button" onClick={() => setId(joke.nextId)}>
          Next Joke
        </button>
      </div>
    </>
  );
}
