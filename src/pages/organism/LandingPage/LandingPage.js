import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../molecules/Footer/Footer";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";
import ListsFilm from "./ListsFilm";
import LPCarousels from "./LPCarousels";

export default function LandingPage() {
  return (
    <Container>
      <NavigationBar />
      <LPCarousels />
      <ListsFilm />
      <Footer />
    </Container>
  );
}
