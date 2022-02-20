/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllFilms } from "../../../services/film";

export default function ListsFilm() {
  const [films, setFilms] = useState([]);

  const newLocal = async () => {
    const response = await getAllFilms();
    setFilms(response.data.films);
  };
  useEffect(newLocal, []);
  return (
    <Row className="lp-listfilm">
      <Col sm={12}>
        <p>List film</p>
        <div className="lp-list-film">
          {films.map((film) => (
            <Card key={film.id} style={{ width: "12rem" }}>
              <Card.Header>
                <Link to={`/film/${film.id}`}>
                  <Card.Img height={200} src={film.thumbnail} />
                </Link>
              </Card.Header>
            </Card>
          ))}
        </div>
      </Col>
    </Row>
  );
}
