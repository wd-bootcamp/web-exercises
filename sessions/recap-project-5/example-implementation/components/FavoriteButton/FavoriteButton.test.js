import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavoriteButton from ".";

test("renders the button with correct aria-label when not favorite", () => {
  render(<FavoriteButton isFavorite={false} />);

  const button = screen.getByRole("button", { name: /like/i });
  expect(button).toBeInTheDocument();
});

test("renders the button with correct aria-label when favorite", () => {
  render(<FavoriteButton isFavorite={true} />);

  const button = screen.getByRole("button", { name: /unlike/i });
  expect(button).toBeInTheDocument();
});

test("calls onToggleFavorite when clicked", async () => {
  const user = userEvent.setup();
  const mockOnToggleFavorite = jest.fn();
  render(
    <FavoriteButton
      isFavorite={false}
      onToggleFavorite={mockOnToggleFavorite}
    />
  );

  const button = screen.getByRole("button", { name: /like/i });
  await user.click(button);

  expect(mockOnToggleFavorite).toHaveBeenCalledTimes(1);
});
