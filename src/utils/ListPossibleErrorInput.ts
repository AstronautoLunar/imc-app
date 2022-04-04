import { InputErrorCheckers } from "../interface";

class ListPossibleErrorInput {
  private _inputsErrorCheckers: InputErrorCheckers[];

  constructor(...inputsErrorCheckers: InputErrorCheckers[]) {
    this._inputsErrorCheckers = inputsErrorCheckers;
  }

  public get inputsErrorChechers(): InputErrorCheckers[] {
    return this._inputsErrorCheckers;
  }

  public verify()  {
    for(let error of this.inputsErrorChechers) {
      const verified = error.verify();

      if(!verified.isPassed) {
        return verified;
      }
    }

    return {
      isPassed: true,
      description: "Não existe nenhum erro"
    }
  }
}

export default ListPossibleErrorInput;