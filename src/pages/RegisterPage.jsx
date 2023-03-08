import ButtonPartial from "../partials/ButtonPartial";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [inputsValue, setInputsValue] = useState({
    fisrtName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/register", {
        fisrtName: inputsValue.fisrtName,
        lastName: inputsValue.lastName,
        email: inputsValue.email,
        password: inputsValue.password,
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  const handleInputChange = (ev) => {
    const newInputsValue = JSON.parse(JSON.stringify(inputsValue));
    newInputsValue[ev.target.id] = ev.target.value;
    setInputsValue(newInputsValue);
  };
  return (
    <Fragment>
      <h1>Register page</h1>
      <div className="mb-3">
        <label htmlFor="fisrtName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fisrtName"
          value={inputsValue.fisrtName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          value={inputsValue.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={inputsValue.email}
          onChange={handleInputChange}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={inputsValue.password}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <ButtonPartial onClick={handleRegister}>Submit</ButtonPartial>
    </Fragment>
  );
};

export default RegisterPage;
