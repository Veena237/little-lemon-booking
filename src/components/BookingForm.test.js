import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const availableTimes = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const dispatch = jest.fn();

test("renders the booking form", () => {
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
    />
  );

  expect(screen.getByText("Reserve a Table")).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Full name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone number/i)).toBeInTheDocument();
});

test("displays available booking times", () => {
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
    />
  );

  expect(screen.getByText("17:00")).toBeInTheDocument();
  expect(screen.getByText("18:00")).toBeInTheDocument();
  expect(screen.getByText("19:00")).toBeInTheDocument();
  expect(screen.getByText("20:00")).toBeInTheDocument();
  expect(screen.getByText("21:00")).toBeInTheDocument();
  expect(screen.getByText("22:00")).toBeInTheDocument();
});

test("updates date and dispatches UPDATE_TIMES", () => {
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
    />
  );

  const dateInput = screen.getByLabelText(/Choose date/i);

  fireEvent.change(dateInput, {
    target: { value: "2026-09-22" },
  });

  expect(dateInput.value).toBe("2026-09-22");

  expect(dispatch).toHaveBeenCalledWith({
    type: "UPDATE_TIMES",
    date: "2026-09-22",
  });
});
test("submits the booking form and shows confirmation", () => {
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
    />
  );

  fireEvent.change(screen.getByLabelText(/Choose date/i), {
    target: { value: "2026-09-22" },
  });

  fireEvent.change(screen.getByLabelText(/Choose time/i), {
    target: { value: "18:00" },
  });

  fireEvent.change(screen.getByLabelText(/Full name/i), {
    target: { value: "Veena Yenigalla" },
  });

  fireEvent.change(screen.getByLabelText(/Email address/i), {
    target: { value: "veena@example.com" },
  });

  fireEvent.change(screen.getByLabelText(/Phone number/i), {
    target: { value: "9876543210" },
  });

  fireEvent.click(screen.getByRole("button", { name: /Reserve Table/i }));

  expect(
    screen.getByText(/Booking Confirmed!/i)).toBeInTheDocument();

  expect(screen.getByText(/Thank you/i)).toBeInTheDocument();
});