# News API Integration

This repository contains a sample news website that integrates with the News API to fetch and display real-time news headlines.

Setup and Run Locally
Clone the repo: git clone https://github.com/cipherse/news-api-integration.git
Installation of dependencies: npm i (or yarn if you wish)
Create a file named api-key. project root and add your News API key: export const API_KEY = 'fe7119211bb94fd5adbbaad001bfeb04';
Development server: npm start (or yarn start if you prefere)
In your web browser go to http://localhost:3000
Code Organization
Structures of the code are the following:
src/: Contains the frontend source code
components/: common React components (react)
This example fetches a series of postcards and displays them, a typical layout for our containers/: Higher-order components that wrap around API calls.
api/: This part of the package is the api client for making requests to the News API.
index. js: Root for the application
server/ — backend code (optional)
routes
Frontend Integration
It uses asynchronous requests to the News API to fetch data and the frontend is written in React.
NewsHeadlines.js:
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsHeadlines = () => {
Rule 1: Variable name can be headlines and method name can toggle using useState rule const [headlines, setHeadlines] = useState([]);
const [, setError] = useState();
 useEffect(() => {
const fetchHeadlines = renderHeadlines => {
      try {
const response = await axios. get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
setHeadlines(response. data. articles);
      } catch (error) {
setError(error. message);
      }
    };
    fetchHeadlines();
  }, []);

  return (
    <div>
<h2>Latest Headlines</h2>
{headlines. map((headline, index) => (
        <div key={index}>
<h3>{headline.title}</h3>
<p>Source: {headline. source. name}</p>
<p>Published: {headline. publishedAt}</p>
        </div>
      ))}
{error && <p>error : {error}</p>}

   
# https-github.com-cipherse-news-api-integration
