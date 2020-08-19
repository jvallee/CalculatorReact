import React, { Component } from "react";
import { Operator, Digit } from "../../lib/types";
import useRowStyles from "./useRowStyles";
import Button from "../Button";

export type RowProps = {
  buttonValue1: Digit | Operator;
  buttonValue2: Digit | Operator;
  buttonValue3: Digit | Operator;
  buttonValue4?: Digit | Operator;
  display: string;
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
  setOperand: React.Dispatch<React.SetStateAction<Operator>>;
  setResult: React.Dispatch<React.SetStateAction<number>>;
  setMemory: React.Dispatch<React.SetStateAction<string>>;
  memory: string;
  operand: string;
};

const Row: React.FC<RowProps> = (props) => {
  const styles = useRowStyles();

  return (
    <div className={styles.row}>
      <Button
        buttonValue={props.buttonValue1}
        setDisplayValue={props.setDisplayValue}
        display={props.display}
        setResult={props.setResult}
        setOperand={props.setOperand}
        setMemory={props.setMemory}
        memory={props.memory}
        operand={props.operand}
      />
      <Button
        buttonValue={props.buttonValue2}
        setDisplayValue={props.setDisplayValue}
        display={props.display}
        setResult={props.setResult}
        setOperand={props.setOperand}
        setMemory={props.setMemory}
        memory={props.memory}
        operand={props.operand}
      />
      <Button
        buttonValue={props.buttonValue3}
        setDisplayValue={props.setDisplayValue}
        display={props.display}
        setResult={props.setResult}
        setOperand={props.setOperand}
        setMemory={props.setMemory}
        memory={props.memory}
        operand={props.operand}
      />
      {props.buttonValue4 && (
        <Button
          buttonValue={props.buttonValue4}
          setDisplayValue={props.setDisplayValue}
          display={props.display}
          setResult={props.setResult}
          setOperand={props.setOperand}
          setMemory={props.setMemory}
          memory={props.memory}
          operand={props.operand}
        />
      )}
    </div>
  );
};

export default Row;
