import React, { useState } from "react";
import axios from "axios";

const Order = ({ dish, onClose, onOrder }) => {
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");
  const [totalPrice, setTotalPrice] = useState(dish.price_rs);
  const [dishName, setDishName] = useState(dish.name);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * dish.price_rs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onOrder();
    onClose();
  };

  // const submit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:3000/", {
  //       dishName: dishName,
  //       quantity: quantity,
  //       address: address,
  //       totalPrice: totalPrice
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body text-center">
              <img
                src={dish.img}
                alt={dish.name}
                className="img-thumbnail rounded-circle mb-4"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <h2 className="card-title mb-4">Order {dish.name}</h2>
              <form onSubmit={handleSubmit} action="POST">
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="quantity" className="form-label">Quantity</label>
                  <input type="number" className="form-control" id="quantity" value={quantity} onChange={handleQuantityChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="totalPrice" className="form-label">Total Price</label>
                  <input type="text" className="form-control" id="totalPrice" value={`Rs. ${totalPrice}`} readOnly />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
