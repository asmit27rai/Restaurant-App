import React from "react";

const Order = () => {
  return (
    <div
      className="jumbotron shadow-lg p-3 mb-5 bg-white rounded mt-5"
      style={{ height: "70vh", width: "50vw", marginLeft: "400px" }}
    >
      <h1 className="display-4">Name Of Dish</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-4" />
      <div className="form-group row">
        <label for="colFormLabel" className="col-sm-2 col-form-label">
          <b style={{fontSize:'xx-larger'}}>Address : </b>
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="colFormLabel"
            placeholder="Fill The Address"
          />
        </div>
      </div>
      <div className="form-group col-md-4">
        <label for="inputState">Amount Of Dish</label>
        <select id="inputState" class="form-control">
          <option selected>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </div>
      <p>
        <b>Price To Be Paid : </b>
      </p>
      <a className="btn btn-primary btn-lg" href="#" role="button">
        Order Now
      </a>
    </div>
  );
};
export default Order;
