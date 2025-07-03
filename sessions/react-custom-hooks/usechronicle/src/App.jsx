import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <form>
      <label>
        First Name
        <div>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <button type="button" onClick={() => {}}>
            undo
          </button>
        </div>
      </label>
      <label>
        Last Name
        <div>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <button type="button" onClick={() => {}}>
            undo
          </button>
        </div>
      </label>
      <label>
        Phone Number
        <div>
          <input
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <button type="button" onClick={() => {}}>
            undo
          </button>
        </div>
      </label>
      <button type="button">Submit</button>
    </form>
  );
}
