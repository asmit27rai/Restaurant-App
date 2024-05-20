// import React, { useState } from 'react'
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// const Register = () => {
//   const [user, setUser] = useState({
//     fullName: "",
//     username: "",
//     password: "",
//     confPass: "",
//   });
//   const navigate = useNavigate();
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`http://localhost:3000/api/user/register`, user, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       });
//       if (res.data.success) {
//       navigate("/login");
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//       console.log(error);
//     }
//     setUser({
//       fullName: "",
//       username: "",
//       password: "",
//       confPass: "",
//     });
//   };
//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card shadow-lg p-3 mb-5 bg-white rounded">
//             <div className="card-body">
//               <h2 className="card-title text-center">
//                 <b>Welcome To RESTO!</b>
//               </h2>
//               <form onSubmit={onSubmitHandler} action="">
//                 <div className="mb-3">
//                   <label htmlFor="username" className="form-label">
//                     <b>FullName</b>
//                   </label>
//                   <input
//                     value={user.fullName}
//                     onChange={(e) =>
//                       setUser({ ...user, fullName: e.target.value })
//                     }
//                     type="text"
//                     className="form-control"
//                     id="username"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="username" className="form-label">
//                     <b>Username</b>
//                   </label>
//                   <input
//                     value={user.username}
//                     onChange={(e) =>
//                       setUser({ ...user, username: e.target.value })
//                     }
//                     type="text"
//                     className="form-control"
//                     id="username"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">
//                     <b>PassWord</b>
//                   </label>
//                   <input
//                     value={user.password}
//                     onChange={(e) =>
//                       setUser({ ...user, password: e.target.value })
//                     }
//                     type="password"
//                     className="form-control"
//                     id="password"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">
//                     <b>Confirm PassWord</b>
//                   </label>
//                   <input
//                     value={user.confPass}
//                     onChange={(e) =>
//                       setUser({ ...user, confPass: e.target.value })
//                     }
//                     type="password"
//                     className="form-control"
//                     id="password"
//                   />
//                 </div>
//                 <p className="text-center my-2">
//                   Already have an account? <Link to="/login"> login </Link>
//                 </p>
//                 <div className="text-center">
//                   <button type="submit" className="btn btn-primary">
//                     <b>SignUP</b>
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;





import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confPass: "",
  });
  
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Basic validation
    if (user.password !== user.confPass) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(`http://localhost:3000/api/user/register`, {
        fullName: user.fullName,
        username: user.username,
        password: user.password,
        confPass: user.confPass
      }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      toast.error(message);
      console.log(error);
    }

    setUser({
      fullName: "",
      username: "",
      password: "",
      confPass: "",
    });
  };

  return (
    <div className="container mt-5">
      <Toaster />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <h2 className="card-title text-center">
                <b>Welcome To RESTO!</b>
              </h2>
              <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    <b>Full Name</b>
                  </label>
                  <input
                    value={user.fullName}
                    onChange={(e) =>
                      setUser({ ...user, fullName: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    id="fullName"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    <b>Username</b>
                  </label>
                  <input
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    id="username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    <b>Password</b>
                  </label>
                  <input
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confPass" className="form-label">
                    <b>Confirm Password</b>
                  </label>
                  <input
                    value={user.confPass}
                    onChange={(e) =>
                      setUser({ ...user, confPass: e.target.value })
                    }
                    type="password"
                    className="form-control"
                    id="confPass"
                  />
                </div>
                <p className="text-center my-2">
                  Already have an account? <Link to="/login"> login </Link>
                </p>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    <b>Sign Up</b>
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

export default Register;
