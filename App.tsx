import React from "react"
import { StatusBar } from 'expo-status-bar';

import { 
  Title,
  Main,
  Result,
  Form,
  Background,
  Header
} from './src/components';
import { ResultProvider } from './src/contexts/result';
import { ThemeProvider } from "./src/contexts/theme";

export default function App() {
  return (
    <ResultProvider>
      <ThemeProvider>
        <Background>
          <StatusBar style="auto" />
          <Header/>
          <Main>
            <Title>
              Calculadora IMC
            </Title>
            
            <Result/>
            <Form/>
          </Main>
        </Background>
      </ThemeProvider>
    </ResultProvider>
  );
}

