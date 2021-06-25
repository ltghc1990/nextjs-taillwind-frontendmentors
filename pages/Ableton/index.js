import React from "react";
import Background from "../../components/ableton/ui/Background";
import AbletonNavbar from "../../components/ableton/headers/Navbar";
import MiniNav from "../../components/ableton/headers/MiniNav";
import Hero from "../../components/ableton/ui/Hero";

const AbletonHomePage = () => {
  return (
    <div>
      <Background style={{ backgroundColor: "#F3F3F3" }}>
        <AbletonNavbar />
        <MiniNav />
        <Hero />
      </Background>
    </div>
  );
};

export default AbletonHomePage;
