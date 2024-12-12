"use client"

import React, { useState } from 'react'
import FaqItem from './faqItem'

const FaqAccordion = ({}) => {
  const faqs = [
    {
      question:
        'Are electric cars better for the environment than traditional gasoline cars?',
      answer:
        'Electric cars produce zero emissions while driving, but the environmental impact depends on how the electricity is generated.',
    },
    {
      question:
        'Do electric cars have a lower total cost of ownership compared to gasoline cars?',
      answer:
        'Electric cars can have lower maintenance and fuel costs, but the initial purchase price is often higher.',
    },
    {
      question:
        'Is the range of electric cars sufficient for long-distance travel?',
      answer:
        'Modern electric cars have improved range, but long-distance travel may require careful planning and access to charging infrastructure.',
    },
    {
      question: 'Are electric cars as safe as gasoline cars?',
      answer:
        'Electric cars undergo the same safety testing as gasoline cars and can be just as safe, if not safer, due to lower center of gravity and fewer moving parts.',
    },
    {
      question:
        'Do electric cars perform as well as gasoline cars in cold weather?',
      answer:
        'Electric cars can experience reduced range in cold weather due to battery performance, but advancements in technology are mitigating these effects.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const handleOpenIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="">
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => handleOpenIndex(index)}
        />
      ))}
    </div>
  )
}

export default FaqAccordion
