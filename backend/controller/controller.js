var nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

// Mongo db conction and add URL
const url = "mongodb://0.0.0.0:27017/";
const { MongoClient } = require("mongodb");
 async function verifyUser(token){
  return new  Promise((resolve,reject)=>{
    if(token){
      Jwt.verify(token,"myAppTokan",function(err){
        if(err){
          console.log("error",err);
          return resolve( false);
        }
        else{
          return resolve(true);
        }
      })
    }
    else{
      res.send({message:"Token is not found",status:0});
    }
  })
}

// Use function for connect db and target user list only
async function dbConnect() {
  const client = new MongoClient(url);
  const db = client.db("admin");
  const collection = db.collection("users");
  console.log("database connected ");
  if (collection) {
    return collection;
  }
}

// Use function for check sign up user status check active or not
async function isUserActive(post) {
  // console.log("post", post);
  let a_status = post.a_status;
  if (a_status == "active") {
    return true;
  } else {
    return false;
  }
}

const loginController = async function (req, res) {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (email && password) {
      let response = await dbConnect();
      var user = await response.findOne({ email: email });
      if (user) {
        if (email == user.email) {
          bcrypt.compare(
            password,
            user.password,
            async function (error, result) {
              if (result) {
                const token = Jwt.sign({ email: user.email }, "myAppTokan", {
                  expiresIn: "84600s",
                });
                const updatetoken = await response.updateMany(
                  { email: email },
                  { $set: { token: token } }
                );
                if (updatetoken) {
                  res.send({
                    Message: "login successfull",
                    status: 1,
                    email: email,
                    token: token,
                    role:user.role
                  });
                } else {
                  res.send({ Message: "Token not ganrated", status: 0 });
                }
              } else {
                res.send({
                  Message: "login not successfully due to wrong Password ",
                  status: 0,
                });
              }
            }
          );
        } else {
          res.send({ Message: "Email not found", status: 0 });
        }
      } else {
        res.send({ Message: "Email and Password didnt match", status: 0 });
      }
    } else {
      res.send({ Message: "Email & password is required", status: 0 });
    }
  } catch (error) {
    console.log(error);
  }
};

const userControlller = async function (req, res) {
  try {
    const { email, newpassword, confirmpassword } = req.body;
    if (email && newpassword) {
      console.log("email :" + email, "password: " + newpassword);
      let response = await dbConnect();
      let user = await response.find({ email: email }).toArray();
      if (user.length > 0) {
        res.send({ Message: "login" });
      } else {
        res.send({ Message: "not login" });
      }
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};

const allUserDetailscontrolller = async function (req, res) {
  try {
    const { email } = req.params;
    if (email) {
      console.log("email :" + email);
      let response = await dbConnect();
      let user = await response.find({role:"Employee"}).toArray();
      if (user.length > 0) {
        res.send({
          Message: "All user details fetched",
          status: 1,
          data: user,
        });
      } else {
        res.send({ Message: "All user not fetched", status: 0 });
      }
    } else {
      res.send({ Message: "User not found", status: 0 });
    }
  } catch (error) {
    console.log(error);
  }
};

const imageUpload = async function (req, res) {
  try {
    const { email } = req.params;
    console.log("req",req);
           const image=req.file;
           const imgaeName=image.originalname;
           console.log("imgaeName",imgaeName);
           let response = await dbConnect();
           const verifyuser = await response.findOne({ email: email });
           if (verifyuser) {
             // bcrypt.compare(
             //   password,
             //   verifyuser.password,
               // async function (error, result) {
                 // if (result) {
                   var userDetails = await response.updateMany(
                     { email: email },
                     { $set: { image:imgaeName } }
                   );
           }
    
    // if (email) {
    //   console.log("email :" + email);
    //   let response = await dbConnect();
    //   let user = await response.find({role:"Employee"}).toArray();
    //   if (user.length > 0) {
    //     res.send({
    //       Message: "All user details fetched",
    //       status: 1,
    //       data: user,
    //     });
    //   } else {
    //     res.send({ Message: "All user not fetched", status: 0 });
    //   }
    // } else {
    //   res.send({ Message: "User not found", status: 0 });
    // }
  } catch (error) {
    console.log(error);
  }
};

const signupConstroller = async function (req, res) {
  try {
    let result = await isUserActive(req.body);
    if (result) {
      const {
        email,
        password,
        confirmpassowrd,
        mob_no,
        a_status,
        address,
        name,
        role
      } = req.body;
      if (password == confirmpassowrd) {
        if (email && password && mob_no && a_status) {
          let securepassword = await bcrypt.hash(password, 10);
          let response = await dbConnect();
          let userfind = await response.find({ email: email }).toArray();
          if (userfind.length <= 0) {
            let datainsert = response.insertOne({
              name: name,
              email: email,
              password: securepassword,
              mob_no: mob_no,
              status: a_status,
              address: address,
              role:role
            });
            if (datainsert) {
              var transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                auth: {
                  user: "gurjar.ashu201092r@gmail.com",
                  pass: "mfxkxswfsafecfzm",
                },
              });

              let info = await transporter.sendMail({
                from: "gurjar.ashu201092r@gmail.com", // sender address
                to: email, // list of receivers
                subject: "Welcome Message", // Subject line
                text: "Hello user?", // plain text body
                html: "<b>Hello user?</b>", // html body
              });
              if (info) {
                res.send({
                  Message: "registration successfull & send email",
                  status: 1,
                });
              } else {
                res.send({
                  Message: "registration Succesfull but email not send",
                  status: 0,
                });
              }
            } else {
              res.send({ Message: "registration not successfull", status: 0 });
            }
          } else {
            res.send({ Message: "Usre already Register", status: 0 });
          }
        } else {
          res.send({
            Message: "Email && Password Mobile No is required",
            status: 0,
          });
        }
      } else {
        res.send({
          Message: "Your Password & Confirm Password did not match",
          status: 0,
        });
      }
    } else {
      res.send({ Message: "Your Status not Active", status: 0 });
    }
  } catch (error) {
    console.log(error);
  }
};

