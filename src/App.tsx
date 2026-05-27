import "./App.css";
import NavBar from "./components/layouts/navbar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import CartStatus from "./components/layouts/CartStatus";

const App = () => {
  const state = useAppSelector((state) => state.orders);
  const { orders } = state;

  return (
    <div className="app">
      <NavBar />
      <Outlet />
      {orders.length != 0 && <CartStatus />}
    </div>
  );
};

export default App;
