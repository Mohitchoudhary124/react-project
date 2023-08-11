import React,{useState,useEffect} from 'react';
import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import UserEdit from "./UserEdit";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function UserDetails() {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState([]);
    const [model, setModel] = useState(true);
    var email = localStorage.getItem("email");
    const handleLogout = () => {
      var email = localStorage.removeItem("email");
      var token = localStorage.removeItem("token");
      if (!email && !token) {
        navigate("/");
      }
    };
  
    const getAllUser = () => {
      axios
        .get(`http://localhost:5000/userDetails/${email}`)
        .then((response) => {
          console.log("backend response", response);
          setUserDetails(response.data.data);
        })
        .catch((error) => {
          console.log("backend error", error);
        });
    };
  
    const handleEdit = () => {
      console.log("Edit function called here");
      setModel(false);
    };
  
    const handleDelete = (email) => {
      console.log("Delet function called");
      var text = window.confirm("Are you sure want to delete this email?");
      if (text) {
        axios
          .post(`http://localhost:5000/userDelete/${email}`)
          .then((response) => {
            console.log("backend response: " + JSON.stringify(response));
            var stringData = JSON.stringify(response);
            var parseData = JSON.parse(stringData);
            if (parseData) {
              getAllUser();
            }
          })
          .catch((error) => {
            console.log("error: " + error);
          });
      } else {
      }
    };
  
    useEffect(() => {
      var email = localStorage.getItem("email");
      var token = localStorage.getItem("token");
      if (!email && !token) {
        navigate("/");
      } else {
        if (email) {
          getAllUser();
        }
      }
    }, [email]);
  return (
      <div>{
      model?<div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {userDetails && userDetails.length > 0 ? (
          userDetails.map((data) => {
            return (
              <div key={data._id} style={{ padding: "10px" }}>
                <Card
                  title="User Details"
                  bordered={false}
                  style={{
                    width: 300,
                  }}
                >
                  <p>Name:{data.name}</p>
                  <p>Email {data.email}</p>
                  <p>Address {data.address}</p>
                  <p>Role {data.role}</p>
                  <span style={{ marginRight: "55px" }}>
                    <button
                      onClick={() => handleDelete(data.email)}
                      style={{ color: "red" }}
                    >
                      <DeleteOutlined />
                    </button>
                  </span>
                  <span>
                    <button onClick={() => handleEdit(data.email)}
                      style={{ color: "green" }}>Edit</button>
                  </span>
                </Card>
              </div>
            );
          })
        ) : (
          <div style={{ padding: "10px" }}>
            <Card
              title="User Details"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <p>Data not found</p>

            </Card>
          </div>
        )}
      </div>:<UserEdit/>
    }
      {/* <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {userDetails && userDetails.length > 0 ? (
          userDetails.map((data) => {
            return (
              <div key={data._id} style={{ padding: "10px" }}>
                <Card
                  title="User Details"
                  bordered={false}
                  style={{
                    width: 300,
                  }}
                >
                  <p>name:{data.name}</p>
                  <p>email {data.email}</p>
                  <p>Address {data.address}</p>
                  <span style={{ marginRight: "55px" }}>
                    <button
                      onClick={() => handleDelete(data.email)}
                      style={{ color: "red" }}
                    >
                      <DeleteOutlined />
                    </button>
                  </span>
                  <span>
                    <button onClick={() => handleEdit(data.email)}
                      style={{ color: "green" }}>Edit</button>
                  </span>
                </Card>
              </div>
            );
          })
        ) : (
          <div style={{ padding: "10px" }}>
            <Card
              title="User Details"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <p>Data not found</p>

            </Card>
          </div>
        )}
      </div> */}

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
