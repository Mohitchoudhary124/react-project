var express = require("express");
var app = express();
var multer = require("multer");
const cors=require("cors");
var upload = multer();
app.use(express.urlencoded());
app.set("view engine", "ejs");
var indexController=require("./controllers/index");
app.use(cors());
app.get("/", function (req, res) {
  res.send("hellooo");
});
app.get("/name", function (req, res) {
  res.render("req in name", res);
  console.log("req in name", req);
  res.send({ Actor: "aksay kumar" });
});

app.get("/userlogin", function (req, res) {
  res.render("login", { title: "hello" });
});
app.post("/register", upload.single(),indexController.registerController );
app.post("/login", upload.single(),indexController.loginController );

app.get("/user/:id", upload.single(), function (req, res) {
  var id = req.params.id;
  console.log("id", id);
  res.send({ message: "get by id params", status: 1, id: id });
});
// user delete by email
app.post("/userDelete/:email", async function (req, res) {
  const { email } = req.params;
  console.log("email", email);
  var response = await dbConnect();
  var result = await response.find({ email: email }).toArray();
  console.log("result: ", result);
  if (result.length > 0) {
    var userDelated = await response.deleteOne({ email: email });
    if (userDelated) {
      res.send({ message: "user deleted", status: 1 });
    } else {
      res.send({ message: "user not deleted", status: 0 });
    }
  } else {
    res.send({ message: "user not found", status: 0 });
  }
});   

//imgae upload api

app.post('/imageUpload/:email', upload.single("image"),function(req, res){
           
});
app.post("/userUpdate/:email", upload.single(), async function (req, res) {
  const { email } = req.params;
  const { name, address, m_no, password } = req.body;
  console.log("email", email);
  var response = await dbConnect();
  var result = await response.find({ email: email }).toArray();
  console.log("result: ", result);
  if (result.length > 0) {
    var userDelated = await response.updateMany(
      { email: email },
      { $set: { password: password, address: address, name: name, m_no: m_no } }
    );
    if (userDelated) {
      res.send({ message: "User Updated successfully", status: 1 });
    } else {
      res.send({ message: "User not Updated", status: 0 });
    }
  } else {
    res.send({ message: "user not found", status: 0 });
  }
});

app.post("/forgot-password", upload.single(), async function (req, res) {
  const { email, newpassword, confirmpassword } = req.body;
  if (newpassword == confirmpassword) {
    var response = await dbConnect();
    var result = await response.find({ email: email }).toArray();
    if (result.length > 0) {
      var updatePassword = await response.updateMany(
        { email: email },
        { $set: { password: newpassword } }
      );
      if (updatePassword) {
        res.send({ message: "Password updated successfully", status: 1 });
      } else {
        res.send({ message: "Password not updated", status: 0 });
      }
    } else {
      res.send({
        message: "User not found please registyer first with us",
        status: 0,
      });
    }
  } else {
    res.send({
      message: "new password and confirm password did not matched",
      status: 0,
    });
  }
});

app.listen(5000, ()=> {
  console.log("server running on the port http://localhost:5000");
});
