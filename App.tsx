import React from "react";

import { 
  Title,
  Main,
  Result,
  Form,
  Background,
  Header,
  StatusBarTheme,
  ComponentControlModelDark
} from './src/components';
import { 
  ResultProvider
} from './src/contexts/result';
import { 
  ThemeProvider
} from "./src/contexts/theme";

export default function App() {
  return (
    <ResultProvider>
      <ThemeProvider>
        <ComponentControlModelDark>
          <Background>
            <StatusBarTheme/>
            <Header/>
            <Main>
              <Title>
                Calculadora IMC
              </Title>
              <Result/>
              <Form/>
            </Main>
          </Background>
        </ComponentControlModelDark>
      </ThemeProvider>
    </ResultProvider>
  );
}

