const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/resto1")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Connection to MongoDB failed:", error);
  });

const newSchema = new mongoose.Schema({
  dishName: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  totalPrice: {
    type: String,
    required: true
  }
});

const OrderModel = mongoose.model("Order", newSchema);

module.exports = OrderModel;
