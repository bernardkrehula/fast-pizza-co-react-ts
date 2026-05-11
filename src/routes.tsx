import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/homepage";
import Cart from "./pages/cart";

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
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
export default router;
