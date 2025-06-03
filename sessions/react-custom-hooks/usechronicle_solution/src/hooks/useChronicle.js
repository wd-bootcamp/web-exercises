import { useState } from "react";

export default function useChronicle(initialValue) {
  const [timeline, setTimeline] = useState([initialValue]);

  function setState(next) {
    setTimeline([...timeline, next]);
  }

  function revertState() {
    if (timeline.length <= 1) {
      return;
    }

    setTimeline([...timeline.slice(0, -1)]);
  }

  console.log(timeline);

  const currentValue = timeline.at(-1);
  console.log(currentValue);

  return [currentValue, setState, revertState];
}
