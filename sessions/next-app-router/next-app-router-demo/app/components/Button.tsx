// app/components/Button.tsx
"use client"; // Must be explicitly defined

import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
