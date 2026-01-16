import Navbar from '../components/navbar';
import Footer from '../components/footer';
import React from 'react';
import './feedback.css';

const Feedbackpage = () => {
  return (
    <>
      <Navbar/>
      <div className="feedback">
        <h3 className='feedback-h'>
          <span className='feed-mail'>Email us at:</span>
          <span className='feed-mail-1'> web@newshubservices.com</span>
        </h3>

        <div className='feedback-p'>
          <h5>Head Office:</h5>
          <p>
            NewsHub Communications 4th Floor, Madina City Mall,
            Abdullah Haroon Road, Saddar Karachi, Sindh Pakistan
          </p>
        </div>
      </div>

      <Footer />
      </>
  );
};

export default Feedbackpage;