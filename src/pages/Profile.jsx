import { useState, useEffect } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  // const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    axios
      .get("/users/getuserinfo")
      .then(({ data }) => {
        console.log(data);
        setProfileData(data);
        console.log("###", profileData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (profileData) {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">My Profile</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name: {profileData.name}</li>
          <li className="list-group-item">Email: {profileData.email}</li>
          <li className="list-group-item">
            Last login: {profileData.lastLogin}
          </li>
        </ul>
        <div className="card-body">
          <Link to="#" className="card-link">
            Reset password
          </Link>
          <Link to="#" className="card-link">
            My orders
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
};

export default Profile;
