import { render, screen } from "@testing-library/react";
import Navigation from ".";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("renders navigation links correctly", () => {
  useRouter.mockReturnValue({ pathname: "/" });
  render(<Navigation />);

  expect(screen.getByRole("link", { name: /spotlight/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /art pieces/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /favorites/i })).toBeInTheDocument();
});

test("highlights the correct active link based on the route", () => {
  useRouter.mockReturnValue({ pathname: "/art-pieces" });
  render(<Navigation />);

  const nonActiveLink = screen.getByRole("link", { name: /spotlight/i });
  expect(nonActiveLink).toHaveStyle("color: black");

  const activeLink = screen.getByRole("link", { name: /art pieces/i });
  expect(activeLink).toHaveStyle("color: var(--primary-color)");
});
