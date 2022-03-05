import { requestAPI } from "./config";

const ROOT_API = `https://cinema-online-app.herokuapp.com/api/v1`;

// GET all random film
export const getAllFilms = () => {
  const url = `${ROOT_API}/film`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "GET", headers });
};

// GET promo film
export const getPromoFilms = () => {
  const url = `${ROOT_API}/film-promo`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "GET", headers });
};

// GET detail film
export const getFilmSpecific = (id) => {
  const url = `${ROOT_API}/film/${id}`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "GET", headers });
};

// GET my list film
export const getMyListFilm = () => {
  const url = `${ROOT_API}/my-film`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "GET", token: true, headers });
};

// GET search film
export const getSearchFilms = (query) => {
  const url = `${ROOT_API}/search-film?sc=${query}`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "GET", headers });
};

// POST new film
export const setNewFilm = (data) => {
  const url = `${ROOT_API}/film`;
  let headers = {
    "Content-type": "multipart/form-data",
  };

  return requestAPI({
    url,
    method: "POST",
    data,
    headers,
    token: true,
  });
};

// UPDATE new film
export const setUpdateFilm = (data) => {
  const url = `${ROOT_API}/film`;
  let headers = {
    "Content-type": "multipart/form-data",
  };

  return requestAPI({
    url,
    method: "PATCH",
    data,
    headers,
    token: true,
  });
};

// DELETE film
export const setDeleteFilm = (id) => {
  const url = `${ROOT_API}/film/${id}`;
  let headers = {
    "Content-type": "multipart/form-data",
  };

  return requestAPI({
    url,
    method: "DELETE",
    headers,
    token: true,
  });
};
