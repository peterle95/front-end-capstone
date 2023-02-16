import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Header from './components/Header';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/BookingConfirmed';
import Main from './components/Main';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/bookingpage" element={<BookingPage />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
    </>
  );
}

export default App;
