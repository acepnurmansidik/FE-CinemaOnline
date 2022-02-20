/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";
import DetailInfo from "./DetailInfo";
import Footer from "../../molecules/Footer/Footer";
import ThumbnailFilm from "./ThumbnailFilm";
import { useParams } from "react-router-dom";
import { getFilmSpecific } from "../../../services/film";

export default function DetailFilm() {
  const idParams = useParams();
  const [film, setFilm] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(async () => {
    const response = await getFilmSpecific(idParams.id);
    setFilm(response.data.book);
    setCategory(response.data.book.category.name);
  }, []);

  return (
    <Container>
      <NavigationBar />
      <Row className="detail-film-container">
        <ThumbnailFilm film={film} />
        <DetailInfo film={film} category={category} />
      </Row>
      <Footer />
    </Container>
  );
}
