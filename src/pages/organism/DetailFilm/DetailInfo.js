import React, { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";

export default function DetailInfo() {
  const [paymentModalShow, setPaymentModalShow] = useState();
  return (
    <Col sm={8} className="df-info">
      <header>
        <div className="df-title-film">
          <p>Tom & Jerry</p>
        </div>
        <div className="film-btn-container">
          <Button
            className="base-btn"
            onClick={() => setPaymentModalShow(true)}
          >
            Buy Now
          </Button>

          <PaymentShow
            show={paymentModalShow}
            onHide={() => setPaymentModalShow(false)}
          />
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
            inventore at vero rem! Eveniet quas voluptates, ducimus labore enim
            sit earum est tempora numquam? Excepturi vero ea commodi incidunt
            fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Labore itaque autem voluptatem quaerat eos architecto omnis vero,
            fuga neque temporibus, corporis necessitatibus tenetur dignissimos
            totam ullam libero quod illo animi? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Et voluptate perspiciatis modi illo,
            officia hic temporibus id eos tempore deserunt eius cumque
            reprehenderit repellat accusantium in. Animi esse harum aut? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Tempora inventore
            at vero rem! Eveniet quas voluptates, ducimus labore enim sit earum
            est tempora numquam? Excepturi vero ea commodi incidunt fugit. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Labore itaque
            autem voluptatem quaerat eos architecto omnis vero, fuga neque
            temporibus, corporis necessitatibus tenetur dignissimos totam ullam
            libero quod illo animi? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Et voluptate perspiciatis modi illo, officia hic
            temporibus id eos tempore deserunt eius cumque reprehenderit
            repellat accusantium in. Animi esse harum aut? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Tempora inventore at vero rem!
            Eveniet quas voluptates, ducimus labore enim sit earum est tempora
            numquam? Excepturi vero ea commodi incidunt fugit. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Labore itaque autem
            voluptatem quaerat eos architecto omnis vero, fuga neque temporibus,
            corporis necessitatibus tenetur dignissimos totam ullam libero quod
            illo animi? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Et voluptate perspiciatis modi illo, officia hic temporibus id
            eos tempore deserunt eius cumque reprehenderit repellat accusantium
            in. Animi esse harum aut?
          </p>
        </div>
      </div>
    </Col>
  );
}

function PaymentShow(props) {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
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
            <p className="title-attachment">Tom & Jerry</p>
            <p>
              Rp. <p className="text-base-color">9999</p>
            </p>
          </div>
        </Form.Group>

        <Form onSubmit={null}>
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