const forgotController = async function (req, res) {
  try {
    const { email, newpassword, confirmpassword } = req.body;
    if (email && newpassword && confirmpassword) {
      if (newpassword == confirmpassword) {
        let securepassword = await bcrypt.hash(newpassword, 10);
        let response = await dbConnect();
        let userfind = await response.find({ email: email }).toArray();
        if (userfind.length > 0) {
          let updatepassword = await response.updateMany(
            { email: email },
            { $set: { password: securepassword } }
          );
          if (updatepassword) {
            res.send({ Message: "Password updated", status: 1 });
          } else {
            res.send({ Message: "Password not update", status: 0 });
          }
        } else {
          res.send({ Message: "User not Register", status: 0 });
        }
      } else {
        res.send({ Message: "Passowrd not match", status: 0 });
      }
    } else {
      res.send({
        Message: "email,password,confirmpassword is required",
        status: 0,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteController = async function (req, res) {
  try {
    const { email } = req.params;
    console.log("email",email);
    if (email) {
      // let userpassword = await bcrypt.hash(password, 10);
      let response = await dbConnect();
      const verifyuser = await response.findOne({ email: email });
      if (verifyuser) {
        let deleteuser = await response.deleteOne({ email: email });
        if (deleteuser) {
          res.send({
            Message: "User data deleted",
            status: 1,
          });
        } else {
          res.send({ Message: "User data not deleted", status: 0 });
        }
      } else {
        res.send({ Message: "User not found in Database", status: 0 });
      }
    } else {
      res.send({
        Message: "Email not found",
        status: 0,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateController = async function (req, res) {
  try {
    const { name, mobile, address } =
      req.body;
      console.log("mobile: " + mobile);
      console.log("req: ",req)
      const email=req.params.email;
      console.log("req.file",req.file);
      const image=JSON.stringify(req.body.image);
      console.log("req.file",image);
    
      // return;
      const token=req.headers.authorization;
      console.log("token: ",token)//true
      var result =await verifyUser(token);//false
      console.log("result: ",result);
      if(result){
        if (email) {
          let response = await dbConnect();
          const verifyuser = await response.findOne({ email: email });
          if (verifyuser) {
            // bcrypt.compare(
            //   password,
            //   verifyuser.password,
              // async function (error, result) {
                // if (result) {
                  var userDetails = await response.updateMany(
                    { email: email },
                    { $set: { address: address, name: name, mob_no: mobile } }
                  );
                  if (userDetails) {
                    var transporter = nodemailer.createTransport({
                      host: "smtp.gmail.com",
                      port: 465,
                      auth: {
                        user: "gurjar.ashu201092r@gmail.com",
                        pass: "mfxkxswfsafecfzm",
                      },
                    });
  
                    let info = await transporter.sendMail({
                      from: "gurjar.ashu201092r@gmail.com", // sender address
                      to: email, // list of receivers
                      subject: "Welcome Message", // Subject line
                      text: "Hello user?", // plain text body
                      html: "<b>Hello user?</b>", // html body
                    });
                    if (info) {
                      res.send({
                        Message: "User Updated successfully and send mail",
                        status: 1,
                      });
                    } else {
                      res.send({
                        Message: "mail not send any error in smtp",
                        status: 0,
                      });
                    }
                  } else {
                    res.send({
                      Message:
                        "user details not updated some details are missing",
                      status: 0,
                    });
                  }
                // } 
              // }
            // );
          } else {
            res.send({ Message: "user not found", status: 0 });
          }
        // } 
      } else {
        res.send({
          Message: "email, password & confirm password are required",
          status: 0,
        });
      }
      }
      else{
        res.send({
          Message: "Token is not valid",
          status: 0,
        });
      }
   
  } catch (error) {
    console.log(error);
  }
};

const userDetailByNameController = async function (req, res) {
  var email = req.params.email;
  let response = await dbConnect();
  const verifyuser = await response.findOne({ email: email });
  if (verifyuser) {
    res.send({ message: "user fetched by email", status: 1, data: verifyuser });
  } else {
    res.send({ message: "user not fetched by email", status: 0 });
  }
};

module.exports = {
  loginController,
  signupConstroller,
  forgotController,
  deleteController,
  updateController,
  userControlller,
  userDetailByNameController,
  allUserDetailscontrolller,
 imageUpload

};
