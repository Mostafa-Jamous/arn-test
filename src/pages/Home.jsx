import Landing from "../sections/Landing";
import Container from "../components/Container";
import React from "react";
import Features from "../sections/Features";
import BreakDiv from "../components/BreakDiv";
import StickyFrame from "../sections/StickyFrame";
import Reviews from "../sections/Reviews";
import WorldReviews from "../sections/WorldReviews";
import Footer from "../layouts/Footer";

function Home() {
  return (
    <div className="pt-5 z-0">
      <Container>
        <Landing />
        <BreakDiv className="my-[75px]" />
        <Features />
        <StickyFrame />
        <BreakDiv className="my-[40px]" />
      </Container>
      <Reviews />
      <Container>
        <WorldReviews />
        <BreakDiv className="my-[100px]" />
        <Footer />
      </Container>
    </div>
  );
}

export default Home;
