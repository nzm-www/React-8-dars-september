import React, { useRef } from "react";
import { useNavigate } from "react-router";
import "../index.css";

function Register() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();

  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  function validate() {
    if (usernameRef.current.value.length < 3) {
      alert("username is not valid");
      usernameRef.current.focus();
      usernameRef.current.style.outlineColor = "red";
      return false;
    }
    if (!validateEmail(emailRef.current.value)) {
      alert("Email is not valid");
      emailRef.current.focus();
      emailRef.current.style.outlineColor = "red";
      return false;
    }
    if (rePasswordRef.current.value != passwordRef.current.value) {
      alert("rePassword is not valid");
      return false;
    }

    return true;
  }

  function handleRegister(e) {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return false;
    }

    const user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    fetch("https://auth-rg69.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "User registered successfully!") {
          navigate("/login");
        }

        if (
          data.message == "Failed! Username is already in use!" ||
          data.message == "Failed! Email is already in use!"
        ) {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="body">
      <form className="form">
        <input
          className="input"
          ref={usernameRef}
          placeholder="Enter name..."
          type="text"
        />
        <input
          className="input"
          ref={emailRef}
          placeholder="Enter email..."
          type="email"
        />
        <input
          className="input"
          ref={passwordRef}
          placeholder="Password..."
          type="password"
        />
        <input
          className="input"
          ref={rePasswordRef}
          placeholder="RePassword..."
          type="password"
        />
        <button className="button" onClick={handleRegister}>
          <svg className="bell" viewBox="0 0 448 512">
            <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
          </svg>
          Register
          <div className="arrow">›</div>
        </button>
      </form>
    </div>
  );
}

export default Register;
