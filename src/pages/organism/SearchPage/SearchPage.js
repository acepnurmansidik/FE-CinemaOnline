/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { getSearchFilms } from "../../../services/film";
import Footer from "../../molecules/Footer/Footer";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [films, setFilms] = useState([]);

  useEffect(async () => {
    const response = await getSearchFilms(searchQuery.get("sc"));
    setFilms(response.data.films.data);
    console.log(response.data.films.data);
  }, []);

  return (
    <Container className="container-my-listFilm">
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
            <Link to={`/film/${film.id}`}>
              <img src={film.thumbnail} alt="" />
            </Link>
          ))}
        </div>
      </Row>
      <Footer />
    </Container>
  );
}
