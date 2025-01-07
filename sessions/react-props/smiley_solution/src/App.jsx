export default function App() {
  return (
    <div>
      <Smiley isHappy />
      <Smiley />
    </div>
  );
}

function Smiley({ isHappy }) {
  return (
    <span aria-label={isHappy ? "A happy smiley" : "A sad smiley"}>
      {isHappy ? "😌" : "😭"}
    </span>
  );
}
