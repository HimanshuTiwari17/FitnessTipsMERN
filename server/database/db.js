import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-m6wmhpd-shard-00-00.hxrp95n.mongodb.net:27017,ac-m6wmhpd-shard-00-01.hxrp95n.mongodb.net:27017,ac-m6wmhpd-shard-00-02.hxrp95n.mongodb.net:27017/?ssl=true&replicaSet=atlas-46le2j-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {});
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};
export default Connection;
