import Input from "../../../components/ui/Input";
import type { FormInputType } from "../../../types/ui.types.ts/FormInputType";
import "./index.css";

const FormInput = ({
  credentials,
  type,
  name,
  systemError,
  errorMessage,
  value,
}: FormInputType) => {
  return (
    <fieldset className="form-input">
      <label>{credentials}</label>
      <div className="form-input-error">
        <p>{systemError}</p>
        <Input
          type={type}
          size="large"
          name={name}
          value={value}
          variation="secondary"
        />
        <span>{errorMessage}</span>
      </div>
    </fieldset>
  );
};
export default FormInput;
