import React from "react";
const BookTab = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                <b>Book A Table at RESTO!</b>
              </h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="members" className="form-label">
                      Number of Members
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="members"
                      placeholder="Enter number of members"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="tables" className="form-label">
                      Number of Tables
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="tables"
                      placeholder="Enter number of tables"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTab;


