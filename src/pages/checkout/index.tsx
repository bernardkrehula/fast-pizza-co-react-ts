import { type FormEvent, useState } from "react";
import { reuqestOrder } from "../../api/requestOrder";
import { useAppSelector } from "../../app/hooks";
import Btn from "../../components/ui/btn";
import Input from "../../components/ui/Input";
import FormInput from "./FormInput";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { localErrorValidator } from "../../utils/localErrorValidator";
import type { orderShema } from "../../utils/localErrorValidator";
import * as v from "valibot";
import { GenericError } from "../../utils/GenericError";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../features/slices/loading-slice";

const Checkout = () => {
  const { orders } = useAppSelector((state) => state.orders);
  const loading = useAppSelector((state) => state.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formError, setFormError] = useState<{
    customer: string;
    phone: string;
    address: string;
  }>({
    customer: "",
    phone: "",
    address: "",
  });
  const handleOrderValues = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(setIsLoading());
      const formData = new FormData(e.currentTarget);
      const credentials = {
        customer: formData.get("first_name") as string,
        phone: formData.get("phone_number") as string,
        address: formData.get("adress") as string,
        priority: formData.has("priority"),
      };
      localErrorValidator(credentials);
      const order = { ...credentials, cart: orders, position: "" };
      const {
        data: { id: orderId },
      } = await reuqestOrder(order);
      dispatch(setIsLoading());
      reddirectToOrder(orderId);
    } catch (error) {
      if (error instanceof v.ValiError) {
        const flatIssues = v.flatten<orderShema>(error.issues);
        const formErrors: Partial<Record<v.IssueDotPath<orderShema>, string>> =
          {};
        for (const key in flatIssues.nested) {
          const issueKey = key as v.IssueDotPath<orderShema>;
          const nestedIssues = flatIssues.nested[issueKey];
          if (nestedIssues?.length) {
            formErrors[issueKey] = nestedIssues[0];
          }
        }
        setFormError(
          formErrors as { customer: string; phone: string; address: string },
        );
      } else if (error instanceof GenericError) {
        console.error("GenericError caught:", error);
      } else {
        console.error("Unknown error:", error);
      }
    }
  };

  const reddirectToOrder = (orderId: string) => {
    navigate(`/order/${orderId}`);
  };
  if(loading){
    return (
      <div className="loading-overlay">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <form className="checkout" onSubmit={handleOrderValues}>
      <div className="checkout-title">
        <h2>Ready to Order?</h2>
        <h2>Let's go!</h2>
      </div>
      <div className="form-inputs">
        <FormInput
          credentials="First Name"
          systemError=""
          type="text"
          name="first_name"
          errorMessage={formError.customer}
        />
        <FormInput
          credentials="Phone number"
          type="text"
          name="phone_number"
          errorMessage={formError.phone}
        ></FormInput>
        <FormInput
          credentials="Adress"
          type="text"
          name="adress"
          errorMessage={formError.address}
        />
      </div>
      <div className="checkbox-priority">
        <Input type="checkbox" name="priority" variation=""></Input>
        <label>Want to yo give your order priority?</label>
      </div>
      <Btn type="submit">Order now from</Btn>
    </form>
  );
};
export default Checkout;
