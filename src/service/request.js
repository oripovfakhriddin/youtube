import axios from "axios";

const request = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBopYg6wbQntInBZrmp7zq2wnX3V55gKIQ",
  timeout: 10000
});

export default request;