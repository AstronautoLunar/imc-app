import { InputErrorCheckers } from "../interface";
import { 
  ReturnVerifyInputErrorChecker,
  isPassedInputErrorCheckerTypes
} from "../types";

class LetterInInput implements InputErrorCheckers{
  private _valueInput: string;
  private _listLetters: string[] = [
      "a", "b", "c", "d", "e",
      "f", "g", "h", "i", "j",
      "k", "l", "m", "n", "o",
      "p", "q", "r", "s", "t",
      "u", "v", "w", "x", "y",
      "z"
  ];
  private _descriptionError: string = "";

  constructor(valueInput: string) {
      this._valueInput = valueInput;
  }

  public get valueInput(): string {
      return this._valueInput;
  }

  private get listLetters(): string[] {
      return this._listLetters;
  }

  public get descriptionError(): string {
    return this._descriptionError;
  }

  public set descriptionError(value: string) {
    this._descriptionError = value;
  }

  public verify(): ReturnVerifyInputErrorChecker {
      let isPassed: isPassedInputErrorCheckerTypes = null;
      let valueInArray = this.valueInput.split("");

      for(let letter of this.listLetters) {
          isPassed = valueInArray.includes(letter);

          
          if(isPassed) {
            this.descriptionError = 'O campo apenas aceita números';
              break;
          }
      }

      return {
        isPassed,
        description: this.descriptionError
      };
  };
};

export default LetterInInput;