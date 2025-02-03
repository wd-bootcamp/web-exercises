import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPieces from ".";

const mockPieces = [
  {
    name: "Starry Night",
    imageSource: "https://example.com/starry-night.jpg",
    artist: "Vincent van Gogh",
    slug: "starry-night",
  },
  {
    name: "Mona Lisa",
    imageSource: "https://example.com/mona-lisa.jpg",
    artist: "Leonardo da Vinci",
    slug: "mona-lisa",
  },
];

const mockArtPiecesInfo = [
  { slug: "starry-night", isFavorite: true },
  { slug: "mona-lisa", isFavorite: false },
];

const mockOnToggleFavorite = jest.fn();

test("renders a list with the correct number of items", () => {
  render(<ArtPieces pieces={mockPieces} artPiecesInfo={mockArtPiecesInfo} />);

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(mockPieces.length);
});

test("calls onToggleFavorite with the correct slug when a favorite button is clicked", async () => {
  const user = userEvent.setup();
  render(
    <ArtPieces
      pieces={mockPieces}
      artPiecesInfo={mockArtPiecesInfo}
      onToggleFavorite={mockOnToggleFavorite}
    />
  );

  const favoriteButton = screen.getAllByRole("button")[0];
  await user.click(favoriteButton);

  expect(mockOnToggleFavorite).toHaveBeenCalledTimes(1);
  expect(mockOnToggleFavorite).toHaveBeenCalledWith("starry-night");
});
