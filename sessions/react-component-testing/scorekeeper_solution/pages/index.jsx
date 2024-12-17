import GameForm from "../components/GameForm/GameForm";
import Navigation from "../components/Navigation/Navigation";

export default function App({ onCreateGame, players }) {
  return (
    <>
      <GameForm onCreateGame={onCreateGame} />
      <Navigation players={players} />
    </>
  );
}
