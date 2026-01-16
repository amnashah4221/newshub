import Navbar from '../components/navbar';
import Footer from '../components/footer';
import React from 'react';
import './contact.css';

const Contactpage = () => {
  return (
    <>
      <Navbar/>
      <div className="contactus">
        <h3 className='contact-h'>
          <span className='contact-mail'>Email us at:</span>
          <span className='contact-mail-1'> info@newshubservices.com</span>
        </h3>
      </div>

      <Footer />
      </>
  );
};

export default Contactpage;