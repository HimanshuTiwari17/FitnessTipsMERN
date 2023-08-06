import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const loginRegister = new mongoose.model("loginRegister", userSchema);
export default loginRegister;
