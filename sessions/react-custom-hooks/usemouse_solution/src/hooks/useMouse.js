import { useEffect, useState } from "react";

export default function useMouse() {
  const [coordinates, setCoordinates] = useState([0, 0]);
  useEffect(() => {
    document.body.addEventListener("mousemove", (event) => {
      setCoordinates([event.clientX, event.clientY]);
    });
  }, []);

  return coordinates;
}
