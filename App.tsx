import React, { useState, useContext } from "react"
import { 
  SafeAreaView, 
  Switch,
  View
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './src/styles/globals';
import { 
  Title,
  Main,
  Result,
  Form
} from './src/components';
import { 
  // useResult, 
  ResultProvider,
  ResultContext
} from './src/contexts/result';
import { ValueStateInputsTypes } from './src/types';

export default function App() {
  const {
    result,
    setResult
  } = useContext(ResultContext);

  const [
    value,
    setValue
  ] = useState({
    weight: 0,
    height: 0
  } as ValueStateInputsTypes);

  function changeInputWeight(entry: string) {
    setValue({ ...value, weight: Number(entry) });
  }

  function changeInputHeight(entry: string) {
    setValue({ ...value, height: Number(entry)} );
  }

  function calculateIMC() {
    const { height, weight } = value;

    const total = (height * height) / weight;

    // if(total < 18.5) {
    //     setResult({
    //       total,
    //       type: "under-weight"
    //     });
        
    // } else if(total >= 18.5 && total < 25) {
    //     setResult({
    //       total,
    //       type: "normal"
    //     });
        
    // } else if(total >= 25 && total < 30) {
    //     setResult({
    //       total,
    //       type: "under-weight"
    //     });
        
    // } else if(total >= 30 && total < 35) {
    //     setResult({
    //       total,
    //       type: "obesity"
    //     });
        
    // } else if(total >= 35) {
    //     setResult({
    //       total,
    //       type: "severe-obesity"
    //     });

    // }

    console.log(result);
    console.log(setResult);
  }

  // console.log(result);

  return (
    <ResultProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Switch
            style={styles.switch}
          />
        </View>
        <Main>
          <Title>
            Calculadora IMC
          </Title>
          
          <Result>
            { 
              result === undefined
              ?
              "Resultado"
              :
              String(result.total)
            }
          </Result>
          <Form
            changeInputHeight={changeInputHeight}
            changeInputWeight={changeInputWeight}
            calculateIMC={calculateIMC}
          />
        </Main>
      </SafeAreaView>
    </ResultProvider>
  );
}

