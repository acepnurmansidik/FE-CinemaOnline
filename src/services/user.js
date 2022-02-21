import { requestAPI } from "./config";

const ROOT_API = `http://localhost:5000/api/v1`;

// GET profile user info
export const getProfileUserInfo = () => {
  const url = `${ROOT_API}/profile-user`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "GET", token: true, headers });
};
