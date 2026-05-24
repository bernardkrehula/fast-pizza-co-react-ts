import { FormEvent } from "react";
import { object, parse, string } from "valibot";
import { reuqestOrder } from "../../api/requestOrder";
import { useAppSelector } from "../../app/hooks";
import Btn from "../../components/ui/btn";
import Input from "../../components/ui/Input";
import FormInput from "./FormInput";
import "./index.css";
import type { CredentialsType } from "../../types/form.types.ts/CredentialsType";
import { useNavigate } from "react-router-dom";
import * as v from "valibot";

const orderSchema = v.object({
  customer: v.pipe(
    v.string(),
    v.nonEmpty("Please enter your name"),
    v.minLength(4, "Your name must have 4 characters or more."),
    v.maxLength(20, "Your name can't have more than 20 characters."),
  ),
  phone: v.pipe(
    v.string(),
    v.nonEmpty("Please enter your phone number"),
    v.minLength(6, "You entered wrong phone number format."),
    v.maxLength(20, "You entered wrong phone number format."),
  ),
  address: v.pipe(
    v.string(),
    v.nonEmpty("Please enter your address"),
    v.minLength(8, "You entered wrong adress format."),
    v.maxLength(30, "Your entered wrong addres format")
  )
});

const Checkout = () => {
 

  const handleOrderValues = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const credentials = {
      customer: formData.get("first_name"),
      phone: formData.get("phone_number"),
      address: formData.get("adress"),
      priority: formData.has("priority"),
    };
  
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
