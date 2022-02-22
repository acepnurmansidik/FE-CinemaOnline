/* eslint-disable react-hooks/exhaustive-deps */
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Container, Dropdown, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAllFilms, setDeleteFilm } from "../../../services/film";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";

export default function Film() {
  const router = useNavigate();
  const [films, setFilms] = useState([]);

  // validator
  useEffect(() => {
    if (
      !Cookies.get("token") ||
      jwtDecode(atob(Cookies.get("token"))).status !== "admin"
    ) {
      router("/");
    }
  }, [router]);

  // GET data films
  useEffect(async () => {
    const response = await getAllFilms();
    setFilms(response.data.films);
  }, []);

  return (
    <Container>
      <NavigationBar />
      <div className="transactions-title">
        <p>Incoming Transaction</p>
      </div>
      <div className="table-transactions">
        <Table striped bordered hover variant="dark" responsive="sm">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {films.map((film, i) => (
              <tr key={film.id}>
                <td>{i + 1}</td>
                <td>{film.title}</td>
                <td>{film.price}</td>
                <td>{film.category.name}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle>
                      <img
                        src="../assets/icons/polygon.svg"
                        width={20}
                        height={20}
                        alt=""
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item
                        onClick={() => {
                          router(`/edit-film/${film.id}`);
                        }}
                      >
                        <p className="approved">Edit</p>
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setDeleteFilm(film.id);
                        }}
                      >
                        <p className="cancel">Delete</p>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
