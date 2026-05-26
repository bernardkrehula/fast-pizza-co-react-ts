import axios, { AxiosError } from "axios";
import type { OrderType } from "../types/form.types.ts/OrderType";

export const reuqestOrder = async (order: OrderType) => {
  try {
    const response = await axios.post(
      "https://react-fast-pizza-api.onrender.com/api/order",
      order,
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data.message);
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

