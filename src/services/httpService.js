import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BOOKS_API;

const httpService = {
  ...axios,
};

export default httpService;
