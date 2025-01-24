import { useAnimalContext } from "../contexts/AnimalContext";
export default function Footer() {
  const { dragonCount } = useAnimalContext();
  return (
    <span>
      Counting since 1899 — Currently there are <strong>{dragonCount}</strong>{" "}
      dragons.
    </span>
  );
}
