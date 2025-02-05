import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPiecePreview from ".";

const mockProps = {
  title: "Starry Night",
  image: "https://example.com/starry-night.jpg",
  artist: "Vincent van Gogh",
  slug: "starry-night",
  isFavorite: false,
  onToggleFavorite: jest.fn(),
};

test("renders the image with correct alt attribute", () => {
  render(<ArtPiecePreview {...mockProps} />);

  const image = screen.getByRole("img", {
    name: `${mockProps.artist}: ${mockProps.title}`,
  });
  expect(image).toHaveAttribute(
    "alt",
    `${mockProps.artist}: ${mockProps.title}`
  );
});

test("displays the artist and title correctly", () => {
  render(<ArtPiecePreview {...mockProps} />);

  const caption = screen.getByText(`${mockProps.artist}: ${mockProps.title}`);
  expect(caption).toBeInTheDocument();
});

test("renders a link to the correct art piece page", () => {
  render(<ArtPiecePreview {...mockProps} />);

  const link = screen.getByRole("link", { name: /more info/i });
  expect(link).toHaveAttribute("href", `art-pieces/${mockProps.slug}`);
});

test("calls onToggleFavorite when the favorite button is clicked", async () => {
  const user = userEvent.setup();
  render(<ArtPiecePreview {...mockProps} />);

  const favoriteButton = screen.getByRole("button");
  await user.click(favoriteButton);

  expect(mockProps.onToggleFavorite).toHaveBeenCalledTimes(1);
});
