import axios from 'axios';

const API_KEY = 'fe7119211bb94fd5adbbaad001bfeb04';

const fetchHeadlines = async () => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    throw error;
  }
};

export default fetchHeadlines;
