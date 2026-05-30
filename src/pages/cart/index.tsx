import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import Btn from "../../components/ui/btn";
import {
  clear,
  decrement,
  increment,
  remove,
} from "../../features/slices/orders-slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Cart = () => {
  const state = useAppSelector((state) => state.orders.orders);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const increaseAmount = (id: string) => {
    dispatch(increment(id));
  };
  const decreaseAmount = (id: string, amount: number) => {
    dispatch(decrement({ id, amount }));
  };
  const clearCart = () => {
    dispatch(clear());
  };
  const deleteMeal = (id: string) => {
    dispatch(remove(id));
  };
 
  const reddirectToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart">
      <Link to="/menu" className="menu-btn">
        ← Back to menu
      </Link>
      {state.length != 0 ? (
        <>
          <h3 className="cart-username">Your cart, user</h3>
          <ul className="orders">
            {state.map((order) => {
              const { pizzaId, name, quantity, totalUnitPrice } = order;

              return (
                <li key={pizzaId} className="cart-order">
                  {quantity != 0 && (
                    <>
                      <h4 className="cart-order-amount">
                        {quantity} x {name}
                      </h4>
                      <h4 className="cart-order-price">
                        €{totalUnitPrice.toFixed(2)}
                      </h4>
                      <div className="cart-order-btns">
                        <Btn
                          type="button"
                          onClick={() => decreaseAmount(pizzaId, quantity)}
                        >
                          -
                        </Btn>
                        <h4>{quantity}</h4>
                        <Btn type="button" onClick={() => increaseAmount(pizzaId)}>
                          +
                        </Btn>
                        <Btn type="button" onClick={() => deleteMeal(pizzaId)}>
                          Delete
                        </Btn>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="cart-btns">
            <Btn type="button" onClick={reddirectToCheckout}>
              Order pizzas
            </Btn>
            <Btn type="button" variation="secondary" onClick={clearCart}>
              Clear cart
            </Btn>
          </div>
        </>
      ) : (
        <h3 className="empty-cart-message">{`Your cart is still empty. Start adding some pizzas :)`}</h3>
      )}
    </div>
  );
};
export default Cart;
