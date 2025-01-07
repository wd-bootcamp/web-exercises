export default function App() {
  return <Sum valueA={24} valueB={18} />;
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {valueA + valueB}
    </h1>
  );
}
