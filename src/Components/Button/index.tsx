import React, { Component } from "react";
import { Operator, Digit } from "../../lib/types";
import useButtonStyles from "./useButtonStyles";
import handleClick from "../../Handleclick";

export type ButtonProps = {
  buttonValue: Digit | Operator;
  display: string;
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
  setOperand: React.Dispatch<React.SetStateAction<Operator>>;
  setResult: React.Dispatch<React.SetStateAction<number>>;
  setMemory: React.Dispatch<React.SetStateAction<string>>;
  memory: string;
  operand: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  const styles = useButtonStyles(props);

  return (
    <div
      className={styles.button}
      onClick={() =>
        handleClick(
          props.buttonValue,
          props.display ?? "0",
          props.setDisplayValue,
          props.setResult,
          props.setOperand,
          props.setMemory,
          props.memory,
          props.operand
        )
      }
    >
      <div>{props.buttonValue}</div>
    </div>
  );
};

export default Button;
