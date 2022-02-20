import React from "react";
import { Col } from "react-bootstrap";

export default function ThumbnailFilm({ film }) {
  return (
    <Col sm={4} className="df-img">
      <img src={film.thumbnail} height={350} alt="" />
    </Col>
  );
}
