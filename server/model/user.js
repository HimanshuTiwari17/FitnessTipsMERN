import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String },

  //id: { type: String, required: true },
});

const User = new mongoose.model("users", userSchema);
//module.exports = mongoose.model("User", userSchema);
export default User;
