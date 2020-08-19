import { Digit, Operator } from "./lib/types";
import { memo } from "react";

function isDigit(pet: Digit | Operator): pet is Digit {
  return (pet as Digit) !== undefined;
}

function handleClick(
  clicked: Digit | Operator,
  displayValue: string,
  setDisplay: React.Dispatch<React.SetStateAction<string>>,
  setResult: React.Dispatch<React.SetStateAction<number>>,
  setOperand: React.Dispatch<React.SetStateAction<Operator>>,
  setMemory: React.Dispatch<React.SetStateAction<string>>,
  memory: string,
  operand: string
): void {
  console.log("memory = ", memory);
  if (typeof clicked == "number") {
    if (displayValue.length <= 1 && displayValue == "0" && operand == "") {
      setDisplay(String(clicked));
      return;
    } else if (displayValue == "-0") {
      setDisplay("-".concat(String(clicked)));
      return;
    } else if (operand != "") {
      setDisplay(String(clicked));
      setMemory(memory.concat(operand));
      setOperand("");
      return;
    }

    setDisplay(displayValue.concat(String(clicked)));
    setOperand("");
  } else {
    //not a digit section
    switch (clicked) {
      case ".":
        if (displayValue.includes(".")) {
          return;
        } else {
          setDisplay(displayValue.concat(String(clicked)));
          return;
        }
      case "AC":
        setDisplay("0");
        setResult(0);
        setMemory("");
        setOperand("");
        break;

      case "+/-":
        console.log("here in +/-");
        switch (displayValue) {
          case "0":
            setDisplay("-0");
            break;

          case "-0":
            setDisplay("0");
            break;

          default:
            setDisplay(String(Number(displayValue) * -1));
            break;
        }
      case "=":
        memory = memory.concat(displayValue);
        setMemory(memory); //why not working?
        console.log("memory = ", memory);
        displayValue = String(eval(memory));
        setDisplay(displayValue);
        console.log("result gets calced here");
        setOperand("=");
        memory = "";
        operand = "";
        setMemory("");
        break;
      default:
        //operand
        if (operand == "") {
          setMemory(memory.concat(displayValue));
        }
        setOperand(clicked);
        break;
    }

    if (clicked === "AC") {
      setDisplay("0");
      setResult(0);
    }
  }
}

export default handleClick;
