import React from 'react';
import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";

function Home() {
  return (
    <>
        <Nav />
        <Header />
        <Main />
        <Testimonials />
        <About />
        <Footer />
    </>
  );
}

export default Home;
