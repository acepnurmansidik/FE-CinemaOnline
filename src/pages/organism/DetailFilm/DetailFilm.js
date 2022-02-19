import React from "react";
import { Container, Row } from "react-bootstrap";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";
import DetailInfo from "./DetailInfo";
import Footer from "../../molecules/Footer/Footer";
import ThumbnailFilm from "./ThumbnailFilm";

export default function DetailFilm() {
  return (
    <Container>
      <NavigationBar />
      <Row className="detail-film-container">
        <ThumbnailFilm />
        <DetailInfo />
      </Row>
      <Footer />
    </Container>
  );
}
