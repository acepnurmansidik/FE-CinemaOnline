import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";

export default function CreateFilm() {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [form, setForm] = useState({
    caption: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", image);
    data.append("caption", form.caption);
  };

  return (
    <Container>
      <NavigationBar />
      <div className="create-film-title">
        <p>Add Film</p>
      </div>
      <div className="form-input-film">
        <Form onSubmit={handleOnSubmit}>
          <div className="create-film-inputGroup">
            <Form.Group className="mb-3 title-input" controlId="formBasicTitle">
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Title"
                name="title"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 btn-input-file"
              controlId="formBasicThumbnail"
            >
              <Form.Control
                type="file"
                name="thumbnail"
                onChange={(e) => {
                  const img = e.target.files[0];
                  setImagePreview(URL.createObjectURL(img));
                  setImage(img);
                }}
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formBasicCategory">
            <Form.Control
              type="Category"
              className="form-control"
              placeholder="Category"
              name="category"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Control
              type="Price"
              className="form-control"
              placeholder="Price"
              name="price"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicfilmUrl">
            <Form.Control
              type="filmUrl"
              className="form-control"
              placeholder="filmUrl"
              name="filmUrl"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicDescription">
            <Form.Group className="mb-4" controlId="formBasicDescription">
              <textarea
                className="form-control textarea"
                name="description"
                id="bio"
                placeholder="caption"
                onChange={handleOnChange}
              ></textarea>
            </Form.Group>
          </Form.Group>

          <div className="create-post-btn">
            <Button className="base-btn" type="submit">
              Add Film
            </Button>
          </div>
        </Form>
        {imagePreview ? (
          <img src={imagePreview} alt="" height={150} width={150} />
        ) : null}
      </div>
    </Container>
  );
}
