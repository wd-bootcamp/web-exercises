import React, { createContext, useState} from 'react';

export const AnimalContext = createContext();

export const AnimalProvider = ({ children }) => {
  const initialAnimals = [
    { id: 1, name: "Cats", count: 0 },
    { id: 2, name: "Dogs", count: 0 },
    { id: 3, name: "Sheep", count: 0 },
    { id: 4, name: "Dragons", count: 0 },
  ];

  const [animals, setAnimals] = useState(initialAnimals);

  const animalCounts = animals.map((animal) => animal.count);
  const countSum = animalCounts.reduce((a, b) => a + b);
  const countAverage = countSum / animals.length;
  const dragonCount = animals.find((animal) => animal.name === "Dragons").count;

  const handleAdd = (animalId) => {
    setAnimals(
      animals.map((animal) =>
        animal.id === animalId ? { ...animal, count: animal.count + 1 } : animal
      )
    );
  };

  const handleSubtract = (animalId) => {
    setAnimals(
      animals.map((animal) =>
        animal.id === animalId
          ? { ...animal, count: Math.max(0, animal.count - 1) }
          : animal
      )
    );
  };

  const value = {
    animals,
    countSum,
    countAverage,
    dragonCount,
    handleAdd,
    handleSubtract,
  };

  return (
    <AnimalContext.Provider value={value}>
      {children}
    </AnimalContext.Provider>
  );
};

export const useAnimalContext = () => {
  return React.useContext(AnimalContext);
}