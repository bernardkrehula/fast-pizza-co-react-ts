import { FormEvent } from "react";
import { object, parse, string } from "valibot";
import { reuqestOrder } from "../../api/requestOrder";
import { useAppSelector } from "../../app/hooks";
import Btn from "../../components/ui/btn";
import Input from "../../components/ui/Input";
import FormInput from "./FormInput";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { localErrorValidator } from "../../utils/localErrorValidator";

const Checkout = () => {
  const cart = useAppSelector((state) => state.orders.orders);
  const navigate = useNavigate();

  const handleOrderValues = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const credentials = {
      customer: formData.get("first_name"),
      phone: formData.get("phone_number"),
      address: formData.get("adress"),
      priority: formData.has("priority"),
    };
    localErrorValidator(credentials);
    const order = { ...credentials, cart: cart, position: "" };
    const { data: { id: orderId } } = await reuqestOrder(order);
    reddirectToOrder(orderId);
  };

  const reddirectToOrder = (orderId: string) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <form className="checkout" onSubmit={handleOrderValues}>
      <div className="checkout-title">
        <h2>Ready to Order?</h2>
        <h2>Let's go!</h2>
      </div>
      <div className="form-inputs">
        <FormInput
          credentials="First Name"
          error=""
          systemError=""
          type="text"
          name="first_name"
        />
        <FormInput
          credentials="Phone number"
          type="text"
          name="phone_number"
        ></FormInput>
        <FormInput credentials="Adress" type="text" name="adress" />
      </div>
      <div className="checkbox-priority">
        <Input type="checkbox" name="priority"></Input>
        <label>Want to yo give your order priority?</label>
      </div>
      <Btn type="submit">Order now from</Btn>
    </form>
  );
};
export default Checkout;
