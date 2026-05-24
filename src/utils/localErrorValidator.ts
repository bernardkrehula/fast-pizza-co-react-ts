import * as v from "valibot";
import type { CredentialsType } from "../types/form.types.ts/CredentialsType";

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
    v.maxLength(30, "Your entered wrong addres format"),
  ),
});
export const localErrorValidator = (credentials: CredentialsType) => {
  const response = v.parse(orderSchema, credentials);
  return response;
};
