import React, { useReducer } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./Api";

export function updateTimes(date) {
  return fetchAPI(date);
}
function BookingPage() {

  const defaultDate = fetchAPI(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes, defaultDate);

  return (
    <>
      <Nav />
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
      <Footer />
    </>
  );
}

export default BookingPage;
