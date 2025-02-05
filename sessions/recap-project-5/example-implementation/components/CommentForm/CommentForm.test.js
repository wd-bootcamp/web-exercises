import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentForm from ".";

const mockAddComment = jest.fn();

test("renders the comment input and submit button", () => {
  render(<CommentForm addComment={mockAddComment} />);

  const textarea = screen.getByRole("textbox", { name: /add comment:/i });
  const button = screen.getByRole("button", { name: /send/i });

  expect(textarea).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("calls addComment with the correct data when submitted", async () => {
  const user = userEvent.setup();
  render(<CommentForm addComment={mockAddComment} />);

  const textarea = screen.getByRole("textbox", { name: /add comment:/i });
  const button = screen.getByRole("button", { name: /send/i });

  const testComment = "This is a test comment";
  await user.type(textarea, testComment);
  await user.click(button);

  expect(mockAddComment).toHaveBeenCalledTimes(1);
  expect(mockAddComment).toHaveBeenCalledWith(
    expect.objectContaining({
      comment: testComment,
      date: expect.any(String),
    })
  );
});

test("clears the input field after submitting", async () => {
  const user = userEvent.setup();
  render(<CommentForm addComment={mockAddComment} />);

  const textarea = screen.getByRole("textbox", { name: /add comment:/i });
  const button = screen.getByRole("button", { name: /send/i });

  const testComment = "Temporary comment";
  await user.type(textarea, testComment);
  expect(textarea).toHaveValue(testComment);

  await user.click(button);
  expect(textarea).toHaveValue("");
});
