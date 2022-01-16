import { CircularProgress, Typography } from "@mui/material";
import { useStyles } from "./styles";

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress
        variant="indeterminate"
        size={70}
        color="info"
      ></CircularProgress>
    </div>
  );
};
export default Loader;
