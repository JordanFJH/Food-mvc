const mongoose = require("mongoose");

// Connecting Mongo DB to the project
const mongoConfig = async () => {
  try {
    const result = await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected", result.connection.host);
  } catch (error) {
    console.log("Mongo Error: ", error);
  }
};

module.exports = mongoConfig;
