const url = "mongodb://0.0.0.0:27017/";
const { MongoClient } = require("mongodb");

async function dbConnect() {
  const client = new MongoClient(url);
  const db = client.db("admin");
  const collection = db.collection("users");
  console.log("database connected");
  if (collection) {
    return collection;
  }
}

module.exports=dbConnect;