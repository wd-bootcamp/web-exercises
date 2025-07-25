import Show from "../components/Show";

const initialSeasons = [
  {
    number: 1,
    episodes: [
      {
        number: 1,
        title: "The Bad Beginning: Part One",
        hasSeen: true,
      },
      {
        number: 2,
        title: "The Bad Beginning: Part Two",
        hasSeen: true,
      },
      {
        number: 3,
        title: "The Reptile Room: Part One",
        hasSeen: true,
      },
      {
        number: 4,
        title: "The Reptile Room: Part Two",
        hasSeen: false,
      },
      {
        number: 5,
        title: "The Wide Window: Part One",
        hasSeen: false,
      },
      {
        number: 6,
        title: "The Wide Window: Part Two",
        hasSeen: false,
      },
      {
        number: 7,
        title: "The Miserable Mill: Part One",
        hasSeen: false,
      },
      {
        number: 8,
        title: "The Miserable Mill: Part Two",
        hasSeen: false,
      },
    ],
  },
  {
    number: 2,
    episodes: [
      {
        number: 1,
        title: "The Austere Academy: Part One",
        hasSeen: false,
      },
      {
        number: 2,
        title: "The Austere Academy: Part Two",
        hasSeen: false,
      },
      {
        number: 3,
        title: "The Ersatz Elevator: Part One",
        hasSeen: false,
      },
      {
        number: 4,
        title: "The Ersatz Elevator: Part Two",
        hasSeen: false,
      },
      {
        number: 5,
        title: "The Vile Village: Part One",
        hasSeen: false,
      },
      {
        number: 6,
        title: "The Vile Village: Part Two",
        hasSeen: false,
      },
      {
        number: 7,
        title: "The Hostile Hospital: Part One",
        hasSeen: false,
      },
      {
        number: 8,
        title: "The Hostile Hospital: Part Two",
        hasSeen: false,
      },
      {
        number: 9,
        title: "Carnivorous Carnival: Part One",
        hasSeen: false,
      },
      {
        number: 10,
        title: "Carnivorous Carnival: Part Two",
        hasSeen: false,
      },
    ],
  },
  {
    number: 3,
    episodes: [
      {
        number: 1,
        title: "Slippery Slope: Part One",
        hasSeen: false,
      },
      {
        number: 2,
        title: "Slippery Slope: Part Two",
        hasSeen: false,
      },
      {
        number: 3,
        title: "Grim Grotto: Part One",
        hasSeen: false,
      },
      {
        number: 4,
        title: "Grim Grotto: Part Two",
        hasSeen: false,
      },
      {
        number: 5,
        title: "Penultimate Peril: Part One",
        hasSeen: false,
      },
      {
        number: 6,
        title: "Penultimate Peril: Part Two",
        hasSeen: false,
      },
      {
        number: 7,
        title: "The End",
        hasSeen: false,
      },
    ],
  },
];

export default function HomePage() {
  return <Show initialSeasons={initialSeasons} />;
}
