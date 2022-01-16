import axios from "axios";

const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=6`;

export const getPosts = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
