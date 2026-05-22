import { useNavigate } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";
import { selectTotalAmount, selectTotalPrice } from "../../../features/slices/orders-slice";

const CartStatus = () => {
  const navigate = useNavigate();
  const totalPrice = useSelector(selectTotalPrice);
  const totalAmount = useSelector(selectTotalAmount);

  const openCart = () => navigate("/cart");

  return (
    <div className="cart-status">
      <div className="pizzas-info">
        <h4>{totalAmount} Pizzas</h4>
        <h4>€{totalPrice.toFixed(2)}</h4>
      </div>

      <h5 onClick={openCart}>Open cart →</h5>
    </div>
  );
};
export default CartStatus;
