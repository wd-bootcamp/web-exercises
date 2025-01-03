import InfoBox from "../components/InfoBox/InfoBox";
import Navigation from "../components/Navigation/Navigation";
import CounterList from "../components/CounterList/CounterList";
import Link from "../components/Link/Link";

export default function CountersPage({ animals, handleAdd, handleSubtract }) {
  return (
    <>
      <Link href="/">← Back</Link>

      <CounterList
        animals={animals}
        handleAdd={handleAdd}
        handleSubtract={handleSubtract}
      />

      <InfoBox />

      <Navigation />
    </>
  );
}
