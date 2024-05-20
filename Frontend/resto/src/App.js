import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Order from "./pages/Order";
import BookTab from "./pages/BookTab";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/api/user/register",
    element:<Register/>
  },
  {
    path:"/api/user/login",
    element:<Login/>
  },
  {
    path:"/api/booking/order",
    element:<Order/>
  },
  {
    path:"/api/booking/booking",
    element:<BookTab/>
  }
]);

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router}/>
    </div>
  );
};
export default App;