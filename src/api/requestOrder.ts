import axios from "axios";
import type { OrderType } from "../types/form.types.ts/OrderType";

export const reuqestOrder = async (order: OrderType) => {
  const response = await axios.post(
    "https://react-fast-pizza-api.onrender.com/api/order",
    order,
  );
  return response.data;
};

//Shvatiti kako poslati request prema serveru za danas 23.5 14:26
