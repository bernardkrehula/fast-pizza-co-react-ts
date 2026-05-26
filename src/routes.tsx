import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage";
import Cart from "./pages/cart";
import Menu from "./pages/menu";
import App from "./App";
import Checkout from "./pages/checkout";
import Order from "./pages/order";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/order/:id",
        element: <Order />,
      },
    ],
  },
]);
export default router;
