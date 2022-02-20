import React, { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import NumberFormat from "react-number-format";

export default function DetailInfo({ film, category }) {
  const [paymentModalShow, setPaymentModalShow] = useState();
  return (
    <Col key={film.id} sm={8} className="df-info">
      <header>
        <div className="df-title-film">
          <p>{film.title}</p>
        </div>
        <div className="film-btn-container">
          <Button
            className="base-btn"
            onClick={() => setPaymentModalShow(true)}
            film={film}
          >
            Buy Now
          </Button>

          <PaymentShow
            show={paymentModalShow}
            onHide={() => setPaymentModalShow(false)}
            film={film}
          />
        </div>
      </header>
      <div className="df-img-jumbo">
        <ReactPlayer
          url={`${film.filmUrl}`}
          light={true}
          controls={true}
          pip={false}
          stopOnUnmount={false}
          width="100%"
          height="100%"
        />
      </div>
      <div className="df-synopsis-film">
        <div className="synopsis-info">
          <p>{category}</p>
          <p>
            <NumberFormat
              value={`${film.price}`}
              className="foo"
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rp. "}
              renderText={(value, props) => <div {...props}>{value}</div>}
            />
          </p>
        </div>
        <div className="text-synopsis">
          <p>{film.description}</p>
        </div>
      </div>
    </Col>
  );
}

function PaymentShow({ film, ...props }) {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [form, setForm] = useState({});

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-4 detailModal-attachment">
        <Modal.Title id="contained-modal-title-vcenter" className="mb-3">
          <Form.Text className="text-muted">
            <p className="title-attachment">
              Cinema<p className="text-base-color">Online</p> : 054513581
            </p>
          </Form.Text>
        </Modal.Title>
        <Form.Group className="mb-2 mt-3" controlId="formBasicPassword">
          <div className="info-attachment">
            <p className="title-attachment">{film.title}</p>
            <p>
              Rp.{" "}
              <p className="text-base-color">
                <NumberFormat
                  value={`${film.price}`}
                  className="foo"
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                  renderText={(value, props) => <div {...props}>{value}</div>}
                />
              </p>
            </p>
          </div>
        </Form.Group>

        <Form onSubmit={null}>
          <Form.Group className="mb-3" controlId="formBasicAccountNumber">
            <Form.Control
              type="hidden"
              name="filmId"
              value={film.id}
              onChange={null}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAccountNumber">
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Input Your Account Number"
              name="accountNumber"
              onChange={null}
            />
          </Form.Group>
          {imagePreview ? (
            <img src={imagePreview} alt="" height={100} width={100} />
          ) : null}
          <div className="detail-browse-attachment">
            <Form.Group className="mb-3" controlId="formBasicfilmUrl">
              <Form.Control
                type="file"
                name="filmUrl"
                onChange={(e) => {
                  const img = e.target.files[0];
                  setImagePreview(URL.createObjectURL(img));
                  setImage(img);
                }}
              />
            </Form.Group>
            <p>*transfers can be made to holyways accounts</p>
          </div>

          <Button
            style={{ marginTop: 20 }}
            className="btn-fullWidth"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
