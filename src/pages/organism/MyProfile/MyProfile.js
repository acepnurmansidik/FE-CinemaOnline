import React from "react";
import { Container, Row } from "react-bootstrap";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";
import HistoryTransaction from "./HistoryTransaction";
import MyInfo from "./MyInfo";

export default function MyProfile() {
  return (
    <Container>
      <NavigationBar />
      <Row className="profile-container">
        <MyInfo />
        <HistoryTransaction />
      </Row>
    </Container>
  );
}
