import User from "../model/user.js";
import LoginDetails from "../model/loginRegister.js";
//const User = require("../models/user.js");
import { v4 as uuidv4 } from "uuid";
// export const addUser = async (request, response) => {
//   const user = request.body;

//   //user.id = uuidv4(); // Append the id from request.params to request.body
//   console.log(user);
//   const newUser = new User(user);
//   try {
//     await newUser.save();
//     response.status(201).json(newUser);
//   } catch (error) {
//     response.status(409).json({ message: error.message });
//   }
// };

export const addUser = (req, res) => {
  const task = req.body;
  console.log(task);
  User.create(task)
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};
export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json(user);
};
export const editUser = async (req, res) => {
  let user = req.body;
  const editUser = new User(user);
  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.status(201).json(editUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deleteUserss = async (request, response) => {
  try {
    await User.deleteOne({ _id: request.params.id });
    response.status(201).json("User deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  LoginDetails.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
};
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  LoginDetails.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" });
    } else {
      const user = new LoginDetails({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
};
