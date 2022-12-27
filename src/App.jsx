import React from "react";
import Header from "./components/header/Header";
import About from "./components/main/about/About";
import PLan from "./components/main/plan/Plan";
import Subscribe from "./components/main/subscribe/Subscribe";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <Header />
      <About />
      <Subscribe />
      <PLan />
      <Footer />
    </>
  );
}

export default App;
