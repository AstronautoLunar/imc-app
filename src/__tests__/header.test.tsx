import { Platform } from "react-native";
import { applyPaddingVersionAndroid } from "../components/Header/utils";

test("Funcionalidade que adiciona espaçamento acima do cabeçalho da interface", () => {
    const value = applyPaddingVersionAndroid(Platform);

    if(Platform.OS === "android") {
        if(Platform.Version < 29) {
            expect(value).toBe(24);
        } else {
            expect(value).toBe(40);
        }
    }
});