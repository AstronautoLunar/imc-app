import { 
    TypesThemeResult,
    ConvertTypeInBRReturnTypes
} from "../types";

function convertTypeUSInBR(type: TypesThemeResult): ConvertTypeInBRReturnTypes {
    switch(type) {
        case "under-weight":
            return "abaixo do peso";
        
        case "normal":
            return "normal";
        
        case "about-weight":
            return "sobre peso";
        
        case "obesity":
            return "obesidade";
        
        case "severe-obesity":
            return "obesidade severa";
        
        default:
            return "tipo indefinido"
    
    }
}

export default convertTypeUSInBR;