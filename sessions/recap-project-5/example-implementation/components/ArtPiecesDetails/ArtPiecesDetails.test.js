import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPiecesDetails from ".";

const mockProps = {
  image: "https://example.com/art.jpg",
  title: "The Persistence of Memory",
  artist: "Salvador Dalí",
  isFavorite: false,
  colors: ["#FFD700", "#8B0000"],
};

test("renders the title and artist correctly", () => {
  render(
    <ArtPiecesDetails
      image={mockProps.image}
      colors={mockProps.colors}
      title={mockProps.title}
      artist={mockProps.artist}
    />
  );

  expect(
    screen.getByRole("heading", { level: 2, name: mockProps.title })
  ).toBeInTheDocument();
  expect(screen.getByText(mockProps.artist)).toBeInTheDocument();
});

test("renders the image with correct alt text", () => {
  render(
    <ArtPiecesDetails
      image={mockProps.image}
      colors={mockProps.colors}
      title={mockProps.title}
      artist={mockProps.artist}
    />
  );

  const image = screen.getByRole("img", {
    name: `${mockProps.artist}: ${mockProps.title}`,
  });
  expect(image).toHaveAttribute(
    "alt",
    `${mockProps.artist}: ${mockProps.title}`
  );
});

test("renders the correct colors", () => {
  render(
    <ArtPiecesDetails colors={mockProps.colors} image={mockProps.image} />
  );

  mockProps.colors.forEach((color) => {
    expect(screen.getByLabelText(color)).toBeInTheDocument();
  });
});

test("calls onBack when the back button is clicked", async () => {
  const user = userEvent.setup();
  const mockOnBack = jest.fn();
  render(
    <ArtPiecesDetails
      image={mockProps.image}
      colors={mockProps.colors}
      onBack={mockOnBack}
    />
  );

  const backButton = screen.getByRole("button", { name: /navigate back/i });
  await user.click(backButton);

  expect(mockOnBack).toHaveBeenCalledTimes(1);
});

test("calls onToggleFavorite when the favorite button is clicked", async () => {
  const user = userEvent.setup();
  const mockOnToggleFavorite = jest.fn();
  render(
    <ArtPiecesDetails
      image={mockProps.image}
      colors={mockProps.colors}
      onToggleFavorite={mockOnToggleFavorite}
    />
  );

  const favoriteButton = screen.getByRole("button", { name: /like/i });
  await user.click(favoriteButton);

  expect(mockOnToggleFavorite).toHaveBeenCalledTimes(1);
});
