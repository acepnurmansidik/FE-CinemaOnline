import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LPNavbar() {
  const [loginModalShow, setloginModalShow] = React.useState(false);
  const [registerModalShow, setregisterModalShow] = React.useState(false);
  return (
    <Row className="lp-navbar">
      <Col sm={10}>
        <div className="lp-navbar-img">
          <Link to={"/"}>
            <img src="../assets/img/Icon.svg" height={80} alt="" />
          </Link>
        </div>
      </Col>
      <Col sm={2}>
        <div className="lp-navbar-buttons">
          <div className="lp-btn-login">
            <Button onClick={() => setloginModalShow(true)}>Login</Button>

            <LoginModalShow
              show={loginModalShow}
              onHide={() => setloginModalShow(false)}
            />
          </div>
          <div className="lp-btn-register">
            <Button
              className="base-btn"
              onClick={() => setregisterModalShow(true)}
            >
              Register
            </Button>

            <RegisterModalShow
              show={registerModalShow}
              onHide={() => setregisterModalShow(false)}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
}

function LoginModalShow(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function RegisterModalShow(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
