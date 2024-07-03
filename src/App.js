// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import TopAnimeList from './components/TopAnimeList';
import NewestAnime from './components/NewestAnime';
import Skeleton from './components/Skeleton';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'anime',
            apiKey: process.env.REACT_APP_NEWS_API_KEY,
            language: 'en',
            sortBy: 'publishedAt',
            pageSize: 20,
          },
        });

        const isLatin = (str) => /^[\x00-\x7F]*$/.test(str);

        const items = response.data.articles
          .filter((article) => isLatin(article.title) && isLatin(article.description) && article.urlToImage)
          .map((article, index) => ({
            id: index,
            title: article.title,
            url: article.url,
            description: article.description,
            image: article.urlToImage,
          }));

        setArticles(items.slice(0, 8));
        setLoading(false); // Set loading to false after articles are fetched
      } catch (error) {
        console.error('Error fetching anime news:', error);
        setLoading(false); // Handle error and set loading to false
      }
    };

    fetchNews();

    const setDate = () => {
      const dateElement = document.querySelector('.date');
      const currentDate = new Date().toLocaleDateString(); // Formats the date as per the user's locale
      dateElement.textContent = currentDate;
    };

    setDate();
  }, []);

  return (
    <div className="App">
      <div className='title'>
        <span className="date"></span>
        <h1>Anime Daily News</h1>
        {loading ? (
          <Skeleton /> // Show skeleton while loading
        ) : (
          <NewsList articles={articles} />
        )}
      </div>
      <div>
        <div className='title2'> <h1 >Top 10 Most Favorite Anime</h1></div>
        <TopAnimeList />
      </div>
      <div>
        <div className='title3'>
          <div className='marquee'>
            <h1>Most Popular Anime</h1>
            <img src="../naruto.png" alt="Naruto" className='naruto' />
            <h1>Most Popular Anime</h1>
          </div>
        </div>
        <NewestAnime />
        
      </div>
      
      <div className="footer">
          copy write @2024
        </div>
    </div>
  );
};

export default App;
