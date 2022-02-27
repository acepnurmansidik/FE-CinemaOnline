/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { getSearchFilms } from "../../../services/film";
import Footer from "../../molecules/Footer/Footer";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [films, setFilms] = useState([]);
  let emptContent;
  if (!films.length) {
    emptContent = { height: "100vh" };
  }

  useEffect(async () => {
    const response = await getSearchFilms(searchQuery.get("sc"));
    setFilms(response.data.films);
  }, []);

  return (
    <Container className="container-my-listFilm" style={emptContent}>
      <NavigationBar />
      <Row className="list-title-container">
        <p>
          Result for{" "}
          <i style={{ color: "greenyellow" }}>{searchQuery.get("sc")}</i>
        </p>
      </Row>
      <Row>
        <div className="list-film-user">
          {films.map((film) => (
            <Link
              key={film.id}
              to={`/film/${film.id}`}
              style={{ color: "#FFF", textDecoration: "none", marginRight: 20 }}
            >
              <Card style={{ width: "12rem" }}>
                <Card.Img variant="top" src={film.thumbnail} />
                <Card.Body>
                  <Card.Title>{film.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </Row>
      <Footer />
    </Container>
  );
}
