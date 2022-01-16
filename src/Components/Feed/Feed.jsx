import React, { useState, useEffect, useContext } from "react";
import { Box, CircularProgress, Grid, LinearProgress } from "@mui/material";
import { useStyles } from "./styles";
import Post from "./Post/Post";
import { getPosts } from "../../api/api";
import Loader from "../Loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { ErrorContext } from "../../Context/Error/Error";

const Feed = () => {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [_error, setError] = useContext(ErrorContext);

  useEffect(() => {
    getPosts()
      .then((data) => {
        if (!data) {
          setError(true);
          return;
        }
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  }, []);

  // function to fetch more posts
  const fetchPosts = () => {
    getPosts()
      .then((data) => {
        if (data === undefined) {
          setError(true);
          setPosts([]);
          return;
        }
        const data_ = posts.concat(data);
        setPosts(data_);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return loading ? (
    <div className={classes.center}>
      <Loader />
    </div>
  ) : (
    <>
      <Box className={classes.post_container}>
        <InfiniteScroll
          className={classes.scroller}
          dataLength={posts.length}
          next={fetchPosts}
          hasMore={true}
          loader={
            <div className={classes.progress}>
              <CircularProgress />
            </div>
          }
        >
          <Grid container spacing={4}>
            {posts.map((post, idx) => (
              <Grid item xs={12} md={4} sm={6} lg={4} key={post.url}>
                <Post values={post} key={idx}></Post>
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default Feed;
