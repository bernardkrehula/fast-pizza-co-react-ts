import axios from "axios"

export const reuqestPizzas = async() => {
    try{
        const response = await axios.get('https://react-fast-pizza-api.onrender.com/api/menu');

        console.log('menu: ', response.data.data);
        return response;
    }
    catch(error){

    }
}