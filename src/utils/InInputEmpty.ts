import { InputErrorCheckers } from "../interface";
import { isPassedInputErrorCheckerTypes, ReturnVerifyInputErrorChecker } from "../types";

class InInputEmpty implements InputErrorCheckers {
  private _valueInput: string;
  private _descriptionError: string = "";

  constructor(valueInput: string) {
    this._valueInput = valueInput;
  }

  get valueInput(): string {
    return this._valueInput;
  }

  get descriptionError(): string {
    return this._descriptionError;
  }
  set descriptionError(value: string) {
    this._descriptionError = value;
  }

  public verify(): ReturnVerifyInputErrorChecker { 
    if(!this.valueInput) {
      return {
        isPassed: false,
        description: "O campo está vazio!!!"
      }
    } else {
      return {
        isPassed: true,
        description: ""
      }
    }
  };
}

export default InInputEmpty;