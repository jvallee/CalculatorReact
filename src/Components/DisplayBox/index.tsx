import React, { Component } from "react";
import { Operator } from "../../lib/types";
import useDisplayBoxStyles from "./useDisplayStyles";

export type DisplayProps = {
  displayValue?: string;
  setMemory?: React.Dispatch<React.SetStateAction<number>>;
  setOperand?: React.Dispatch<React.SetStateAction<Operator>>;
};

const DisplayBox: React.FC<DisplayProps> = (props) => {
  const styles = useDisplayBoxStyles();
  return (
    <div className={styles.Display}>
      {/* end goal is not to use null check */}
      <div className={styles.displayText}>{props.displayValue ?? "0"}</div>
    </div>
  );
};

export default DisplayBox;
