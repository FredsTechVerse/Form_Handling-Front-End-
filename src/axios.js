//WE CREATE AN INSTANCE OF AXIOS AND EXPORT IT TO USE IT FROM NOW HENCEFORTH.
import axios from "axios";

const instance = axios.create({
  // baseURL: "https://form-express.herokuapp.com/",
  baseURL: "http://localhost:3005/",
});
export default instance;
