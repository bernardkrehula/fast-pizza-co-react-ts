import Input from "../../../components/ui/Input";
import type { FormInputType } from "../../../types/ui.types.ts/FormInputType";
import "./index.css";

const FormInput = ({ credentials, type, name, error, systemError }: FormInputType) => {
  return (
    <fieldset className="form-input">
      <label>{credentials}</label>
      <span>{systemError}</span>
      <Input type={type} size='large' name={name} variation='secondary' />
      <span>{error}</span>
    </fieldset>
  );
};
export default FormInput;
