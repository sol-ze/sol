import { useState } from "react";
import ButtonPartial from "../partials/ButtonPartial";
import axios from "axios";

// import ErrorValidationListComponent from "../components/ErrorValidationListComponent";

import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [inputsValue, setInputsValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (ev) => {
    const newInputsValue = JSON.parse(JSON.stringify(inputsValue));
    newInputsValue[ev.target.id] = ev.target.value;
    setInputsValue(newInputsValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/login", {
        email: inputsValue.email,
        password: inputsValue.password,
      });
      console.log(data);
      localStorage.setItem("token", data.userToken);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login page</h1>
      <div className="mb-3">
        <label
          htmlFor="emailInput"
          className="form-label"
          placeholder="Email address"
        >
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

        {/* <ErrorValidationListComponent errorsArr={errorsState.emailInput} /> */}
      </div>

      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          {/* {" "} */}
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={inputsValue.password}
          onChange={handleInputChange}
        />

        {/* <ErrorValidationListComponent errorsArr={errorsState.passwordInput} /> */}
      </div>

      <ButtonPartial onClick={handleSubmit}>Login</ButtonPartial>
    </form>
  );
};

export default LoginPage;
