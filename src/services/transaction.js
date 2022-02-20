import { requestAPI } from "./config";

const ROOT_API = `http://localhost:5000/api/v1`;

export const setTransaction = (data) => {
  const url = `${ROOT_API}/transactions`;
  let headers = {
    "Content-type": "multipart/form-data",
  };

  return requestAPI({ url, method: "POST", data, token: true, headers });
};

export const getTransactionAfterLogin = (id) => {
  const url = `${ROOT_API}/transactions/${id}`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "GET", token: true, headers });
};
