import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, Tabs } from "antd";
import informationData from "../information/termsData";
import Classcmp from "./Classcmp";
import PaymentWalllet from "./PaymentWalllet";
// import  { Tabs } from 'antd';

export default function Dashboard() {
  const [role, setRole] = useState("");
  const [termsData, setTermsData] = useState([{}]);
  useEffect(() => {
    var role = localStorage.getItem("role");
    setRole(role);
    setTermsData(informationData);
  }, []);

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `Account Information`,
      children: <h1>Content of Tab Pane 1</h1>,
    },
    {
      key: "2",
      label: `Terms and Conditions`,
      children: (
        <div>
          <h1>Read all terms and Conditions carefully</h1>
          {termsData.map((data, i) => {
            return (
              <h4>
                {i + 1}. {data.terms}
              </h4>
            );
          })}
        </div>
      ),
    },
    {
      key: "3",
      label: `User Settings`,
      children: <h1>Content of Tab Pane 1</h1>,
    },
  ];

  return (
    <div>
      {role == "Manager" ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* <h1>All user Details</h1 */}
          <Link to="userdetails">
            <Card
              title="All User Details"
              style={{
                width: 300,
              }}
            >
              <p>See user</p>
            </Card>
          </Link>

          {/* <h1>Add New User</h1> */}

          <Link to="adduser">
            <Card
              title="Add New User"
              style={{
                width: 300,
              }}
            >
              <p>You can add new user</p>
            </Card>
          </Link>
          {/* <h1>Assign New Task</h1> */}
          <Link to="assigntask">
            <Card
              title="Assign new task"
              style={{
                width: 300,
              }}
            >
              <p>You can assign new task</p>
            </Card>
          </Link>
        </div>
      ) : (
        <>
          <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
          <div>

            {/* <Classcmp/> */}
            <PaymentWalllet/>
          </div>
        </>
      )}
    </div>
  );
}
