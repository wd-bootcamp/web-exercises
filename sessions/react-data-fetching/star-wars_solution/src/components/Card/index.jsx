import "./Card.css";

export default function Card({ id, name, height, eyeColor, birthYear }) {
  return (
    <article className="card">
      <h2>Name: {name}</h2>
      <dl className="card__list">
        <dt>ID:</dt>
        <dd>{id}</dd>
        <dt>Height:</dt>
        <dd>{height}</dd>
        <dt>Eye Color:</dt>
        <dd>{eyeColor}</dd>
        <dt>Birth Year:</dt>
        <dd>{birthYear}</dd>
      </dl>
    </article>
  );
}
