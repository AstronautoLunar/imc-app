const messageTest = `Simulação á testar a condição para verificação dos inputs vazios`;

test(messageTest, () => {
    const heightError = true;
    const weightError = false;

    const isPassed = !heightError && !weightError;

    expect(isPassed).toBeTruthy();
});