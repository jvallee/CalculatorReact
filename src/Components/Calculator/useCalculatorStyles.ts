import { createThemedUseStyles } from "../../theme";

export default createThemedUseStyles((theme) => ({
  calculator: {
    width: 300,
    height: 600,
    backgroundColor: "#1F1716",
    paddingTop: 25,
    margin: "auto",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "25px;",
  },
}));
