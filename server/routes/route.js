import express from "express";
import {
  addUser,
  getUsers,
  getUser,
  editUser,
  deleteUserss,
  loginUser,
  registerUser,
} from "../controller/user-controller.js";
//import {  } from "../../client/src/service/api.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);
router.get("/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUserss);
router.post("/login", loginUser);
router.post("/register", registerUser);
export default router;
