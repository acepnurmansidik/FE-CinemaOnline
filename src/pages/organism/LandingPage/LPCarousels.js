/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Carousel, Col, Row } from "react-bootstrap";
import { getPromoFilms } from "../../../services/film";
import NumberFormat from "react-number-format";
import { useNavigate } from "react-router-dom";

export default function LPCarousels() {
  const router = useNavigate();
  const [films, setFilms] = useState([]);

  useEffect(async () => {
    const response = await getPromoFilms();
    setFilms(response.data.films);
  }, []);

  return (
    <Row className="lp-courosel">
      <Col sm={12}>
        <Carousel className="lp-courosel-content">
          {films.map((film) => (
            <Carousel.Item key={film.id} interval={2000}>
              <img
                className="d-block w-"
                src={`${film.thumbnail}`}
                height={490}
                width={1300}
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="lp-courosel-caption">
                  <h1>{film.title}</h1>

                  <p>Action</p>
                  <p>
                    <NumberFormat
                      value={`${film.price}`}
                      className="foo"
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp. "}
                      renderText={(value, props) => (
                        <div {...props}>{value}</div>
                      )}
                    />
                  </p>
                  <p>{film.description}</p>
                  <Button
                    className="base-btn"
                    onClick={() => router(`/film/${film.id}`)}
                  >
                    Buy Now
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
}
