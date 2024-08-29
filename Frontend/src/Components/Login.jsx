import React, { useState, useEffect, useContext } from "react";
import style from "../Css/Login.module.css";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/Authcontextprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const { signupandlogin } = useContext(Authcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup() {
    navigate("/signup");
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleCostGo() {
    navigate("/");
  }

  useEffect(() => {
    document.title = "Sign In | Costco";
  }, []);

  async function handleSignInIs() {
    try {
      const res = await fetch("https://costco-backend.onrender.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const res2 = await res.json();
      if (res2.message === "login successfully") {
        localStorage.setItem("token", JSON.stringify(res2.token));
        toast.success("Login Successful 😁", {
          position: "top-right",
          autoClose: 3000,
        });
        signupandlogin();
        setTimeout(() => navigate("/"), 1500);
      } else {
        toast.error("Login Failed !!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("Login Failed !!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <div className={style.banner1}>
        <img
          onClick={handleCostGo}
          style={{ cursor: "pointer" }}
          src="https://signin-ui.costco.com/ecomssoui/32/common/Images/logo-bc-us.svg"
          alt="Costco Logo"
        />
      </div>
      <p className={style.signupp1}>Sign In</p>
      <div className={style.con1}>
        <input
          type="text"
          style={{ marginTop: "30px" }}
          className={style.signupin}
          placeholder="Email Address"
          value={email}
          onChange={handleEmail}
        />
        <input
          type="password"
          className={style.signupin}
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <button className={style.signupbutton} onClick={handleSignInIs}>
          Sign In
        </button>
        <hr className={style.ruller1} />
        <p className={style.newcome}>New to Costco?</p>
        <button className={style.signupbutton2} onClick={handleSignup}>
          Create Account
        </button>
      </div>
    </>
  );
};

export default Login;
