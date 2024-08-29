import React, { useState, useEffect, useContext } from "react";
import style from "../Css/Signup.module.css";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/Authcontextprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const { signupandlogin } = useContext(Authcontext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [mnumber, setMnumber] = useState("");

  function handleSignin() {
    navigate("/login");
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleCpassword(event) {
    setCpassword(event.target.value);
  }

  function handleMnumber(event) {
    setMnumber(event.target.value);
  }

  function handleCostGo() {
    navigate("/");
  }

  useEffect(() => {
    document.title = "Create Account | Costco";
  }, []);

  async function handleCreateAccount() {
    try {
      const res = await fetch("https://costco-backend.onrender.com/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, cpassword }),
      });
      const res2 = await res.json();
      if (res2.message === "user registered successfully") {
        localStorage.setItem("token", JSON.stringify(res2.token));
        toast.success("SignUp Successful 😁", {
          position: "top-right",
          autoClose: 3000,
        });
        signupandlogin();
        setTimeout(() => navigate("/"), 1500);
      } else {
        toast.error("SignUp Failed !!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("SignUp Failed !!", {
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
      <p className={style.signupp1}>Create Account</p>
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
        <input
          type="password"
          className={style.signupin}
          placeholder="Confirm Password"
          value={cpassword}
          onChange={handleCpassword}
        />
        <input
          type="number"
          className={style.signupin}
          placeholder="Membership Number (optional)"
          value={mnumber}
          onChange={handleMnumber}
        />
        <button className={style.signupbutton} onClick={handleCreateAccount}>
          Create Account
        </button>
        <p className={style.signupalready}>
          Already have an account?{" "}
          <span className={style.gotosignin} onClick={handleSignin}>
            Sign In
          </span>
        </p>
      </div>
    </>
  );
};

export default Signup;
