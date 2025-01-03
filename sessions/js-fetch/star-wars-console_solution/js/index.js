console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  console.log("data: ", data);
  console.log("data.results: ", data.results);

  const firstPerson = data.results[0];
  console.log("firstPerson: ", firstPerson);
  console.log("firstPerson.mass: ", firstPerson.mass);
  console.log("firstPerson.skin_color: ", firstPerson.skin_color);

  const r2d2 = data.results.find((person) => person.name === "R2-D2");

  console.log("R2-D2s eye color:", r2d2.eye_color);
}

fetchData();
