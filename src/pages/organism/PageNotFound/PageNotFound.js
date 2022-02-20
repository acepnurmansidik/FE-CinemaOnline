import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Container>
      <div className="container-404">
        <img src="../assets/icons/404.svg" alt="" />
        <h2>
          Come see our other products, Click{" "}
          <Link to={"/"} className="link-404">
            here
          </Link>
        </h2>
      </div>
    </Container>
  );
}
