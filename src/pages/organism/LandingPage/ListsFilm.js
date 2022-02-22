/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllFilms } from "../../../services/film";

export default function ListsFilm() {
  const [films, setFilms] = useState([]);

  useEffect(async () => {
    const response = await getAllFilms();
    setFilms(response.data.films);
  }, []);
  return (
    <Row className="lp-listfilm">
      <Col sm={12}>
        <p>List film</p>
        <div className="lp-list-film">
          {films.map((film) => (
            <Link key={film.id} to={`/film/${film.id}`}>
              <img src={film.thumbnail} />
            </Link>
          ))}
        </div>
      </Col>
    </Row>
  );
}
