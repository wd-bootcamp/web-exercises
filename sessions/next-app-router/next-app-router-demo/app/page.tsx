import Button from "./components/Button";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}
export default async function Home() {
  const data = await getData();
  return <div>{data.length} posts loaded <Button/></div>;
}
