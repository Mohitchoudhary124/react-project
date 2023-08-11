import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Message from "./Message";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [addclass, setAddclass] = useState("")

  const handleLogin = () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    axios
      .post("http://localhost:5000/login", formData)
      .then((response) => {
        console.log("response", response);
        if (response.data.status == 1) {
          setMessage(response.data.Message);
          setAddclass("success-message")
          setStatus(true);
          localStorage.setItem("email",response.data.email);
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("role",response.data.role);
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          setStatus(true);
          setMessage(response.data.Message);
          setAddclass("failed-message");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(()=>{
    var email=localStorage.getItem("email");
    var token=localStorage.getItem("token");
    if(email&&token){
      navigate("/dashboard");
    }
  })
  return (
    <div>
      {status ? (<Message addclass={addclass} message={message} />) : (<></>)}
      <section className="signup">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-5 col-md-5 col-lg-7">
              <div className="grap-img">
                <img src="https://www.pngarts.com/files/16/Exam-Transparent-Image.png" />
              </div>
            </div>
            <div className="col-sm-7 col-md-7 col-lg-5 p-5">
              <div className="form-design">
                <h1>Login</h1>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    className="form-control"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className=" mb-3">
                  <label
                    htmlFor="exampleInputPassword1 "
                    className="form-label "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    className="form-control "
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <a href="/forgotpassword">Forgot password</a>
                </div>

                <button
                  type="submit "
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <div className="pt-4 d-flex align-items-center justify-content-between">
                  <a href="/registration">Go to Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
