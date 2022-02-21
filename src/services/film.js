import { requestAPI } from "./config";

const ROOT_API = `http://localhost:5000/api/v1`;

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
