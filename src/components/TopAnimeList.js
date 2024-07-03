import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../TopAnimeList.css';

const TopAnimeList = () => {
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    const fetchTopAnime = async () => {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/top/anime', {
          params: {
            limit: 10, // Fetch top 10 anime
          },
        });

        const items = response.data.data.map((anime, index) => ({
          id: index + 1,
          title: anime.title,
          image: anime.images.jpg.image_url,
        }));

        setTopAnime(items);
      } catch (error) {
        console.error('Error fetching top anime:', error);
      }
    };

    fetchTopAnime();
  }, []);

  return (
    <div className="top-anime-list">
      <ul>
        {topAnime.map((anime) => (
          <li key={anime.id} className="anime-item">
            <span className="anime-rank">{anime.id}</span>
            <img src={anime.image} alt={anime.title} className="anime-image" />
            <p className="anime-title">{anime.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default TopAnimeList;
