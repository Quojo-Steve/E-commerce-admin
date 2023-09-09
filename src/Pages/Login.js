import React from "react";
// import { useHistory } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
import avatar from "../images/avatar.svg";
import wave from "../images/wave.png";
import bg from "../images/bg.svg";
import { BsLockFill } from "react-icons/bs";
import {HiUserCircle} from "react-icons/hi"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./Login.css";

const Login = () => {
  const notify = (e) => {
    e.preventDefault();
    
    toast.success('JEssica', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [err, seterr] = useState("");

  // const navigat = useNavigate();

  // const loginfunc = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://127.0.0.1:7000/token/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       const token = data.auth_token;

  //       localStorage.setItem("token", token);

  //       navigat("/home");
  //     } else {
  //       seterr("Invalid credentials");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   const sign_in_btn = document.querySelector("#sign-in-btn");
  //   const sign_up_btn = document.querySelector("#sign-up-btn");
  //   const container = document.querySelector(".container");

  //   const handleSignUpClick = () => {
  //     container.classList.add("sign-up-mode");
  //   };

  //   const handleSignInClick = () => {
  //     container.classList.remove("sign-up-mode");
  //   };

  //   if (sign_in_btn && sign_up_btn && container) {
  //     sign_up_btn.addEventListener("click", handleSignUpClick);
  //     sign_in_btn.addEventListener("click", handleSignInClick);
  //   }

  //   return () => {
  //     // Clean up the event listeners when the component is unmounted
  //     if (sign_in_btn && sign_up_btn && container) {
  //       sign_up_btn.removeEventListener("click", handleSignUpClick);
  //       sign_in_btn.removeEventListener("click", handleSignInClick);
  //     }
  //   };
  // }, []);

  return (
    <div className="body">
      <img className="wave" src={wave} alt=""/>
      <div className="container1">
        <div className="img">
          <img src={bg} alt=""/>
        </div>
        <div className="login-content">
          <form className="form" >
            <img src={avatar} alt=""/>
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <HiUserCircle className="icons font-bold text-black text-5xl"/>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input type="text" className="input" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <BsLockFill className="icons font-bold text-black text-5xl"/>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input type="password" className="input" />
              </div>
            </div>
            <a className="forgot" href="/" >Forgot Password?</a>
            <input type="submit" className="btn" value="Login" onClick={notify} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
