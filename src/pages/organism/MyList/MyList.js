import React from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../molecules/Footer/Footer";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";

export default function MyList() {
  return (
    <Container>
      <NavigationBar />
      <Row className="list-title-container">
        <p>My List Film</p>
      </Row>
      <Row>
        <div className="list-film-user">
          <img src="../assets/img/list.png" alt="" />
          <img src="../assets/img/list.png" alt="" />
        </div>
      </Row>
      <Footer />
    </Container>
  );
}
