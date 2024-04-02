import React, { useState } from 'react';
import "../../styles/Faq.css";

const Faq = React.memo(() => {
  const faqsData = [
    { question: "What is Cloud Native?", answer: "Answer 1" },
    { question: "Do I need to be a member to participate?", answer: "No, all are welcome to participate in CNCF projects, the CNCF Slack channel, mailing lists, and CNCF events." },
    { question: "Why should I join CNCF as a member?", answer: "Answer 3" },
    { question: "How can I sponsor CNCF events?", answer: "Answer 3" },
    { question: "What is the relationship between the CNCF and Linux Foundation?", answer: "Answer 3" },
    { question: "I have a question, and I'm not sure whom or where to ask.", answer: "Answer 3" },
  ];

  const [faqs, setFaqs] = useState(
    faqsData.map((faq) => ({ ...faq, isOpen: false }))
  );

  const toggleExpanded = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (

    <main>
      <div className=' flex justify-center items-center md:mb-12 mb-8 md:mt-6 mt-3'>
        <span className='headingT '>FAQs</span>
      </div>
      <section className='faqContBg grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-5 text-white py-14 md:px-20 px-4'>
        {faqs.map((faq, index) => (
          <div key={index} className={`   faqDivBg border  font-mona-sans-semibold border-gray-400 rounded-md px-8 py-5 `}>
            <div className='flex items-center justify-between'>
              <span className='md:w-9/12 w-11/12 md:text-lg'>{faq.question}</span>
              <button onClick={() => toggleExpanded(index)} className='w-1/12  flex justify-center items-center'>
                <img src={faq.isOpen ? "assets/minus.svg" : "assets/plus.svg"} className="w-6 translate-x-3  translate-y-1" alt={faq.isOpen ? "minus" : "plus"} />
              </button>
            </div>
            {faq.isOpen && <p className='text-sm mt-2'>{faq.answer}</p>}
          </div>
        ))}
      </section>
    </main>
  );
});

Faq.displayName = 'Faq';

export default Faq;
