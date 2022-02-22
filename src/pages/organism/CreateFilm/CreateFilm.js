/* eslint-disable react-hooks/exhaustive-deps */
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { setNewFilm } from "../../../services/film";
import { getAllCategories } from "../../../services/category";
import { setNotification } from "../../atom/notif";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";

export default function CreateFilm() {
  const router = useNavigate();
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [categorys, setCategorys] = useState([]);
  const [form, setForm] = useState({});

  // validator
  useEffect(() => {
    if (
      !Cookies.get("token") ||
      jwtDecode(atob(Cookies.get("token"))).status !== "admin"
    ) {
      router("/");
    }
  }, [router]);

  useEffect(async () => {
    const response = await getAllCategories();
    setCategorys(response.data.categories);
  }, []);

  // Handle ===========================================

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", form.title);
    data.append("price", form.price);
    data.append("filmUrl", form.filmUrl);
    data.append("description", form.description);
    data.append("thumbnail", image);
    form.category
      ? data.append("categoryId", form.categoryId)
      : data.append("categoryId", categorys[0].id);

    const response = await setNewFilm(data);
    if (response.status === "success") {
      setNotification("success", "Yeay, has been posting");
      document.getElementById("create-course-form").reset();
      setImagePreview("");
    } else {
      setNotification("err", "Please upload image or video");
    }
  };

  return (
    <Container>
      <NavigationBar />
      <div className="create-film-title">
        <p>Add Film</p>
      </div>
      <div className="form-input-film">
        <Form onSubmit={handleOnSubmit} id="create-course-form">
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
            <Form.Select onChange={handleOnChange} name="categoryId" size="lg">
              {categorys.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Control
              type="number"
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
                placeholder="description"
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
