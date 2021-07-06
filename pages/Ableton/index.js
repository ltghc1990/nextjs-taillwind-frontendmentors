import React from "react";
import Background from "../../components/ableton/ui/Background";
import AbletonNavbar from "../../components/ableton/headers/Navbar";
import MiniNav from "../../components/ableton/headers/MiniNav";
import Hero from "../../components/main/Hero";
import { TwoColumn } from "../../components/main/TwoColumn";
import Quote from "../../components/main/Quote";
import HorizontalPadding from "../../components/Layout/HorizontalPadding";
import Head from "../../components/Metatags";

const AbletonHomePage = () => {
  return (
    <div>
      <Head
        title="Learn more about Ableton - maker of Live and Push | Ableton"
        name="description"
        content="Ableton is a Berlin-based company that makes Live and Push - software and hardware for creating, producing and performing music. Learn more about Ableton."
      />
      <Background style={{ backgroundColor: "#F3F4F6" }}>
        <AbletonNavbar />
        <MiniNav />
        <Hero h1="Ableton" />
        <HorizontalPadding />
        <Quote
          h4="We’re passionate about what we do, but we’re equally passionate about improving who we are."
          p="We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other."
          p2="Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices."
        />
        <Quote
          h4="We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great."
          p="Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.

          "
        />
        <HorizontalPadding />
        <TwoColumn
          image="/images/ableton/photo8.jpg"
          content={{
            text: "We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.",
            link: { href: "/", text: "See all lastest jobs" },
          }}
        />
        <HorizontalPadding />
        <Quote
          h4="We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible."
          p="If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities."
        />
        <HorizontalPadding />
      </Background>
    </div>
  );
};

export default AbletonHomePage;
