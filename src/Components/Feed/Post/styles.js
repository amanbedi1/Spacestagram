import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "99%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    marginBottom: "10px",
  },
  media: {
    paddingTop: "65%",
    "&:hover": "",
    height: "0px",
  },
  overlay: {
    position: "absolute",
    top: "8px",
    left: "10px",
    color: "white",
  },
  cardContent: {
    flexGrow: 1,
  },
  text: {
    fontSize: ["13px", "!important"],
  },
  footer: {
    marginTop: "-18px",
    display: "flex",
    justifyContent: "space-between",
  },
}));
