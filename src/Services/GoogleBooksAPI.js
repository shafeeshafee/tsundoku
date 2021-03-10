import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_GOOG_URL}key=${process.env.REACT_APP_GOOG_API_KEY}&q=`

const fetchBooksApi = async (q) => {
    const res = await axios.get(`${BASE_URL}${q}`);
    return res.data;
}

export default fetchBooksApi;