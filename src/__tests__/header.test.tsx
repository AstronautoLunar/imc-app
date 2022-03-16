import Header  from "../components/Header";
// import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";

// test("Cabeçalho renderizado corretamente", () => {
//     const { toJSON } = render(<Header/>);

//     expect(toJSON()).toMatchSnapshot();
// });
test("Cabeçalho renderizado corretamente", () => {
    const HeaderJSON = renderer.create(<Header/>).toJSON();

    expect(HeaderJSON).toMatchSnapshot();
});