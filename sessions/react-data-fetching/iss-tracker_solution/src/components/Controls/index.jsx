import "./Controls.css";

export default function Controls({ longitude, latitude, onRefresh }) {
  return (
    <div className="controls">
      <output className="controls__display">Lat: {latitude.toFixed(5)}</output>
      <output className="controls__display">
        Long: {longitude.toFixed(5)}
      </output>
      <button
        className="controls__button"
        type="button"
        onClick={() => onRefresh()}
      >
        Refresh
      </button>
    </div>
  );
}
