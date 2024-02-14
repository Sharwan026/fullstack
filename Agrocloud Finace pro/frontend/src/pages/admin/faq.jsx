// import React from 'react';
import '../admin/faq.css';

const FAQForm = () => {
  return (
    <div className="faq-form">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-category">
        <h2>General Questions</h2>
        <div className="faq-question">
          <div className="question">What is fund?</div>
          <div className="answer">Fund is simply...</div>
        </div>
        {/* Add more questions and answers as needed */}
      </div>

      <div className="faq-category">
        <h2>Account Information</h2>
        <div className="faq-question">
          <div className="question">How do I reset my password?</div>
          <div className="answer">To reset your password, follow these steps...</div>
        </div>
        {/* Add more questions and answers as needed */}
      </div>

      {/* Add more FAQ categories as needed */}
    </div>
  );
};

export default FAQForm;
