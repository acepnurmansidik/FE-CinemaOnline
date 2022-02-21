import { requestAPI } from "./config";

const ROOT_API = `http://localhost:5000/api/v1`;

// POST user going transactions
export const setTransaction = (data) => {
  const url = `${ROOT_API}/transactions`;
  let headers = {
    "Content-type": "multipart/form-data",
  };

  return requestAPI({ url, method: "POST", data, token: true, headers });
};

// GET user after buy film
export const getTransactionAfterLogin = (id) => {
  const url = `${ROOT_API}/transactions/${id}`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "GET", token: true, headers });
};

// GET transactions
export const getTransaction = () => {
  const url = `${ROOT_API}/transactions`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "GET", token: true, headers });
};

// PUT/PATCH transactions
export const updateTransaction = (id, status) => {
  const url = `${ROOT_API}/transactions/${id}?status=${status}`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "PATCH", token: true, headers });
};
