import { useNavigate } from "react-router-dom";
import "./index.css";
import { useAppSelector } from "../../../app/hooks";

const CartStatus = () => {
  const orders = useAppSelector(state => state.orders.orders);
  const navigate = useNavigate();

  //Tu isto pomaknuti total price i total amount da se racunaju u slice
  const totalPrice = orders.reduce((accumulator: number, meal) => {
    const { unitPrice, amount } = meal;
    return accumulator + amount * unitPrice;
  }, 0);

  const totalAmount = orders.reduce(
    (accumulator: number, meal) => {
      const { amount } = meal;
      return accumulator + amount;
    },
    0,
  );

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
