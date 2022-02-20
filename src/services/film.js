import { requestAPI } from "./config";

const ROOT_API = `http://localhost:5000/api/v1`;

export const getAllFilms = () => {
  const url = `${ROOT_API}/film`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "GET", headers });
};
