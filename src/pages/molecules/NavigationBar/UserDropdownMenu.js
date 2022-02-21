import React from "react";
import { Dropdown } from "react-bootstrap";
import Cookies from "js-cookie";

export default function UserDropdownMenu() {
  return (
    <div className="navbar-btnLogin">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          <img
            src="../assets/icons/profile.svg"
            width={50}
            height={50}
            alt=""
          />
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item style={{ display: "flex" }} href="/profile">
            <img
              src="../assets/icons/user 2.svg"
              width={25}
              height={25}
              alt=""
            />
            <p
              style={{
                color: "#FFF",
                fontWeight: "800",
                marginLeft: "5px",
              }}
            >
              Profile
            </p>
          </Dropdown.Item>
          <Dropdown.Item style={{ display: "flex" }} href="/my-film">
            <img
              src="../assets/icons/movies-menu.svg"
              width={25}
              height={25}
              alt=""
            />
            <p
              style={{
                color: "#FFF",
                fontWeight: "800",
                marginLeft: "5px",
              }}
            >
              My List
            </p>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            style={{ display: "flex" }}
            onClick={() => {
              Cookies.remove("token");
              window.location.reload();
            }}
          >
            <img
              src="../assets/icons/logout 1.svg"
              width={25}
              height={25}
              alt=""
            />
            <p
              style={{
                color: "#FFF",
                fontWeight: "800",
                marginLeft: "5px",
              }}
            >
              Logout
            </p>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
