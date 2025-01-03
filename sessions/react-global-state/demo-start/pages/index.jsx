import CounterStats from "../components/CounterStats/CounterStats";
import Link from "../components/Link/Link";

export default function HomePage() {
  return (
    <>
      <CounterStats />

      <Link href="/counters">To the counters →</Link>
    </>
  );
}
