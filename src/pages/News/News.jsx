import React from 'react';
import './News.scss';
import NewsItem from '../../components/NewsItem/NewsItem';

export default function News() {
  return (
    <div className='news'>
      <h1>Explore Juiciest News</h1>
      <div className='post-container'>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </div>
  )
}
