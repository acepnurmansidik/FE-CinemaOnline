/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import { setNotification } from "../../atom/notif";
import {
  getTransactionAfterLogin,
  setTransaction,
} from "../../../services/transaction";
import NumberFormat from "react-number-format";
import { useParams } from "react-router-dom";

export default function DetailInfo({ film, category }) {
  const params = useParams();
  const [paymentModalShow, setPaymentModalShow] = useState();
  const [checkTransaction, setCheckTransaction] = useState({});

  useEffect(async () => {
    const response = await getTransactionAfterLogin(params.id);
    setCheckTransaction(response.data.data);
  }, []);

  return (
    <Col key={film.id} sm={8} className="df-info">
      <header>
        <div className="df-title-film">
          <p>{film.title}</p>
        </div>
        <div className="film-btn-container">
          {checkTransaction == null ? (
            <Button
              className="base-btn"
              onClick={() => setPaymentModalShow(true)}
              film={film}
            >
              Buy Now
            </Button>
          ) : null}

          <PaymentShow
            show={paymentModalShow}
            onHide={() => setPaymentModalShow(false)}
            film={film}
            setPaymentModalShow={setPaymentModalShow}
          />
        </div>
      </header>
      <div className="df-img-jumbo" style={{ position: "relative" }}>
        {checkTransaction == null ? (
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
            }}
            onClick={() =>
              setNotification(
                "err",
                "please buy this film if you want to watch"
              )
            }
          ></div>
        ) : checkTransaction !== "approved" ? (
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
            }}
            onClick={() =>
              setNotification(
                "err",
                "thank you for buying this film, please wait 1x24 hours because your transaction is in process"
              )
            }
          ></div>
        ) : (
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              display: "none",
            }}
          ></div>
        )}

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

function PaymentShow({ film, setPaymentModalShow, ...props }) {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [form, setForm] = useState({});

  // Handle ================================
  const handleoOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData();

    data.append("transferProof", image);
    data.append("filmId", film.id);
    data.append("accountNumber", form.accountNumber);

    const response = await setTransaction(data);
    console.log(response);
    if (response.status === "success") {
      setPaymentModalShow(false);
      setNotification(
        response.status,
        "thank you for buying this film, please wait 1x24 hours because your transaction is in process"
      );
    }
  };
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

        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicAccountNumber">
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Input Your Account Number"
              name="accountNumber"
              onChange={handleoOnChange}
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
