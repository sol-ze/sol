import { useState } from "react";
import ButtonPartial from "../partials/ButtonPartial";
// import ErrorValidationListComponent from "../components/ErrorValidationListComponent";

import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [inputsValue, setInputsValue] = useState({
    emailInput: "",
    passwordInput: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (ev) => {
    const newInputsValue = JSON.parse(JSON.stringify(inputsValue));
    newInputsValue[ev.target.id] = ev.target.value;
    setInputsValue(newInputsValue);
  };

  const handleSubmit = () => {
    // console.log("clicked");
    navigate("/");
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
          id="emailInput"
          aria-describedby="emailHelp"
          value={inputsValue.emailInput}
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
          id="passwordInput"
          value={inputsValue.passwordInput}
          onChange={handleInputChange}
        />

        {/* <ErrorValidationListComponent errorsArr={errorsState.passwordInput} /> */}
      </div>

      <ButtonPartial onClick={handleSubmit}>Login</ButtonPartial>
    </form>
  );
};

export default LoginPage;
