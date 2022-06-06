import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_NYT_CATEGORY}`;

const fetchCategoriesApi = async (topic) => {
  const res = await axios.get(
    `${BASE_URL}${topic}.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
  );
  return res.data.results;
};

export default fetchCategoriesApi;
