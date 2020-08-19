import { createThemedUseStyles } from "../../theme";
import { ButtonProps } from ".";

export default createThemedUseStyles((theme) => ({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexGrow: (props: ButtonProps) => (props.buttonValue === 0 ? 2 : 1),
    marginTop: "10px",
    verticalAlign: "middle",
    height: "80px",
    //borderRadius: "20px",
    // border: "3px solid white",
    fontSize: "28px",
    color: "black",
    fontFamily: "Orbitron, serif",
    background: "#dfe6e9",
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      border: "3px solid #e17055",
      fontWeight: 500,
    },
  },
}));
