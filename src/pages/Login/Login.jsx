import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { Button, Card } from "react-bootstrap";

// import "//Login.scss";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  let navigate = useNavigate();

  // field validation
  const handleValidation = (event) => {
    setFormIsValid(true);

    // check email
    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      setFormIsValid(false);
      setEmailError("Email Not Valid");
      return false;
    } else {
      setEmailError("");
      setFormIsValid(true);
    }

    // check password
    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      setFormIsValid(false);
      setPasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setPasswordError("");
      setFormIsValid(true);
    }

    if (formIsValid === true) {
      navigate("/dashboard");
    }

    return formIsValid;
  };

  // submit function
  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    <form>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="EmailInput"
          name="EmailInput"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <small id="emailHelp" className="text-danger form-text">
        {emailError}
      </small>
      <div className="mb-3">
        <label>OTP Code</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter OTP Code"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <small id="passwordError" className="text-danger form-text">
        {passwordError}
      </small>
      {/* submit button  */}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" onClick={loginSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
