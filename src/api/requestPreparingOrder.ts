import axios from "axios"

export const requestPreparingOrder = async(orderId: string) => {
    const response = await axios.get("https://react-fast-pizza-api.onrender.com/api/order/FB9SX4");
    return response.data;
}

//Shvatiti kako requestati order koji sam zatrazio 23.5 u 3:01