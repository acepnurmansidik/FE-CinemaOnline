import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";

export default function DetailFilm() {
  return (
    <Container>
      <NavigationBar />
      <Row className="detail-film-container">
        <Col sm={4} className="df-img">
          <img src="../assets/img/tom-jerry.png" alt="" />
        </Col>
        <Col sm={8} className="df-info">
          <header>
            <div className="df-title-film">
              <p>Tom & Jerry</p>
            </div>
            <div className="film-btn-container">
              <Button className="base-btn" onClick={() => null}>
                Buy Now
              </Button>
            </div>
          </header>
          <div className="df-img-jumbo">
            <img src="../assets/img/img-jumbo.png" alt="" />
          </div>
          <div className="df-synopsis-film">
            <div className="synopsis-info">
              <p>Family</p>
              <p>Rp. 999999</p>
            </div>
            <div className="text-synopsis">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                inventore at vero rem! Eveniet quas voluptates, ducimus labore
                enim sit earum est tempora numquam? Excepturi vero ea commodi
                incidunt fugit. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Labore itaque autem voluptatem quaerat eos
                architecto omnis vero, fuga neque temporibus, corporis
                necessitatibus tenetur dignissimos totam ullam libero quod illo
                animi? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Et voluptate perspiciatis modi illo, officia hic temporibus id
                eos tempore deserunt eius cumque reprehenderit repellat
                accusantium in. Animi esse harum aut? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tempora inventore at vero rem!
                Eveniet quas voluptates, ducimus labore enim sit earum est
                tempora numquam? Excepturi vero ea commodi incidunt fugit. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Labore
                itaque autem voluptatem quaerat eos architecto omnis vero, fuga
                neque temporibus, corporis necessitatibus tenetur dignissimos
                totam ullam libero quod illo animi? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Et voluptate perspiciatis modi
                illo, officia hic temporibus id eos tempore deserunt eius cumque
                reprehenderit repellat accusantium in. Animi esse harum aut?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                inventore at vero rem! Eveniet quas voluptates, ducimus labore
                enim sit earum est tempora numquam? Excepturi vero ea commodi
                incidunt fugit. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Labore itaque autem voluptatem quaerat eos
                architecto omnis vero, fuga neque temporibus, corporis
                necessitatibus tenetur dignissimos totam ullam libero quod illo
                animi? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Et voluptate perspiciatis modi illo, officia hic temporibus id
                eos tempore deserunt eius cumque reprehenderit repellat
                accusantium in. Animi esse harum aut?
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
