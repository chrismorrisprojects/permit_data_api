import axios from "axios";

export default axios.create({
  baseURL: "http://ogdatadb.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
