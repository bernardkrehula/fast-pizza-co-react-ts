import { reuqestOrder } from "../../api/requestOrder";
import Btn from "../../components/ui/btn";
import Input from "../../components/ui/Input";
import FormInput from "./FormInput";
import "./index.css";

const Checkout = () => {
  const handleOrderValues = (e: React.ChangeEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const credentials = {
        first_name: formData.get("first_name"),
        phone_number: formData.get("phone_number"),
        adress: formData.get("adress")
    }
    reuqestOrder(credentials);
  };
  return (
    <form className="checkout" onSubmit={handleOrderValues}>
      <div className="checkout-title">
        <h2>Ready to Order?</h2>
        <h2>Let's go!</h2>
      </div>
      <div className="form-inputs">
        <FormInput credentials="First Name" error="" systemError="" type="text" name="first_name" />
        <FormInput credentials="Phone number" type="text" name="phone_number"></FormInput>
        <FormInput credentials="Adress" type="text" name="adress" />
      </div>
      <div className="checkbox-priority">
        <Input type="checkbox" name="checkbox"></Input>
        <label>Want to yo give your order priority?</label>
      </div>
      <Btn type="submit">Order now from</Btn>
    </form>
  );
};
export default Checkout;
