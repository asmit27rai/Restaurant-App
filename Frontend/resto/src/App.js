import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Order from "./pages/Order";
// import OrderModel from "./mongo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
// import express from "express";
// import cors from "cors";
// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(cors())
// app.get("/",cors(),(req,res)=>{

// })
// app.post("/",async(req,res)=>{
//   const {dishName,quantity,address,totalPrice}=req.body
//   const data={
//     dishName: dishName,
//     quantity: quantity,
//     address: address,
//     totalPrice: totalPrice
//   }
//   await OrderModel.insertMany([data])
// })
// app.listen(3000,()=>{
//   console.log("Port Connected")
// })
function App() {
  const [isHome, setIsHome] = useState(true);

  const togglePage = () => {
    setIsHome(prevIsHome => !prevIsHome);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/order/:id" component={Order} />
      </Routes>

      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={togglePage}
        >
          {isHome ? (
            <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
              Book A Table At Resto
            </Link>
          ) : (
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Back To Home
            </Link>
          )}
        </button>
      </div>
    </Router>
  );
}

export default App;
