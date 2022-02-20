import { Button, Form, Modal } from "react-bootstrap";
import { setNotification } from "../../atom/notif";
import { setRegister } from "../../../services/auth";
import { useState } from "react";

export default function RegisterModalShow({
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
      setNotification(response.status, response.message.statusText);
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
