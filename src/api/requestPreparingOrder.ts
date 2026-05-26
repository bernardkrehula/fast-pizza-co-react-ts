import axios, { AxiosError } from "axios";

export const requestPreparingOrder = async (orderId: string) => {
  try {
    const response = await axios.get(
      `https://react-fast-pizza-api.onrender.com/api/order/${orderId}`,
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

