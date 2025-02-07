import { render, screen } from "@testing-library/react";
import Comments from ".";

const mockComments = [
  { comment: "Amazing artwork!", date: "2024-02-01 10:00" },
  { comment: "Love the colors.", date: "2024-02-02 12:30" },
];

test("renders the title correctly", () => {
  render(<Comments comments={mockComments} />);

  const title = screen.getByRole("heading", { name: /comments/i });
  expect(title).toBeInTheDocument();
});

test("renders all comments with correct text and date", () => {
  render(<Comments comments={mockComments} />);

  mockComments.forEach(({ comment, date }) => {
    expect(screen.getByText(comment)).toBeInTheDocument();
    expect(screen.getByText(`(${date})`)).toBeInTheDocument();
  });
});

test("renders no comments when the list is empty", () => {
  render(<Comments comments={[]} />);

  expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
});
