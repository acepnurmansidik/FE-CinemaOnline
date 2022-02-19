import React, { useState } from "react";
import { Button, Col, Dropdown, Modal, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const [loginModalShow, setloginModalShow] = useState(false);
  const [registerModalShow, setregisterModalShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleCloseLogin = () => {
    setloginModalShow(false);
    setregisterModalShow(true);
  };

  const handleCloseRegister = () => {
    setloginModalShow(true);
    setregisterModalShow(false);
  };

  return (
    <Row className="navbar">
      <Col sm={10}>
        <div className="navbar-img">
          <Link to={"/"}>
            <img src="../assets/img/Icon.svg" height={80} alt="" />
          </Link>
        </div>
      </Col>
      <Col sm={2}>
        {isLogin === true ? (
          <div className="navbar-btnLogin">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <img
                  src="../assets/icons/profile.svg"
                  width={50}
                  height={50}
                  alt=""
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item style={{ display: "flex" }} href="#/action-2">
                  <img
                    src="../assets/icons/user 2.svg"
                    width={25}
                    height={25}
                    alt=""
                  />
                  <p
                    style={{
                      color: "#FFF",
                      fontWeight: "800",
                      marginLeft: "5px",
                    }}
                  >
                    Profile
                  </p>
                </Dropdown.Item>
                <Dropdown.Item style={{ display: "flex" }} href="#/action-2">
                  <img
                    src="../assets/icons/movies-menu.svg"
                    width={25}
                    height={25}
                    alt=""
                  />
                  <p
                    style={{
                      color: "#FFF",
                      fontWeight: "800",
                      marginLeft: "5px",
                    }}
                  >
                    Profile
                  </p>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item style={{ display: "flex" }} href="#/action-2">
                  <img
                    src="../assets/icons/logout 1.svg"
                    width={25}
                    height={25}
                    alt=""
                  />
                  <p
                    style={{
                      color: "#FFF",
                      fontWeight: "800",
                      marginLeft: "5px",
                    }}
                  >
                    Profile
                  </p>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : (
          <div className="navbar-buttons">
            <div className="btn-login">
              <Button
                style={{ fontWeight: "900" }}
                onClick={() => setloginModalShow(true)}
              >
                Login
              </Button>

              <LoginModalShow
                show={loginModalShow}
                onHide={() => setloginModalShow(false)}
                handleCloseLogin={handleCloseLogin}
              />
            </div>
            <div className="btn-register">
              <Button
                className="base-btn"
                onClick={() => setregisterModalShow(true)}
              >
                Register
              </Button>

              <RegisterModalShow
                show={registerModalShow}
                onHide={() => setregisterModalShow(false)}
                handleCloseRegister={handleCloseRegister}
              />
            </div>
          </div>
        )}
      </Col>
    </Row>
  );
}

function LoginModalShow({ handleCloseLogin, ...props }) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-4">
        <Modal.Title id="contained-modal-title-vcenter" className="mb-3">
          Login
        </Modal.Title>
        <Form onSubmit={null}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={null}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={null}
            />
          </Form.Group>
          <Button className="btn-fullWidth" type="submit">
            Submit
          </Button>
          <Form.Group className="mb-2 mt-3" controlId="formBasicPassword">
            <Form.Text className="text-muted" onClick={null}>
              <p>
                Don't have an account ? Klik{" "}
                <div onClick={handleCloseLogin} className="text-pointer">
                  Here
                </div>
              </p>
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function RegisterModalShow({ handleCloseRegister, ...props }) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-4">
        <Modal.Title id="contained-modal-title-vcenter" className="mb-3">
          Register
        </Modal.Title>
        <Form onSubmit={null}>
          <Form.Group className="mb-3" controlId="formBasicFullname">
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Fullname"
              name="fullname"
              onChange={null}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              onChange={null}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={null}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              type="password"
              className="form-control"
              placeholder="Password (min 6 character))"
              name="password"
              onChange={null}
            />
          </Form.Group>

          <Button className="btn-fullWidth" type="submit">
            Submit
          </Button>
          <Form.Group className="mb-2 mt-3" controlId="formBasicPassword">
            <Form.Text className="text-muted" onClick={null}>
              <p>
                Already have an account ? Klik{" "}
                <div onClick={handleCloseRegister} className="text-pointer">
                  Here
                </div>
              </p>
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
