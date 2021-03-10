import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_NYT_URL}api-key=${process.env.REACT_APP_NYT_API_KEY}`

const fetchBestsellersApi = async () => {
    const res = await axios.get(BASE_URL);
    return res.data.results;
}

export default fetchBestsellersApi;