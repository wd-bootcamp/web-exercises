import { useState } from "react";

export default function useName() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const fullName = `${first} ${last}`;

  return [fullName, setFirst, setLast];
}
