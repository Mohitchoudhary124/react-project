import React, { useState } from "react";
import axios from "axios";
import Message from "./Message";
import { Link, useNavigate } from "react-router-dom";

export default function Registration(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [active, setActive] = useState("active");
  const [confirmpassowrd, setConfirmpassowrd] = useState();
  const [addclass, setAddclass] = useState("")
  const [role,setRole]=useState("");
  console.log("handleRegister function called here");
  const handleRegister = () => {
    // return;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("mob_no", mobile);
    formData.append("a_status", active);
    formData.append("role", role);
    formData.append("confirmpassowrd", confirmpassowrd);
    axios
      .post("http://localhost:5000/register", formData)
      .then((response) => {
        console.log("response", response);
        if (response.data.status == 1) {
          setStatus(true);
          setName(name);
          setAddclass("success-message");
          setMessage(response.data.Message);
          setTimeout(() => {
            navigate("/Login");
          }, 2000);
        } else {
          setStatus(true);
          setName(name);
          setAddclass("failed-message");
          setMessage(response.data.Message);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  console.log("selected Role is",role);

  const handleAddUser = () => {
    console.log("handlAddUser function called here");
  };
  return (
    <div>
      <section className="signup">
        {status ? <Message addclass={addclass} message={message} /> : <></>}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-5 col-md-5 col-lg-7">
              <div className="grap-img">
                <img
                  src="https://www.pngarts.com/files/16/Exam-Transparent-Image.png"
                  alt=".."
                />
              </div>
            </div>
            <div className="col-sm-7 col-md-7 col-lg-5 p-5">
              <div className="form-design">
                <h1>{props?.title ? props.title : "Sign Up"}</h1>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    name="name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={mobile}
                    name="mobile"
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">address</label>
                  <input
                    type="text"
                    className="form-control"
                    value={address}
                    name="address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="exampleInputPassword1 "
                    className="form-label "
                  >
                    User Type
                  </label>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div class="form-check">
                      <input class="form-check-input" value="Employee" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e)=>setRole(e.target.value)} />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Employee
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" value="Manager" name="flexRadioDefault" id="flexRadioDefault2" onChange={(e)=>setRole(e.target.value)} />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Manager
                      </label>
                    </div>
                  </div>
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
                    className="form-control"
                    value={password}
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className=" mb-3">
                  <label
                    htmlFor="exampleInputPassword1 "
                    className="form-label "
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={confirmpassowrd}
                    name="confirmpassowrd"
                    onChange={(e) => {
                      setConfirmpassowrd(e.target.value);
                    }}
                  />
                </div>

                {/* <div className=" mb-3">
                                    <label htmlFor="exampleInputPassword1 " className="form-label ">status</label>
                                    <input type="text" className="form-control" value={status} name="status" onChange={(e) => { setStatus(e.target.value) }} />
                                </div> */}
                <div className="pt-4 d-flex align-items-center justify-content-between">
                  <button
                    type="submit"
                    className="btn btn-primary "
                    onClick={props.title ? handleAddUser : handleRegister}
                  >
                    {props.title ? "Add User" : "Sign Up"}
                  </button>
                  {props.title ? "" : <Link to="/login">Go to Login</Link>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
