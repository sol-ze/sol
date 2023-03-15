import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">My Profile</h5>
        <Link to="#" className="card-link">
          My orders
        </Link>
        <Link to="#" className="card-link">
          reset password
        </Link>
        <Link to="#" className="card-link">
          Logout
        </Link>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name: </li>
          <li className="list-group-item">Email:</li>
          <li className="list-group-item">Last login: </li>
        </ul>
      </div>
    </div>
  );
};
export default Profile;
