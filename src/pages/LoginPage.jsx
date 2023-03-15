import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { authActions } from "../store/auth";
import useLogin from "../hooks/useLogin";
import ButtonPartial from "../partials/ButtonPartial";
import validateLoginSchema from "../validation/LoginValidation";
import AlertPartial from "../partials/AlertPartial";

const LoginPage = () => {
  const [inputsValue, setInputsValue] = useState({
    emailInput: "",
    passwordInput: "",
  });

  const [errorState, setErrorState] = useState(null);
  const navigate = useNavigate();
  const loginFunc = useLogin();

  const handleInputChange = (ev) => {
    const newInputsValue = JSON.parse(JSON.stringify(inputsValue));
    newInputsValue[ev.target.id] = ev.target.value;
    setInputsValue(newInputsValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const errors = validateLoginSchema(inputsValue);
      if (errors) {
        console.log(errors);
        setErrorState(errors);
      } else {
        const { data } = await axios.post("/login", {
          email: inputsValue.emailInput,
          password: inputsValue.passwordInput,
        });
        console.log(data);
        localStorage.setItem("token", data.userToken);
        // useDispatch(authActions.login())
        loginFunc();
        navigate("/");
      }
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
          id="emailInput"
          aria-describedby="emailHelp"
          value={inputsValue.emailInput}
          onChange={handleInputChange}
        />

        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
        {errorState && errorState.emailInput && (
          <AlertPartial>
            {errorState.emailInput.map((item) => (
              <div key={item + "email"}> {item}</div>
            ))}
          </AlertPartial>
        )}
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
        {errorState && errorState.passwordInput && (
          <AlertPartial>
            {errorState.passwordInput.map((item) => (
              <div key={item + "pass"}>{item}</div>
            ))}
          </AlertPartial>
        )}
      </div>

      <ButtonPartial onClick={handleSubmit}>Login</ButtonPartial>
    </form>
  );
};

export default LoginPage;
