import { Header } from "../components";
import { render } from "@testing-library/react-native";

test("Cabeçalho renderizado corretamente", () => {
    const { toJSON } = render(<Header/>);

    expect(toJSON()).toMatchSnapshot();
});