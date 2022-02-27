import React, { useEffect, useState } from "react";
import { Button, Navbar, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AdminDropdownMenu from "./AdminDropdownMenu";
import UserDropdownMenu from "./UserDropdownMenu";
import LoginModalShow from "./LoginModalShow";
import RegisterModalShow from "./RegisterModalShow";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export default function NavigationBar() {
  const router = useNavigate();
  const [loginModalShow, setloginModalShow] = useState(false);
  const [registerModalShow, setregisterModalShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState({});
  const [form, setForm] = useState({
    sc: "",
  });

  useEffect(() => {
    if (Cookies.get("token")) {
      const user = jwtDecode(atob(Cookies.get("token")));
      setIsLogin(true);
      setIsAdmin(user);
    }
  }, []);
  // Handle =======================================
  const handleCloseLogin = () => {
    setloginModalShow(false);
    setregisterModalShow(true);
  };

  const handleCloseRegister = () => {
    setloginModalShow(true);
    setregisterModalShow(false);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = () => {
    router(`/search?sc=${form.sc}`);
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
            <Form className="navbar-search-container" onSubmit={handleOnSubmit}>
              <Form.Group
                className="mb-3 search-input"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  name="sc"
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Search..."
                />
              </Form.Group>
            </Form>
            <Navbar.Text>
              {isLogin === true ? (
                isAdmin.status === "admin" ? (
                  <AdminDropdownMenu isAdmin={isAdmin} />
                ) : (
                  <UserDropdownMenu isAdmin={isAdmin} />
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
