import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Message from "../user-process/Message";
export default function Profile() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState("active");
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");
  const [confirmpassowrd, setConfirmpassowrd] = useState();
  const [addclass, setAddclass] = useState("");
  const [formStatus,setFormStatus]=useState(true);
  const [image,setImage] = useState("");
console.log("Image",image);
  const handleUpdate = (e) => {
    const formData = new FormData();

    formData.append("name", name);
    // formData.append("email", email);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("mobile", mobile);
    formData.append("a_status", active);
    formData.append("confirmpassowrd", confirmpassowrd);
    formData.append("image",image);
    axios
      .post(`http://localhost:5000/userUpdate/${email}`, formData,{
        headers: {'Content-Type': 'application/json',Authorization:localStorage.getItem("token")},
      })
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

const handleImage=(e)=>{
  e.preventDefault();
  const formData = new FormData();
const image=e.target.files[0];
console.log("image",image);
  formData.append("image", image);
  axios
  .post(`http://localhost:5000/imageUpload/${email}`, formData,{
    headers: {'Content-Type': 'multipart/form-data',Authorization:localStorage.getItem("token")},
  }) .then((response) => {
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
}

  useEffect(() => {
    var email = localStorage.getItem("email");
    var token = localStorage.getItem("token");
    if (!email && !token) {
      navigate("/");
    } else {
      if (email) {
        axios
          .get(`http://localhost:5000/userDetailbyEmail/${email}`)
          .then((response) => {
            console.log("backend response", response);
            setUserDetails(response.data.data);
            setName(response.data.data.name);
            setEmail(response.data.data.email);
            setMobile(response.data.data.mob_no);
            setAddress(response.data.data.address);
          })
          .catch((error) => {
            console.log("backend error", error);
          });
      }
    }
  }, [email]);


  useEffect(()=>{
         if(name&&mobile&&address){
          setFormStatus(true);
         }
         else{
          setFormStatus(false);
         }
  },[name,mobile,address]);
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
                <h1>User Details</h1>
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
                {/* <div className="mb-3">
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
                </div> */}
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

                  <input type="file" name="image" onChange={(e)=>handleImage(e)}></input>
                </div>

                {/* <div className=" mb-3">
                            <label htmlFor="exampleInputPassword1 " className="form-label ">status</label>
                            <input type="text" className="form-control" value={status} name="status" onChange={(e) => { setStatus(e.target.value) }} />
                        </div> */}
                <div className="pt-4 d-flex align-items-center justify-content-between">
                  <button
                    type="submit"
                    className="btn btn-primary "
                    disabled={!formStatus}
                    onClick={handleUpdate}
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
