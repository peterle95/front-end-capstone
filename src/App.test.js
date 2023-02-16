import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header";
import About from "./components/About";
import BookingPage, { availableTimes } from "./components/BookingPage";
import BookingForm from "./components/BookingForm";
import { BrowserRouter } from "react-router-dom";

// TEST 1
test("renders the booking form heading", () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );
  const theText = screen.getByText("Choose Date");
  expect(theText).toBeInTheDocument();
});

// TEST 2
describe("renders the correct initializeTimes", () => {
  it("something", () => {
    const times = availableTimes;
    expect(times).toBeInstanceOf([Array]);
    expect(times.length).toBeGreaterThan(0);
  });
});

// TEST 3
test("updateTimes should return updated times based on selected date", () => {
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const selectedDate = new Date("2023-06-01");
  const action = { type: "update", date: selectedDate };
  const result = updateTimes(state, action);
  expect(result).not.toEqual(state);
});

it("renders a guests input", () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );
  const guestsInput = screen.getByTestId("guests");

  expect(guestsInput).toBeInTheDocument();
  expect(guestsInput.type).toBe("number");
  expect(guestsInput.value).toBe("1");
});

test("submits the form correctly", () => {
  const onSubmit = jest.fn();
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const dispatch = jest.fn();
  render(
    <BrowserRouter><BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      onSubmit={onSubmit}
    /></BrowserRouter>
  );

  const resDate = screen.getByTestId(/date/);
  fireEvent.change(resDate, {
    target: { value: "2023-06-01" },
  });
  const resTime = screen.getByTestId(/time/);
  fireEvent.change(resTime, {
    target: { value: "17:00" },
  });
  const noGuests = screen.getByTestId(/guests/);
  fireEvent.change(noGuests, {
    target: { value: 5 },
  });
  const occasion = screen.getByTestId(/occasion/);
  fireEvent.change(occasion, {
    target: { value: "Anniversary" },
  });
  const submitButton = screen.getByText("Make Your reservation");
  fireEvent.click(submitButton);
  expect(onSubmit).toHaveBeenCalledWith({
    date: "2023-06-01",
    time: "17:00",
    guests: "5",
    occasion: "Anniversary",
  });
});

//--------------- FORM -------------------

it("renders a date input", () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );
  const dateInput = screen.getByTestId("date");

  expect(dateInput).toBeInTheDocument();
  expect(dateInput.type).toBe("date");
  expect(dateInput.value).toBe(new Date().toISOString().split("T")[0]);
});

it("displays error message for date in the past", () => {
  const dispatch = jest.fn();
  render(
    <BrowserRouter>
      <BookingForm dispatch={dispatch} />
    </BrowserRouter>
  );

  const dateInput = screen.getByTestId("date");

  fireEvent.change(dateInput, { target: { value: "2000-01-01" } });
  fireEvent.blur(dateInput);

  const errorMessage = screen.getByText("Date cannot be in the past");
  expect(errorMessage).toBeInTheDocument();
});

it("renders a time select", () => {
  const availableTimes = ["12:00", "13:00", "14:00"];
  render(
    <BrowserRouter>
      <BookingForm availableTimes={availableTimes} />
    </BrowserRouter>
  );
  const timeSelect = screen.getByTestId("time");

  expect(timeSelect).toBeInTheDocument();
  expect(timeSelect.options).toHaveLength(3);
  expect(timeSelect.options[0].value).toBe("12:00");
});

it("renders a guests input", () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );
  const guestsInput = screen.getByTestId("guests");

  expect(guestsInput).toBeInTheDocument();
  expect(guestsInput.type).toBe("number");
  expect(guestsInput.value).toBe("1");
});

it("displays error message for guests outside range", () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );
  const guestsInput = screen.getByTestId("guests");

  fireEvent.change(guestsInput, { target: { value: "0" } });
  fireEvent.blur(guestsInput);

  const errorMessage = screen.getByText(
    "Number of guests must be between 1 and 10"
  );
  expect(errorMessage).toBeInTheDocument();
});

it("renders an occasion select", () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );
  const occasionSelect = screen.getByTestId("occasion");

  expect(occasionSelect).toBeInTheDocument();
  expect(occasionSelect.options).toHaveLength(5);
  expect(occasionSelect.options[0].value).toBe("Select");
});

//--------------- FORM SUBMISSION -------------------

describe("BookingForm", () => {
  it("should submit the form with the correct data and dispatch an action", () => {
    const dispatch = jest.fn();
    const onSubmit = jest.fn();
    const availableTimes = ["12:00 PM", "1:00 PM"];

    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          onSubmit={onSubmit}
        />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByTestId("date"), {
      target: { value: "2023-03-07" },
    });
    fireEvent.change(screen.getByTestId("time"), {
      target: { value: "12:00 PM" },
    });
    fireEvent.change(screen.getByTestId("guests"), { target: { value: "2" } });
    fireEvent.change(screen.getByTestId("occasion"), {
      target: { value: "Anniversary" },
    });

    fireEvent.click(screen.getByText("Make Your reservation"));

    expect(onSubmit).toHaveBeenCalledWith({
      date: "2023-03-07",
      time: "12:00 PM",
      guests: "3",
      occasion: "Get Together",
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "update",
      date: "2023-03-07",
    });
  });
});
