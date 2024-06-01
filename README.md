# News API Integration

This repository contains a sample news website that integrates with the News API to fetch and display real-time news headlines.

## Setup and Run Locally

1. Clone the repository: `git clone https://github.com/cipherse/news-api-integration.git`
2. Install dependencies: `npm install` (or `yarn install` if you prefer)
3. Create a file named `api-key.js` in the root directory and add your News API key: `export const API_KEY = 'fe7119211bb94fd5adbbaad001bfeb04';`
4. Start the development server: `npm start` (or `yarn start` if you prefer)
5. Open your web browser and navigate to `http://localhost:3000`

## Code Organization

The code is organized into the following structures:

* `src/`: Contains the frontend code
	+ `components/`: Reusable React components
	+ `containers/`: Higher-order components that wrap around API calls
	+ `api/`: API client for making requests to the News API
	+ `index.js`: Entry point for the application
* `server/`: Contains the backend code (optional)
	+ `routes/`: API routes for fetching news headlines
	+ `app.js`: Entry point for the backend server

## Frontend Integration

The frontend is built using React and fetches data from the News API using asynchronous requests.

**NewsHeadlines.js:**
```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsHeadlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
        setHeadlines(response.data.articles);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchHeadlines();
  }, []);

  return (
    <div>
      <h2>Latest Headlines</h2>
      {headlines.map((headline, index) => (
        <div key={index}>
          <h3>{headline.title}</h3>
          <p>Source: {headline.source.name}</p>
          <p>Published: {headline.publishedAt}</p>
        </div>
      ))}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default NewsHeadlines;
# https-github.com-cipherse-news-api-integration
