import axios from "axios";

export const requestMenu = async () => {
  try {
    const response = await axios.get(
      "https://react-fast-pizza-api.onrender.com/api/menu",
    );
    return response.data;
  } catch (error) {}
};
