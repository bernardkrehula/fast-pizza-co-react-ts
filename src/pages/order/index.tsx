import { useQuery } from "@tanstack/react-query";
import "./index.css";
import { requestPreparingOrder } from "../../api/requestPreparingOrder";
import { differenceInMinutes } from "date-fns";
import { useParams } from "react-router-dom";

const Order = () => {
  const { id: orderId } = useParams();
  if(!orderId) return
  const { data, isLoading } = useQuery({
    queryKey: ["order"],
    queryFn: () => requestPreparingOrder(orderId),
  });
  if (isLoading) return;

  const { id, estimatedDelivery, cart } = data.data;


  const preparingTime = new Date(estimatedDelivery);
  const now = new Date()
  const deliveryTime = differenceInMinutes(preparingTime, now); 

  return (
    <div className="order">
      <div className="order-info">
        <span>Order {id} status</span>
        <span>Priority</span>
        <span>Peparing order</span>
      </div>
      <div className="preparing-time">
        <p>Only {deliveryTime} minutes left</p>
      </div>
      <ul className="order-content">
        {cart.map((pizza) => {
          const { pizzaId, name, quantity, totalPrice } = pizza;
          return (
            <li key={pizzaId}>
              <span>
                {quantity} x {name}
              </span>
              <span>€{totalPrice}</span>
            </li>
          );
        })}
      </ul>
      <div className="order-pricing">
        <span>Price pizza: €</span>
        <span>Price priority: €</span>
        <p>To pay on delivery: €</p>
      </div>
    </div>
  );
};
export default Order;
