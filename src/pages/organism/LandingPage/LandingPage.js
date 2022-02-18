import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";
import ListsFilm from "./ListsFilm";
import LPCarousels from "./LPCarousels";

export default function LandingPage() {
  return (
    <>
      <Container>
        <Col>
          <NavigationBar />
          <LPCarousels />
          <ListsFilm />
        </Col>
      </Container>
    </>
  );
}
