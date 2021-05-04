const express = require('express')

const { User } = require('../models/user.model');

const userRouter = express.Router();

const bcrypt = require('bcrypt');

userRouter.param("uname", async (req, res, next, name) => {
  try {
    const user = await User.findOne({ uname: name });
    req.user = user;
    next();
  } catch (error) {
    res.staus(404).json({
      success: false,
      message: "user not found"
    })
  }
})


userRouter.route("/")
  .post(async (req, res) => {
    try {
      const { uname, email, password } = req.body;

      if (uname && email && password) {

        const hashedPassword = await bcrypt.hash(password, 6);

        console.log(hashedPassword)


        const user = new User({
          uname: uname,
          email: email,
          password: hashedPassword
        })

        await user.save();


        res.status(201).json({
          success: true,
          message: "user created successfully",
          data: user
        })

        return;
      }

      res.status(206).json({
        success: false,
        message: "provide full data"
      })


    } catch (error) {
      res.status(500).json({
        success: true,
        messsage: "Error while creating new user, choose a different user name",
        error
      })
    }
  })
 

userRouter.route("/:uname")
  .post(async (req, res) => {
    try {
      const { uname, password } = req.body;
      const { user } = req;



      if (!uname || !password) {
        throw "Partial data";
      }

      const match = await bcrypt.compare(password, user.password)

      if (match) {
        res.status(200).json({
          success: true,
          message: "user is authenticated",
          data: user
        })

        return;
      }

      res.status(403).json({
        success: false,
        message: "Wrong password",
      })

    } catch(error) {
      res.status(500).json({
        success: false,
        message: "error while checking passoword",
        error
      })
    }

  })

exports.userRouter = userRouter

