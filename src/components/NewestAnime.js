import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../NewestAnime.css';

const NewestAnime = () => {
  const [newestAnime, setNewestAnime] = useState([]);

  useEffect(() => {
    const fetchNewestAnime = async () => {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/anime', {
          params: {
            order_by: 'rank',
            sort: 'desc',
            limit: 2,
          },
        });

        const animeList = response.data.data
          .map(anime => ({
            title: anime.title,
            image: anime.images.jpg.image_url,
          }))
          .filter((anime, index, self) =>
            index === self.findIndex(a => a.title === anime.title)
          );

        setNewestAnime(animeList);
      } catch (error) {
        console.error('Error fetching newest anime:', error);
      }
    };

    fetchNewestAnime();
  }, []);

  if (!newestAnime.length) {
    return null;
  }

  return (
    <div className="newest-anime-container">
      {newestAnime.map((anime, index) => (
        <div key={index} className="newest-anime">
          <img src={anime.image} alt={anime.title} className="newest-anime-image" />
          <div className="newest-anime-title">{anime.title}</div>
        </div>
      ))}
    </div>
  );
};

export default NewestAnime;
