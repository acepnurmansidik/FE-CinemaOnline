import React, { useState } from "react";
import { setNotification } from "../../atom/notif";
import {
  Button,
  Modal,
  Form,
  Navbar,
  Container,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { setRegister } from "../../../services/auth";

export default function NavigationBar() {
  const [loginModalShow, setloginModalShow] = useState(false);
  const [registerModalShow, setregisterModalShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  const handleCloseLogin = () => {
    setloginModalShow(false);
    setregisterModalShow(true);
  };

  const handleCloseRegister = () => {
    setloginModalShow(true);
    setregisterModalShow(false);
  };

  return (
    <>
      <Navbar className="container-navbar">
        <Container
          style={{ backgroundColor: "#0b0b0b" }}
          className="container-inner-navbar"
        >
          <Navbar.Brand href="/">
            <div className="navbar-img">
              <Link to={"/"}>
                <img src="../assets/img/Icon.svg" height={70} alt="" />
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {isLogin === true ? (
                isAdmin === true ? (
                  <AdminDropdownMenu />
                ) : (
                  <UserDropdownMenu />
                )
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
                      setregisterModalShow={setregisterModalShow}
                    />
                  </div>
                </div>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function AdminDropdownMenu() {
  return (
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

        <Dropdown.Menu variant="dark">
          <Dropdown.Item style={{ display: "flex" }} href="/transactions">
            <img src="../assets/icons/list.svg" width={25} height={25} alt="" />
            <p
              style={{
                color: "#FFF",
                fontWeight: "800",
                marginLeft: "5px",
              }}
            >
              Transactions
            </p>
          </Dropdown.Item>
          <Dropdown.Item style={{ display: "flex" }} href="/film">
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
              Add Film
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
              Logout
            </p>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

function UserDropdownMenu() {
  return (
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

        <Dropdown.Menu variant="dark">
          <Dropdown.Item style={{ display: "flex" }} href="/profile">
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
          <Dropdown.Item style={{ display: "flex" }} href="/my-film">
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
              My List
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
              Logout
            </p>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

function LoginModalShow({ handleCloseLogin, ...props }) {
  const [form, setForm] = useState();

  // Handle ==========================================
  const handelOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    console.log(form);
  };
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

function RegisterModalShow({
  handleCloseRegister,
  setregisterModalShow,
  ...props
}) {
  const [form, setForm] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  // Handle ==========================================
  const handelOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const response = await setRegister(form);
    if (response.status === "success") {
      setregisterModalShow(false);
      setNotification(response.status, "Account registered successfully");
    } else {
      console.log("FAILED");
    }
  };
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
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicFullname">
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Fullname"
              name="fullname"
              onChange={handelOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              onChange={handelOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={handelOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              type="password"
              className="form-control"
              placeholder="Password (min 6 character))"
              name="password"
              onChange={handelOnChange}
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
