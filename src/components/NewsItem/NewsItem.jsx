import React from 'react';
import './NewsItem.scss'

export default function NewsItem() {
  return (
  <div class="col-md-6 article-pre__col news-item">
    <a href="#" class="article-pre ">
      <div class="article-pre__img article-pre__img--first"></div>
      <h4>
        <span class="article-pre__cat">Protips • </span><span class="article-pre__aut"> by Ann Timothy</span> <span class="date"> - 5 mins read</span>
      </h4>
      <h3>How to improve analytics using few tools in Bricks<span> →</span></h3>
    </a>
  </div>
  )
}
