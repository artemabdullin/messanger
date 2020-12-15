import { InputBase, Theme } from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/core/styles";

const Input = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 18,
      position: "relative",
      backgroundColor: theme.palette.common.white,
      border: "1px solid rgba(0, 0, 0, 0.05)",
      fontSize: 16,
      width: "307px",
      padding: "10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
    },
  })
)(InputBase);

export default Input;
