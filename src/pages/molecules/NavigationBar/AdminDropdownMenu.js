import React from "react";
import { Dropdown } from "react-bootstrap";
import ImageProfile from "../../atom/ImageProfile/ImageProfile";
import Cookies from "js-cookie";

export default function AdminDropdownMenu({ isAdmin }) {
  return (
    <div className="navbar-btnLogin">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          <ImageProfile image={isAdmin.avatar} ht={50} wt={50} BoRa={true} />
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item style={{ display: "flex" }} href="/transactions">
            <img src="../assets/icons/list.svg" width={25} height={25} alt="" />
            <p
              style={{
                color: "#FFF",
                fontWeight: "800",
                marginLeft: "5px",
              }}
            >
              Transactions
            </p>
          </Dropdown.Item>
          <Dropdown.Item style={{ display: "flex" }} href="/film">
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
              Add Film
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
