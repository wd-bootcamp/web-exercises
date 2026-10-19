import Card from "../Card";

export default function Character() {
  const id = 1;

  return (
    <Card
      id={id}
      name={"Luke Skywalker"}
      height={172}
      eyeColor={"blue"}
      birthYear={"19BBY"}
    />
  );
}
