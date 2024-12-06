import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "./../components/Login";
import Register from "./../components/Register";
import CartPage from "../pages/books/CartPage";
import Checkout from "../pages/books/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The App component serves as the layout with Navbar
    children: [
      {
        index: true, // This specifies the default route for "/"
        element: <Home />,
      },
      {
        path: "orders", // Nested under "/"
        element: <div>Orders</div>,
      },
      {
        path: "about", // Nested under "/"
        element: <div>About</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default router;
