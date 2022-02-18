import React from "react";
import { Button, Carousel, Col, Row } from "react-bootstrap";

export default function LPCarousels() {
  return (
    <Row className="lp-courosel">
      <Col sm={12}>
        <Carousel className="lp-courosel-content">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-"
              src="../assets/img/Rectangle 2.png"
              height={490}
              width={1300}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="lp-courosel-caption">
                <h1>
                  DEAD
                  <br />
                  POOL
                </h1>

                <p>Action</p>
                <p>Rp. 9900</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores repudiandae, excepturi eveniet aliquid rem aliquam?
                  Temporibus iure sapiente laborum at sequi, perferendis
                  perspiciatis deleniti expedita? Id doloribus itaque odit modi.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam possimus, assumenda odio quisquam ipsam dolores
                  error! Ipsum, ad fugiat! Tempore itaque deserunt numquam modi
                  voluptates reprehenderit. Inventore illo sequi neque.
                </p>
                <Button className="base-btn" onClick={() => null}>
                  Buy Now
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}
