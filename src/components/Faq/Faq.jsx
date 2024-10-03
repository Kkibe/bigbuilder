import React from 'react'
import './Faq.scss';
import { QuestionAnswer } from '@mui/icons-material';

export default function Faq() {
  const faqs = [
    {
      id: 1,
      question: "Why is the moon sometimes out during the day?",
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.'
    },
    {
      id: 2,
      question: "Why is the moon sometimes out during the day?",
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.'
    },
    {
      id: 3,
      question: "Why is the moon sometimes out during the day?",
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.'
    },
    {
      id: 4,
      question: "Why is the moon sometimes out during the day?",
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.'
    },
    {
      id: 5,
      question: "Why is the moon sometimes out during the day?",
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.'
    },
    {
      id: 6,
      question: "Why is the moon sometimes out during the day?",
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.'
    },
    {
      id: 7,
      question: "Why is the moon sometimes out during the day?",
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.'
    },
    {
      id: 8,
      question: "Why is the moon sometimes out during the day?",
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.'
    },
    {
      id: 9,
      question: "Why is the moon sometimes out during the day?",
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.'
    },
    {
      id: 10,
      question: "Why is the moon sometimes out during the day?",
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.'
    },
  ]
  
  function toggleAccordion(e) {
    const itemToggle = e.target.getAttribute("aria-expanded");
    if (itemToggle == "false") {
      e.target.setAttribute("aria-expanded", "true");
    } else{
      e.target.setAttribute("aria-expanded", "false");
    }
  }
  return (
<div class="container">
  <h1>FAQ's</h1>
  <h2>People ask for:</h2>
  <div class="accordion">
    {
      faqs.map(faq => {
        return (
          <div class="accordion-item" key={faq.id}   onClick={(e) => toggleAccordion(e)}  aria-expanded="false">
            <button id="accordion-button-1"><span class="accordion-title">{faq.question}</span><span class="icon" aria-hidden="true"></span></button>
            <div class="accordion-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        )
      })
    }
  </div>
</div>
  )
}
