import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { submitAPI } from "./Api";
import styles from "../.module.css";

function BookingForm(props) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('props.availableTimes.map((times) => <option>{times}</option>) || []');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const validateName = () => {
  if(name.length<3){
    setErrorMessage("* Name should contain more than 2 letters");
  }
}
  const validateContact = () => {
  if(contact.length<10){
    setErrorMessage("* Contact number should be of 10 digits");
  }
}

  const handleOnClick = () => {
        const formData = [date, time, guests, occasion, name, contact, email];
    const submitted = submitAPI(formData);
    if(submitted){
      navigate("/confirmed", {state: {id: 1, name:name,email:email, contact:contact, date:date}});
    }
  }

  const handleFormData = (e) => {
    e.preventDefault();
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("");
    setName("");
    setContact("");
    setEmail("");
    getIsFormValid();
  };

  const getIsFormValid = () => {
    return date && time && guests && occasion && name && contact && email;
  };

  function handleDateChange(e) {
    setDate(e.target.value);

    var str = e.target.value;
    const date = new Date(str);
    props.updateTimes(date);

    setTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  const validateGuests = () => {
    if (!guests || guests < 1 || guests > 10) {
      setErrorMessage("* Number of guests must be between 1 and 10");
  }};

  return (
    <>
      <form onSubmit={handleFormData}>
        <section className={styles.BookingForm}>
          <label htmlFor="date">
            Choose Date<sup>*</sup>
          </label>
          <input
            name="date"
            type="date"
            placeholder="Choose the date"
            required
            data-testid="date"
            value={date}
            onChange={handleDateChange}
          />
          <label htmlFor="time">
            Choose Time<sup>*</sup>
          </label>
          <select
            name="time"
            required
            data-testid="time"
            >
            {time}
          </select>
          <label htmlFor="guests">
            Number of Guests<sup>*</sup>
          </label>
          <input
            name="guests"
            type="number"
            placeholder="1"
            required
            min="1"
            max="10"
            data-testid="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            onBlur={validateGuests}
          />
          <label htmlFor="occasion">
            Occasion<sup>*</sup>
          </label>
          <select
            name="occasion"
            required
            data-testid="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="Select">Select</option>
            <option value="Birthday">Birthday</option>
            <option value="Engagement">Engagement</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Get Together">Get Together</option>
          </select>

          <label htmlFor="name">
            Full Name<sup>*</sup>
          </label>
          <input
            name="name"
            type="text"
            minLength="3"
            placeholder="Enter your Full name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
          />

          <label htmlFor="contact">
            Contact No.<sup>*</sup>
          </label>
          <input
            name="contact"
            type="number"
            placeholder="Enter your contact number"
            required
            min="10"
            max="11"
            value={contact}
            onBlur={validateContact}
            onChange={(e) => setContact(e.target.value)}
          />

          <label htmlFor="email">
            Email ID<sup>*</sup>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email ID"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className={styles.BookingError} onClick={handleOnClick}>{errorMessage}</h3>

          <input
            className={styles.BookingFormButton}
            disabled={!getIsFormValid()}
            type="submit"
            value="Make Your reservation"
            aria-label="On Click"
            onClick={handleOnClick}
          />
        </section>
      </form>
    </>
  );
}

export default BookingForm;
