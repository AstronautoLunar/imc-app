import { ReturnVerifyInputErrorChecker } from "../types";

interface InputErrorCheckers {
  get valueInput(): string;
  get descriptionError(): string;
  set descriptionError(value: string);
  verify: () => ReturnVerifyInputErrorChecker;
}

export default InputErrorCheckers;