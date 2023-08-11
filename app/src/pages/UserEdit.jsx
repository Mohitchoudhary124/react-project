import React from "react";

export default function UserEdit() {
  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {/* {userDetails && userDetails.length > 0 ? (
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
        )} */}

        {/* <p>UserEdit</p> */}
        <div >
          <div className="row align-items-center">
          
            <div className="col-sm-7 col-md-7 col-lg-5 p-5">
              <div className="form-design">
                <h1>User Update</h1>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    // className="form-control"
                    // value={userDetails?.name}
                    onChange={(e) => {
                    //   setName(e.target.value);
                    }}
                    name="name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    // className="form-control"
                    // value={userDetails?.email}
                    name="email"
                    onChange={(e) => {
                    //   setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="text"
                    // className="form-control"
                    // value={userDetails?.mob_no}
                    name="mobile"
                    onChange={(e) => {
                    //   setMobile(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">address</label>
                  <input
                    type="text"
                    // className="form-control"
                    // value={userDetails?.address}
                    name="address"
                    onChange={(e) => {
                    //   setAddress(e.target.value);
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
                    // onClick={handleUpdate}
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
