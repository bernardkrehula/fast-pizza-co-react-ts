import axios, { AxiosError } from "axios";

export const requestMenu = async () => {
  try {
    const response = await axios.get(
      "https://react-fast-pizza-api.onrender.com/api/menu",
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data.message)
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
