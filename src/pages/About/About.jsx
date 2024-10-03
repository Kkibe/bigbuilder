import React from 'react'
import './About.css';
import Contact from '../../components/Contact/Contact';
import Pricing from '../../components/Pricing/Pricing';
import Faq from '../../components/Faq/Faq';
import Newsletter from '../../components/Newsletter/Newsletter';
import Image from '../../assets/camera-viewfinder.png';

export default function About() {
  return (
<div>
    <figure class="quote">
      <blockquote>
        <p>What an astonishing thing a book is. It's a flat object made from a tree with flexible parts on which are imprinted lots of funny dark squiggles. But one glance at it and you're inside the mind of another person, maybe somebody dead for thousands of years. Across the millennia, an author is speaking clearly and silently inside your head, directly to you. Writing is perhaps the greatest of human inventions, binding together people who never knew each other, citizens of distant epochs. Books break the shackles of time. A book is proof that humans are capable of working magic.</p>
        <figcaption>
          Carl Sagan
        </figcaption>
      </blockquote>
      <img src={Image} alt="" />
    </figure>
    <figure class="quote">
      <img src={Image} alt="" />
      <blockquote>
        <p>As you read a book word by word and page by page, you participate in its creation, just as a cellist playing a Bach suite participates, note by note, in the creation, the coming-to-be, the existence, of the music. And, as you read and re-read, the book of course participates in the creation of you, your thoughts and feelings, the size and temper of your soul.</p>
        <figcaption>
          Ursula K. Le Guin
        </figcaption>
      </blockquote>
    </figure>

<Pricing />
<Faq />
<Contact />
  <Newsletter />
  </div>
  )
}
