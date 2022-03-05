import { requestAPI } from "./config";

const ROOT_API = `https://cinema-online-app.herokuapp.com/api/v1`;

// GET profile user info
export const getProfileUserInfo = () => {
  const url = `${ROOT_API}/profile-user`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "GET", token: true, headers });
};
