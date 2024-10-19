import React, { useState } from 'react'

const Accordion = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className='accordion'>
      <div className='accordion-header' onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className='accordion-content'>{content}</div>}
    </div>
  )
}

const FaqAccordionList = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className='faq-accordion-list'>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          title={faq.title}
          content={faq.content}
          isOpen={activeIndex === index}
          toggleAccordion={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}

export default FaqAccordionList
