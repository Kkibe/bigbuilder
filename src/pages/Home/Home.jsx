import React from 'react'
import Newsletter from '../../components/Newsletter/Newsletter';
import Featured from '../../components/Featured/Featured';
import Slider from '../../components/Slider/Slider';
import './Home.scss';
import JobsFlyer from '../../components/JobsFlyer/JobsFlyer';
import Pricing from '../../components/Pricing/Pricing';
import NewsItem from '../../components/NewsItem/NewsItem';

export default function Home() {
  return (
    <div className='Home'>
      <Slider />
      <Featured />
      <Pricing />
      <h1>News Feed</h1>
      <h2>Read Our Trending Articles</h2>
      <div className='post-container'>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
      <JobsFlyer />
      <Newsletter />
    </div>
  )
}
