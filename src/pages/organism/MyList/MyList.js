/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMyListFilm } from "../../../services/film";
import Footer from "../../molecules/Footer/Footer";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";

export default function MyList() {
  const [films, setFilms] = useState([]);

  useEffect(async () => {
    const response = await getMyListFilm();
    setFilms(response.data.films);
  }, []);
  return (
    <Container>
      <NavigationBar />
      <Row className="list-title-container">
        <p>My List Film</p>
      </Row>
      <Row>
        <div className="list-film-user">
          {films.map((film) => (
            <Link to={`/film/${film.films.id}`}>
              <img src={film.films.thumbnail} alt="" />
            </Link>
          ))}
        </div>
      </Row>
      <Footer />
    </Container>
  );
}
