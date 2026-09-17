import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders available booking times", () => {
  render(<App />);

  expect(screen.getByText("17:00")).toBeInTheDocument();
  expect(screen.getByText("18:00")).toBeInTheDocument();
  expect(screen.getByText("19:00")).toBeInTheDocument();
  expect(screen.getByText("20:00")).toBeInTheDocument();
  expect(screen.getByText("21:00")).toBeInTheDocument();
  expect(screen.getByText("22:00")).toBeInTheDocument();
});