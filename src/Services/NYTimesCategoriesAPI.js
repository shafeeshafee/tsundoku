import axios from "axios";

const BASE_URL = `${process.env?.REACT_APP_NYT_CATEGORY_NAMES}api-key=${process.env.REACT_APP_NYT_API_KEY}`;

const fetchCategoriesApi = async () => {
  const res = await axios.get(BASE_URL);
  return res.data.results;
};

export default fetchCategoriesApi;
