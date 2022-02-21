import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";
import HistoryTransaction from "./HistoryTransaction";
import MyInfo from "./MyInfo";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export default function MyProfile() {
  const router = useNavigate();

  useEffect(() => {
    if (
      !Cookies.get("token") ||
      jwtDecode(atob(Cookies.get("token"))).status !== "costumer"
    ) {
      router("/");
    }
  }, [router]);
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
