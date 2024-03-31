import React, { useState } from 'react';
import "../../styles/Faq.css";
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import plus and minus icons

const Faq = React.memo(() => {
  const faqData = [
    { question: "What is Cloud Native?", answer: "" },
    { question: "Do I need to be a member to participate?", answer: "No, all are welcome to participate in CNCF projects, the CNCF Slack channel, mailing lists, and CNCF events." },
    { question: "Why should I join CNCF as a member?", answer: "Answer 3" },
    { question: "How can I sponsor CNCF events?", answer: "Answer 3" },
    { question: "What is the relationship between the CNCF and The Linux Foundation?", answer: "Answer 3" },
    { question: "I have a question, and I’m not sure whom or where to ask.", answer: "Answer 3" },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <main className='main-faq-component'>
      <h1 className="faq-heading-component">FAQs</h1>
      <section className="inner-component-faq">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq ${expandedIndex === index ? 'expanded' : ''}`}>
            <div className="faq-content">
              <span className="faq-text">{faq.question}</span>
              <button className="toggle-btn" onClick={() => toggleExpanded(index)}>
                {expandedIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {expandedIndex === index && (
              <div className="answer-text">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
});

Faq.displayName = 'Faq';

export default Faq;
