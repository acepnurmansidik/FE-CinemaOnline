import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ListsFilm() {
  return (
    <Row className="lp-listfilm">
      <Col sm={12}>
        <p>List film</p>
        <div className="lp-list-film">
          <Card style={{ width: "12rem" }}>
            <Card.Header>
              <Link to={"/asd"}>
                <Card.Img className="lp-card-img" src="../assets/img/sp.png" />
              </Link>
            </Card.Header>
          </Card>
          <Card style={{ width: "12rem" }}>
            <Card.Header>
              <Link to={"/asd"}>
                <Card.Img className="lp-card-img" src="../assets/img/sp.png" />
              </Link>
            </Card.Header>
          </Card>
          <Card style={{ width: "12rem" }}>
            <Card.Header>
              <Link to={"/asd"}>
                <Card.Img className="lp-card-img" src="../assets/img/sp.png" />
              </Link>
            </Card.Header>
          </Card>
        </div>
      </Col>
    </Row>
  );
}
