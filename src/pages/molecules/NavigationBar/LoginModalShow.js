import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { setNotification } from "../../atom/notif";
import { setLogin } from "../../../services/auth";
import Cookies from "js-cookie";

export default function LoginModalShow({ handleCloseLogin, ...props }) {
  const [form, setForm] = useState({
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
    if (!form.email || !form.password) {
      return setNotification("err", "Form cannot be empty!");
    }

    const response = await setLogin(form);
    if (response.status === "success") {
      // show notif
      setNotification(response.status, "Wohoo, login success");
      const tokenbase64 = btoa(response.data.user.token);
      Cookies.set("token", tokenbase64, { expires: 1 });
      window.location.reload();
    } else {
      // show notification
      setNotification("err", response.message.data.message);
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
          Login
        </Modal.Title>
        <Form onSubmit={handleOnSubmit}>
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
              placeholder="Password"
              name="password"
              onChange={handelOnChange}
            />
          </Form.Group>
          <Button className="btn-fullWidth" type="submit">
            Submit
          </Button>
          <Form.Group className="mb-2 mt-3" controlId="formBasicPassword">
            <Form.Text className="text-muted">
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
