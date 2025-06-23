import { StyledForm, StyledInputContainer } from "./Form.styled";
// Solution.
// import { useState } from 'react';

//Solution Bonus: useImmer
import { useImmer } from "use-immer";

export default function Form() {
  // Solution.
  // const [mountain, setMountain] = useState({
  // 	name: 'Mount Everest',
  // 	values: {
  // 		altitude: 8848,
  // 		mountainRange: 'Himalayas',
  // 	},
  // });

  //Solution Bonus: useImmer
  const [mountain, updateMountain] = useImmer({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  // Solution.
  // function handleNameChange(event) {
  // 	console.log('event.mountainRange.value', event.target.value);

  // 	setMountain({ ...mountain, name: event.target.value });
  // }

  // function handleAltitudeChange(event) {
  // 	setMountain({
  // 		...mountain,
  // 		values: {
  // 			altitude: event.target.value,
  // 			mountainRange: mountain.values.mountainRange,
  // 		},
  // 	});
  // }

  // function handleMountainRangeChange(event) {
  // 	setMountain({
  // 		...mountain,
  // 		values: {
  // 			altitude: mountain.values.altitude,
  // 			mountainRange: event.target.value,
  // 		},
  // 	});
  // }

  //Solution Bonus: useImmer
  function handleNameChange(event) {
    updateMountain((draft) => {
      draft.name = event.target.value;
    });
  }

  function handleAltitudeChange(event) {
    updateMountain((draft) => {
      draft.values.altitude = event.target.value;
    });
  }

  function handleMountainRangeChange(event) {
    updateMountain((draft) => {
      draft.values.mountainRange = event.target.value;
    });
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
