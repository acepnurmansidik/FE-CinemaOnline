import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";

export default function MyProfile() {
  return (
    <Container>
      <NavigationBar />
      <Row className="profile-container">
        <Col sm={6} className="profile-info-user">
          <h1>My Profile</h1>
          <div className="profile-info">
            <img src="../assets/img/profile-default.png" alt="" />
            <div className="profile-info-biodata">
              <div className="profile-biodata-group">
                <h4>Fullname</h4>
                <p>Acep Nurman Sidik</p>
              </div>
              <div className="profile-biodata-group">
                <h4>Email</h4>
                <p>acepnurmansidik@gmail.com</p>
              </div>
              <div className="profile-biodata-group">
                <h4>Phone</h4>
                <p>083822012158</p>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={6} className="profile-history-transactions">
          <h1>History Transaction</h1>
        </Col>
      </Row>
    </Container>
  );
}