const express = require('express');
const axios = require('axios');

const app = express();

app.get('/api/headlines', async (req, res) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    res.json(response.data.articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
