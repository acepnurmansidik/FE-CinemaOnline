/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { getProfileUserInfo } from "../../../services/user";
import ImageProfile from "../../atom/ImageProfile/ImageProfile";

export default function MyInfo() {
  const [user, setUser] = useState({});

  useEffect(async () => {
    const response = await getProfileUserInfo();
    setUser(response.data.user);
  }, []);

  return (
    <Col sm={6} className="profile-info-user">
      <h1>My Profile</h1>
      <div className="profile-info">
        <ImageProfile image={user.avatar} />
        <div className="profile-info-biodata">
          <div className="profile-biodata-group">
            <h4>Fullname</h4>
            <p>{user.fullname}</p>
          </div>
          <div className="profile-biodata-group">
            <h4>Email</h4>
            <p>{user.email}</p>
          </div>
          <div className="profile-biodata-group">
            <h4>Phone</h4>
            <p>{user.phone ? user.phone : `-`}</p>
          </div>
        </div>
      </div>
    </Col>
  );
}
