import React, { useState } from "react";
import Dishes from "../Dishes.json";
import Order from "../pages/Order";

const Body = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const handleOrder = () => {
    alert("Your order is placed.");
  };

  return (
    <>
      {Dishes.dishes.map((dish) => (
        <div
          key={dish.id}
          className="row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-center"
        >
          <div
            className="card mb-3 shadow-lg p-3 mb-5 bg-white rounded"
            style={{ maxWidth: "540px" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={dish.img}
                  className="img-fluid rounded-start"
                  alt={dish.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{dish.name}</h5>
                  <p className="card-text">{dish.description}</p>
                  <p className="card-text">
                    <p className="card-text">
                      <b>Cuisine Type : </b>
                      {dish.cuisine}
                    </p>
                    <p className="card-text">
                      <b>Price : Rs.</b>
                      {dish.price_rs}
                    </p>
                    <button type="button" className="btn btn-primary" onClick={() => {
                      setSelectedDish(dish);
                      setShowOrderForm(true);
                    }}>
                      Order Now
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {showOrderForm && (
        <Order
          dish={selectedDish}
          onClose={() => setShowOrderForm(false)}
          onOrder={handleOrder}
        />
      )}
    </>
  );
};

export default Body;
