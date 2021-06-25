import React from "react";
import AbletonNavbar from "../../components/ableton/headers/Navbar";
import MiniNav from "../../components/ableton/headers/MiniNav";
import Hero from "../../components/ableton/ui/Hero";

const AbletonHomePage = () => {
  return (
    <div>
      <AbletonNavbar />
      <MiniNav />
      <Hero />
    </div>
  );
};

export default AbletonHomePage;
