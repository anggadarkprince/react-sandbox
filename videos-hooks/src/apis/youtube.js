import axios from "axios";

const KEY = "AIzaSyDSgMsaeaMruNmURJfCnIiJynaiC5p163M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
