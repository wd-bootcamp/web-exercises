import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Spotlight from ".";

const mockProps = {
  image: "https://example.com/spotlight.jpg",
  artist: "Claude Monet",
  isFavorite: false,
};

test("renders the image with correct alt text", () => {
  render(<Spotlight image={mockProps.image} artist={mockProps.artist} />);

  const image = screen.getByRole("img", {
    name: `spotlight: ${mockProps.artist}`,
  });
  expect(image).toHaveAttribute("alt", `spotlight: ${mockProps.artist}`);
});

test("renders the artist name correctly", () => {
  render(<Spotlight artist={mockProps.artist} image={mockProps.image} />);

  expect(
    screen.getByRole("heading", { level: 2, name: mockProps.artist })
  ).toBeInTheDocument();
});

test("calls onToggleFavorite when the favorite button is clicked", async () => {
  const user = userEvent.setup();
  const mockOnToggleFavorite = jest.fn();
  render(
    <Spotlight
      onToggleFavorite={mockOnToggleFavorite}
      isFavorite={false}
      image={mockProps.image}
    />
  );

  const favoriteButton = screen.getByRole("button");
  await user.click(favoriteButton);

  expect(mockOnToggleFavorite).toHaveBeenCalledTimes(1);
});
