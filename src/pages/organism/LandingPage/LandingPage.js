import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import LPCarousels from "./LPCarousels";
import LPNavbar from "./LPNavbar";

export default function LandingPage() {
  return (
    <>
      <Container>
        <Col>
          <LPNavbar />
          <LPCarousels />
          <Row className="lp-listfilm">
            <Col sm={12}>sA</Col>
          </Row>
        </Col>
      </Container>
    </>
  );
}
