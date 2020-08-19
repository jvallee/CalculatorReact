import { createThemedUseStyles } from "../../theme";

export default createThemedUseStyles((theme) => ({
  Display: {
    backgroundColor: "lightgrey",
    width: "100%",
    height: "80px",
    fontSize: "2rem",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  displayText: {
    padding: 15,
  },
}));
