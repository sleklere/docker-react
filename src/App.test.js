import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders edited link", () => {
  render(<App />);
  const linkElement = screen.getByText(/edited/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders edited link", () => {
  render(<App />);
  const linkElement = screen.getByText(/edited/i);
  expect(linkElement).toBeInTheDocument();
});
