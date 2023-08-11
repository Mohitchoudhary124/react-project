import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleForgot = () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    axios
      .post("http://localhost:5000/forgot-password", formData)
      .then((response) => {
        console.log("response", response);
        if (response.data.status == 1) {
          setMessage(response.data.Message);
          setStatus(true);
          setTimeout(() => {
            navigate("/about");
          }, 2000);
        } else {
          setStatus(true);
          setMessage(response.data.Message);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <section className="signup">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-md-7">
              <div className="grap-img">
                <img src="https://www.pngarts.com/files/16/Exam-Transparent-Image.png" />
              </div>
            </div>
            <div className="col-sm-6 col-md-5 p-5">
              <div className="form-design">
                <h1>Forgot Password</h1>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Email</label>
                  <input type="email" className="form-control" value={email} name="email" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className=" mb-3">
                  <label htmlFor="exampleInputPassword1 " className="form-label ">Password</label>
                  <input type="password" className="form-control" value={password} name="password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <div className=" mb-3">
                  <label htmlFor="exampleInputPassword1 " className="form-label ">Confirm Password</label>
                  <input type="password" className="form-control" value={confirmPassword} name="confirmPassword" onChange={(e) => { setConfirmPassword(e.target.value) }} />
                </div>

                <div className="pt-4 d-flex align-items-center justify-content-between">
                  <button onClick={handleForgot} type="submit" className="btn btn-primary">Change Password</button>
                  <a href="/registration">Go to Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
