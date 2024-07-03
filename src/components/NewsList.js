import React from 'react';
import '../NewsList.css';

const NewsList = ({ articles }) => {
  return (
    <div className="news-list">
      {articles.map((article) => (
        <div className="news-item" key={article.id}>
          <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <img src={article.image || 'default-image-url'} alt={article.title} />
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
