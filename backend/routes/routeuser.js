const express = require("express");
const userSchema = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRoute = express.Router();
const multer = require("multer");
const path = require("path");
const { register, login } = require("../controllers/userControllers");
const { isAuth } = require("../middelwares/isAuth");
const {
  registerValidation,
  loginValidation,
  validation,
} = require("../middelwares/RegisterValidation");

// storage engine for multer go see the info ârt defining
// the local storage location so that the files received
// from the client will be saved in the defined location

// const storageEngine = multer.diskStorage({
//   destination: "./uploads",
//   filename: function (req, file, callback) {
//     callback(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// file filter for multer
//   It lets us filter out unwanted files. For this tutorial, we will expect only images.

// Here's the code.
// const fileFilter = (req, file, callback) => {
//   let pattern = /jpg|png|svg/; // reqex

//   if (pattern.test(path.extname(file.originalname))) {
//     callback(null, true);
//   } else {
//     callback("Error: not a valid file");
//   }
// };

// // initialize multer

// const upload = multer({
//   storage: storageEngine,
//   fileFilter: fileFilter,
// });

// routing
// we create the routes for our application.

// Multer. provides a single method for acessing single files. It takes a string as an argument.

userRoute.post(
  "/register",
  registerValidation,
  validation,
  // upload.single("uploadedFile"),
  async (req, res) => {
    try {
 
      const { name, email, password } = req.body;
      // const photo = req.file.filename;
      const found = await userSchema.findOne({ email });
      if (found) {
        return res.json({ msg: "dsl c deja fait, svp imchy logi toul" });
      }
      const newData = {
        name,
        email,
        // photo,
        password,
      };
      const newUser = await new userSchema(newData);
      // l'utilisation de bcrypt
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);
      newUser.password = hash;
      newUser.save();
      res.json(req.file).status(200);
      res.status(200).json({ msg: "u did it , welcome the jungle ", newUser });
    } catch (err) {
      console.log(err);
    }
  }
);

userRoute.post("/login", loginValidation, validation, login);

userRoute.get("/me", isAuth, (req, res) => {
  res.send(req.user);
});

module.exports = userRoute;
