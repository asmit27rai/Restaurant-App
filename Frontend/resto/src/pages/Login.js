import React from "react";

const Login = () => {
  return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h2 className="card-title text-center">
                  <b>Welcome Back To RESTO!</b>
                </h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      <b>Username</b>
                    </label>
                    <input type="text" className="form-control" id="username" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      <b>PassWord</b>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      <b>LoginIn</b>
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

export default Login;
