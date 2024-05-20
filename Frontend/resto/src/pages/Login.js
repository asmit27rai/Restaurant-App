import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import axios from "axios";
const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3000/api/user/login`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      navigate("/");
      console.log(res);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      username: "",
      password: ""
    })
  }
  return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h2 className="card-title text-center">
                  <b>Welcome Back To RESTO!</b>
                </h2>
                <form onSubmit={onSubmitHandler} action="">
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      <b>Username</b>
                    </label>
                    <input 
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    type="text" className="form-control" id="username" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      <b>PassWord</b>
                    </label>
                    <input
                      value={user.password}
                      onChange={(e) => setUser({ ...user, password: e.target.value })}
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <p className='text-center my-2'>Don't have an account? <Link to="/register"> SignUp </Link></p>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      <b>LogIn</b>
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
