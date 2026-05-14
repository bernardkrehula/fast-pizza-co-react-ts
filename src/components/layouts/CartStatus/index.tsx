import "./index.css";

const CartStatus = ({
  totalPrice,
  totalAmount,
}: {
  totalPrice: number;
  totalAmount: number;
}) => {
  return (
    <div className="cart-status">
      <div className="pizzas-info">
        <h4>{totalAmount} Pizzas</h4>
        <h4>€{totalPrice.toFixed(2)}</h4>
      </div>

      <h5>Open cart →</h5>
    </div>
  );
};
export default CartStatus;
