import axios from "axios";

const APP_ID =
  "73009d35e19e1e1cea3441634004ccc2b145aede7c07d7998b17bf95430a95dc";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${APP_ID}`
  }
});
