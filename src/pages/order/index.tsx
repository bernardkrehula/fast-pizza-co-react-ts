import { useQuery } from "@tanstack/react-query";
import "./index.css";
import { requestPreparingOrder } from "../../api/requestPreparingOrder";
import { differenceInMinutes, format } from "date-fns";
import { useParams } from "react-router-dom";
import type { PizzaType } from "../../types/form.types.ts/PizzaType";
import { useAppSelector } from "../../app/hooks";

const Order = () => {
  const { id: orderId } = useParams();
  /* const order = useAppSelector((state) => state);
  console.log(order) */
  if (!orderId) return;
  const { data, isLoading } = useQuery({
    queryKey: ["order"],
    queryFn: () => requestPreparingOrder(orderId),
  });
  if (isLoading) return;

  const { id, estimatedDelivery, cart, priorityPrice, orderPrice } = data.data;
  const totalOrderPrice = priorityPrice + orderPrice;

  const preparingTime = new Date(estimatedDelivery);
  const now = new Date();
  const deliveryTime = differenceInMinutes(preparingTime, now);
  const estimatedDeliveryTime = format(
    new Date(estimatedDelivery),
    "MMM d, hh:mm a",
  );
  
  return (
    <div className="order">
      <div className="order-info">
        <span className="order-number">Order {id} status</span>
        <span className="priority">Priority</span>
        <span className="preparing-order">Peparing order</span>
      </div>
      <div className="preparing-time">
        <p>Only {deliveryTime} minutes left</p>
        <span>(Estimated delivery: {estimatedDeliveryTime})</span>
      </div>
      <ul className="order-content">
        {cart.map((pizza: PizzaType) => {
          const { pizzaId, name, quantity, totalPrice } = pizza;
          return (
            <li key={pizzaId}>
              <div className="order-name-ingridients">
                <span>
                  {quantity} x {name}
                </span>
              </div>

              <span className="total-price">€{totalPrice.toFixed(2)}</span>
            </li>
          );
        })}
      </ul>
      <div className="order-pricing">
        <span>Price pizza: €{orderPrice.toFixed(2)}</span>
        <span>Price priority: €{priorityPrice.toFixed(2)}</span>
        <p>To pay on delivery: €{totalOrderPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};
export default Order;
