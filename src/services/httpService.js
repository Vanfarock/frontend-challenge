import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BOOKS_API_URL;

const httpService = {
  ...axios,
};

export default httpService;
