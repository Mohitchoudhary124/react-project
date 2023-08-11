import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../logo.png";
import axios from "axios";
import image from "../screen2.png"

function Navbar() {
  var email = localStorage.getItem("email");
  var navigate = useNavigate();
  const [imageName,setImageName]=useState("");
console.log("imageName",imageName);


  const handleLogout = () => {
    var email = localStorage.removeItem("email");
    var token = localStorage.removeItem("token");
    if (!email && !token) {
      navigate("/");
    }
  };

  useEffect(() => {
    var email = localStorage.getItem("email");
    var token = localStorage.getItem("token");
    if (!email && !token) {
      navigate("/");
    }
    else{
      if (email) {
        axios
          .get(`http://localhost:5000/userDetailbyEmail/${email}`)
          .then((response) => {
            console.log("backend response", response);
            setImageName(response.data.data.image);
          })
          .catch((error) => {
            console.log("backend error", error);
          });
      }
    }
  }, [email]);
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </NavLink>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  {email ? (
                    <NavLink className="nav-link" to="/Profile">
                      {email ? "Profile" : "Registration"}
                    </NavLink>
                  ) : (
                    <NavLink className="nav-link" to="/Registration">
                      {email ? "Profile" : "Registration"}
                    </NavLink>
                  )}
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Login">
                    {email ? "Dashboard" : "Login"}
                  </NavLink>
                </li>
                   <li className="nav-item">
                  <NavLink className="nav-link" to="/Login">
                    {email ? <img src={`../${imageName}`} width={50} height={50} alt="image" style={{borderRadius:25}} ></img>: ""}
                  </NavLink>
                </li>
                <div>
                  <li className="nav-item">
                    <button
                      className="nav-link"ss
                      style={{ margin: "-8px" }}
                      onClick={handleLogout}
                    >
                      <NavLink className="nav-link" to="/Login">
                        {email ? "Logout" : null}
                      </NavLink>
                    </button>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Navbar;
