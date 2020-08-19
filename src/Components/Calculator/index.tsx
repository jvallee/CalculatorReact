import React, { Component, useState } from "react";
import { Digit, Operator } from "../../lib/types";
import calculatorStyles from "./useCalculatorStyles";
import Row from "../Row";
import DisplayBox from "../DisplayBox";

const Calculator: React.FC = function ({}) {
  const [display, setDisplayValue] = useState<string>("0");
  const [result, setResult] = useState<number>(0);
  const [memory, setMemory] = useState<string>("");
  const [operand, setOperand] = useState<Operator>("");
  const styles = calculatorStyles();
  return (
    <div className={styles.calculator}>
      <DisplayBox displayValue={display} />
      <Row
        buttonValue1={"AC"}
        buttonValue2={"+/-"}
        buttonValue3={"%"}
        buttonValue4={"/"}
        setDisplayValue={setDisplayValue}
        display={display}
        setOperand={setOperand}
        setResult={setResult}
        setMemory={setMemory}
        memory={memory}
        operand={operand}
      />
      <Row
        buttonValue1={9}
        buttonValue2={8}
        buttonValue3={7}
        buttonValue4={"*"}
        setDisplayValue={setDisplayValue}
        display={display}
        setOperand={setOperand}
        setResult={setResult}
        setMemory={setMemory}
        memory={memory}
        operand={operand}
      />
      <Row
        buttonValue1={6}
        buttonValue2={5}
        buttonValue3={4}
        buttonValue4={"-"}
        setDisplayValue={setDisplayValue}
        display={display}
        setOperand={setOperand}
        setResult={setResult}
        setMemory={setMemory}
        memory={memory}
        operand={operand}
      />
      <Row
        buttonValue1={3}
        buttonValue2={2}
        buttonValue3={1}
        buttonValue4={"+"}
        setDisplayValue={setDisplayValue}
        display={display}
        setOperand={setOperand}
        setResult={setResult}
        setMemory={setMemory}
        memory={memory}
        operand={operand}
      />
      <Row
        buttonValue1={0}
        buttonValue2={"."}
        buttonValue3={"="}
        setDisplayValue={setDisplayValue}
        display={display}
        setOperand={setOperand}
        setResult={setResult}
        setMemory={setMemory}
        memory={memory}
        operand={operand}
      />
    </div>
  );
};

export default Calculator;
