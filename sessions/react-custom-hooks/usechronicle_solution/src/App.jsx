import React from "react";
import "./styles.css";
import useChronicle from "./hooks/useChronicle";

export default function App() {
  const [firstName, setFirstName, revertFirstName] = useChronicle("");
  const [lastName, setLastName, revertLastName] = useChronicle("");
  const [phoneNumber, setPhoneNumber, revertPhoneNumber] = useChronicle("");

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
          <button type="button" onClick={revertFirstName}>
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
          <button type="button" onClick={revertLastName}>
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
          <button type="button" onClick={revertPhoneNumber}>
            undo
          </button>
        </div>
      </label>
      <button type="button">Submit</button>
    </form>
  );
}
