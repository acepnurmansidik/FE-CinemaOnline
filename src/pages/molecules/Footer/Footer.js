import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container className="footer-container">
      <div className="footer-brand">
        <Link to={"/"}>
          <img src="../assets/img/Icon.svg" alt="" />
        </Link>
        <p>
          JL Raya Sasak Beusi No.10, Sindangsuka, Kec. Cibatu, Kabupaten Garut,
          Jawa Barat 44185
        </p>
      </div>
      <div className="footer-menu">
        <div className="footer-menu-item">
          <h3>Product</h3>
          <Link to={"/#"} className="footer-link-item">
            <p>Film</p>
          </Link>
          <Link to={"/#"} className="footer-link-item">
            <p>Coupon</p>
          </Link>
          <Link to={"/#"} className="footer-link-item">
            <p>Discount</p>
          </Link>
        </div>
        <div className="footer-menu-item">
          <h3>About Us</h3>
          <Link to={"/#"} className="footer-link-item">
            <p>Intro</p>
          </Link>
          <Link to={"/#"} className="footer-link-item">
            <p>Why you should buy our product?</p>
          </Link>
          <Link to={"/#"} className="footer-link-item">
            <p>How to payment?</p>
          </Link>

          <Link to={"/#"} className="footer-link-item">
            <p>How to buy film?</p>
          </Link>
        </div>
        <div className="footer-menu-item">
          <h3>Contact Me</h3>
          <Link to={"/#"} className="footer-link-item">
            <p>cinemaonline@gmail.com</p>
          </Link>
        </div>
      </div>
    </Container>
  );
}
