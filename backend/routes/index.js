var express = require('express');
const cors = require('cors');
var router = express.Router();
var multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'D:/durgesh sir uni/UPDATE-PRO/app/public')
  },
  filename: function (req, file, cb) {
    console.log("file", file);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    console.log("uniqueSuffix", uniqueSuffix);
    cb(null, file.originalname)
  }
})
var upload = multer({storage:storage});
var indexController = require("../controller/controller");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login');
});

router.get('/home', function (req, res, next) {
  res.render('index');
});

router.get("/signup", function (req, res, next) {
  res.render('signup')
})

router.get("/forgot", function (req, res) {
  res.render("forgot")
})

router.get("/delete-user", function (req, res) {
  res.render("delete-user")
})

router.use(cors())


router.post("/register", upload.single(), indexController.signupConstroller);
router.post("/login", upload.single(), indexController.loginController);
router.post("/forgot-password", upload.single(), indexController.forgotController)
router.post("/user-enter", upload.single(), indexController.userControlller);
router.post("/userDelete/:email", upload.single(), indexController.deleteController)
router.post("/userUpdate/:email", upload.single("image"), indexController.updateController);
router.get("/userDetailbyEmail/:email", upload.single(), indexController.userDetailByNameController);
router.get("/userDetails/:email", upload.single(), indexController.allUserDetailscontrolller);
router.post("/imageUpload/:email", upload.single("image"), indexController.imageUpload);


module.exports = router;
