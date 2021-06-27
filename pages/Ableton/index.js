import React from "react";
import Background from "../../components/ableton/ui/Background";
import AbletonNavbar from "../../components/ableton/headers/Navbar";
import MiniNav from "../../components/ableton/headers/MiniNav";
import Hero from "../../components/main/Hero";
import { TwoColumn } from "../../components/main/TwoColumn";

const AbletonHomePage = () => {
  return (
    <div>
      <Background style={{ backgroundColor: "#F3F4F6" }}>
        <AbletonNavbar />
        <MiniNav />
        <Hero h1="Ableton" />
        <div className="max-w-screen-2xl mx-auto py-12 bg-white"></div>
        <TwoColumn
          image="/images/ableton/photo8.jpg"
          content={{
            text: "We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.",
            link: { href: "/", text: "See all lastest jobs" },
          }}
        />
        <div className="max-w-screen-2xl mx-auto py-12 bg-white"></div>
      </Background>
    </div>
  );
};

export default AbletonHomePage;
