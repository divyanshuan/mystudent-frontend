import axios from "axios";
import baseUrl from "../utils/baseurl";

export default axios.create({
  baseURL: `${baseUrl}/api`,
});
