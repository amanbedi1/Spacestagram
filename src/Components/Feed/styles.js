import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  post_container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    width: "100%",
    "-ms-overflow-style": "none",
    "scrollbar-width": "none",
  },
  center: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  scroller: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-around",
  },
  progress: {
    margin: "10px",
    display: "flex",
    justifyContent: "center",
  },
}));
