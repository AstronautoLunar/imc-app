import { ResultStateTypes, ThemeStateContextTypes } from "../../types";
import { applyHiddenElement, convertTypeUSInBR } from "../../utils";
import styles from "./styles";

// TextResultNumeric utils
export function applyStyleTextResultNumeric(
    hiddenTexts: boolean, 
    theme: ThemeStateContextTypes
) {
    return [
        styles.result,
        {
            display: applyHiddenElement(hiddenTexts),
            color: theme.colorText
        }
    ]
}


export function showResultNumericIMC(result: ResultStateTypes) {
    const resultIMC = Number(result.total).toFixed(2);
    const isResultIMCExists = resultIMC && Number(resultIMC) !== 0;
    const applyResultsNumeric = isResultIMCExists
        ?
        `${resultIMC} kg/m2`
        :
        "Resultado";

    return applyResultsNumeric;
}

// TextResultType utils
export function applyStyleTextResultType(
    hiddenTexts: boolean, 
    theme: ThemeStateContextTypes
) {
    return [
        styles.resultType,
        {
            display: applyHiddenElement(hiddenTexts),
            color: theme.colorText
        }
    ]
}

export function showResultTypeIMC(result: ResultStateTypes) {
    const resultIMC = Number(result.total).toFixed(2);
    const isResultIMCExists = resultIMC && Number(resultIMC) !== 0;
    const applyResultsType = isResultIMCExists
        ?
        `(${convertTypeUSInBR(result.type)})`
        :
        "";
    return applyResultsType;
}