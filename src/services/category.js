import { requestAPI } from "./config";

const ROOT_API = `http://localhost:5000/api/v1`;

// GET all random film
export const getAllCategories = () => {
  const url = `${ROOT_API}/category`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "GET", token: true, headers });
};
