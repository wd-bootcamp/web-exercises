import { Fragment, useState } from "react";
import Winner from "../Winner";
import {
  CarButton,
  AllCarRoutes,
  DistanceHeadline,
  Distance,
  Track,
} from "./CarRace.styled";
import { initialCars, getRandomDistance } from "../../utils/utils";

// Solution: Updating with immer
import { useImmer } from "use-immer";

const finishLine = 200;

export default function CarRace() {
  // Solution: Updating with Spread Syntax
  // const [cars, setCars] = useState(initialCars);

  // Solution: Updating with immer
  const [cars, updateCars] = useImmer(initialCars);

  // Solution: Updating with Spread Syntax
  // function moveCar(clickedCar) {
  // 	const coveredDistance = getRandomDistance();
  // 	const updateCar = cars.map((car) => {
  // 		if (car.emoji === clickedCar.emoji) {
  // 			return {
  // 				emoji: car.emoji,
  // 				position: {
  // 					x: clickedCar.position.x + coveredDistance,
  // 					lastDistance: coveredDistance,
  // 				},
  // 			};
  // 		} else {
  // 			return car;
  // 		}
  // 	});
  // 	setCars(updateCar);
  // 	console.log('clickedCar', clickedCar);
  // 	console.log('coveredDistance', coveredDistance);
  // }

  // Solution: Updating with immer
  // function moveCar(clickedCar) {
  // 	const coveredDistance = getRandomDistance();

  // 	updateCars((draft) => {
  // 		const carToUpdate = draft.find(
  // 			(car) => car.emoji === clickedCar.emoji
  // 		);
  // 		if (carToUpdate) {
  // 			carToUpdate.position.x += coveredDistance;
  // 			carToUpdate.position.lastDistance = coveredDistance;
  // 		}
  // 	});

  // 	console.log('clickedCar', clickedCar);
  // 	console.log('coveredDistance', coveredDistance);
  // }

  // Solution: Updating with immer with the index.
  function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();

    updateCars((draft) => {
      const carToUpdateIndex = draft.findIndex(
        (car) => car.emoji === clickedCar.emoji
      );
      console.log("carToUpdateIndex", carToUpdateIndex);

      if (carToUpdateIndex !== -1) {
        draft[carToUpdateIndex].position.x += coveredDistance;
        draft[carToUpdateIndex].position.lastDistance = coveredDistance;
      }
    });

    console.log("clickedCar", clickedCar);
    console.log("coveredDistance", coveredDistance);
  }

  const winner = cars.find((car) => car.position.x >= finishLine);

  return (
    <>
      {winner ? (
        <Winner
          winner={winner}
          // onRestart={() => setCars(initialCars)}
          onRestart={() => updateCars(initialCars)}
        />
      ) : (
        <AllCarRoutes $finishLine={finishLine}>
          <DistanceHeadline>Last Distance</DistanceHeadline>
          {cars.map((car) => (
            <Fragment key={car.emoji}>
              <Track>
                <CarButton
                  onClick={() => moveCar(car)}
                  $positionX={car.position.x}
                  $lastDistance={car.position.lastDistance}
                  aria-label={`Move clicked car forward`}
                >
                  {car.emoji}
                </CarButton>
              </Track>
              <Distance>{car.position.lastDistance}</Distance>
            </Fragment>
          ))}
        </AllCarRoutes>
      )}
    </>
  );
}
