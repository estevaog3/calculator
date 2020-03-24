import React, { Component } from 'react';
import { View, Platform, Alert, ToastAndroid } from 'react-native';
import Button from './src/components/Button/index';
import Display from './src/components/Display/index';
import { wrapButtons, wrapper } from './src/styles/base';

const sendMessage = msg => {
  if (Platform.OS === 'ios') {
    Alert.alert('Attention', msg);
  } else {
    ToastAndroid.show(msg, ToastAndroid.LONG);
  }
}

const initialState = {
  displayValue: '0',
  operands: [0, undefined],
  currentOperand: 0,
  operator: undefined,
  clearDisplay: false,
}
/*

Regras de negócio:

1) Sobre números:
  1.1) um número é um conjunto de dígitos e no máximo um ponto
  1.2) se o valor do número atual já contém um ponto, então outro ponto digitado será ignorado
  1.3) um número inteiro não pode começar com zero
  1.4) um número pode ter no máximo 15 dígitos
2) Sobre operações:
  2.1) o último operador setado é o que será usado na operação.

*/

export default class App extends Component {

  state = { ...initialState };

  clearMemory = () => {
    this.setState({ ...initialState });
  }

  addDigit = digit => {
    const clearDisplay = this.state.clearDisplay || (this.state.displayValue === '0' && digit !== '.');
    if (digit === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return;
    } else if (this.state.displayValue.replace('.', '').length == 10) {
      sendMessage("Maximum number of digits (10) reached");
      return;
    }

    const displayValue = clearDisplay ? digit : this.state.displayValue + digit;
    this.setState({ displayValue, clearDisplay: false });

    if (digit !== '.') {
      const operands = [...this.state.operands];
      operands[this.state.currentOperand] = parseFloat(displayValue);
      this.setState({ operands });
    }

  }

  evaluator = () => {
    if (this.state.operands[1] === undefined) {
      return this.state.operands[0];
    }
    switch (this.state.operator) {
      case '+':
        return this.state.operands[0] + this.state.operands[1];
      case '-':
        return this.state.operands[0] - this.state.operands[1];
      case '*':
        return this.state.operands[0] * this.state.operands[1];
      case '/':
        return this.state.operands[0] / this.state.operands[1];
    }
  }

  setOperator = operator => {

    if (this.state.currentOperand === 0) {
      if (operator === '=') {
        return;
      }
      this.setState({
        clearDisplay: true,
        currentOperand: 1,
        operator
      });
    } else {
      const operationResult = this.evaluator();

      this.setState({
        operands: [operationResult, undefined],
        displayValue: operationResult.toString(),
        currentOperand: operator === '=' ? 0 : 1,
        operator: operator === '=' ? undefined : operator,
        clearDisplay: true,
      })
    }
  }

  buttons = [
    { label: 'AC', width: 'lg', method: this.clearMemory }, { label: '/', isOperator: true, method: this.setOperator },
    { label: '7' }, { label: '8' }, { label: '9' }, { label: '*', isOperator: true, method: this.setOperator },
    { label: '4' }, { label: '5' }, { label: '6' }, { label: '-', isOperator: true, method: this.setOperator },
    { label: '1' }, { label: '2' }, { label: '3' }, { label: '+', isOperator: true, method: this.setOperator },
    { label: '0', width: 'md' }, { label: '.' }, { label: '=', isOperator: true, method: this.setOperator }
  ];

  render() {
    return (
      <View style={wrapper}>
        <Display value={this.state.displayValue} />
        <View style={wrapButtons}>
          {
            this.buttons.map((button, i) =>
              <Button width={button.width} handlePress={button.method ? button.method : this.addDigit} isOperator={button.isOperator} label={button.label} key={i.toString()} />)
          }
        </View>
      </View>
    );
  }

};
