import * as React from "react";
import { Box, Toolbar, Typography, Button, AppBar } from "@mui/material";
import { useStyles } from "./styles";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar className={classes.bar}>
          <div className={classes.logo}>
            <img src={logo} height="50px" width="50px"></img>
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Spacestagram
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
