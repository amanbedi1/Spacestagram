import React, { useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useStyles } from "./styles";
import { ErrorContext } from "../../Context/Error/Error";

const ErorrPage = () => {
  const classes = useStyles();
  const [error, setError] = useContext(ErrorContext);

  return (
    <Box className={classes.container}>
      <Typography variant="h1" align="center" className={classes.heading}>
        401
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        align="center"
        color="textSecondary"
        className={classes.subheading}
      >
        Something Unexpected Occur
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        <Button
          color="primary"
          size="large"
          variant="outlined"
          className={classes.button}
          onClick={() => setError(false)}
        >
          Refresh
        </Button>
      </Typography>
    </Box>
  );
};

export default ErorrPage;
