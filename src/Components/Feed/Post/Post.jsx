import React, { useState, useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useStyles } from "./styles";
import { NotificationContext } from "../../../Context/Notification/Notification";

const Post = (props) => {
  const classes = useStyles();

  const [like, setLike] = useState(false);
  const [open, setOpen, message, setMessage] = useContext(NotificationContext);

  const handleLikeClick = () => {
    if (!like) {
      setOpen(true);
      setMessage(`You liked  "${props.values.title}"`);
    }
    setLike(!like);
  };

  const handleShareClick = async () => {
    try {
      await navigator.clipboard.writeText(props.values.url);
      setOpen(true);
      setMessage("Image link copied to clipboard");
    } catch (error) {
      alert(error);
      console.log(error);
      setOpen(true);
      setMessage("Something Went Wrong");
    }
  };

  //Function to turncate to description to specific length
  const turncateData = (text) => {
    if (text.length < 502) {
      return text;
    }
    let text_ = text.substr(0, 500);
    for (let i = 500; i < text.length; ++i) {
      text_ += text[i];
      if (text[i] === ".") {
        break;
      }
    }
    return text_;
  };

  return (
    <>
      <Card className={classes.root} raised>
        <CardMedia
          className={classes.media}
          image={
            props.values.url ||
            "https://apod.nasa.gov/apod/image/2201/JupiterOpal_HubbleMasztalerz_1880.jpg"
          }
        />
        <div className={classes.overlay}>
          <Typography variant="body2">{props.values.date}</Typography>
        </div>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2">
            {props.values.title}
          </Typography>
          <Typography color="textSecondary" className={classes.text}>
            {turncateData(props.values.explanation)}
          </Typography>
        </CardContent>
        <CardActions className={classes.footer}>
          <IconButton onClick={handleLikeClick}>
            <FavoriteIcon color={like ? "error" : "action"} />
          </IconButton>{" "}
          <IconButton className={classes.right} onClick={handleShareClick}>
            <ShareIcon color={"action"} />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
