import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KeyBenefits from "./components/KeyBenefits";
import HowItWorks from "./components/HowItWorks";
import WaitingList from "./components/WaitingList";
import Testimonials from "./components/Testimonials";
import PartnerCTA from "./components/PartnerCTA";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <KeyBenefits />
      <HowItWorks />
      <WaitingList />
      <Testimonials />
      <PartnerCTA />
      <AppDownload />
      <Footer />
    </>
  );
}

export default App;
