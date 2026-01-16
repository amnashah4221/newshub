import Navbar from '../components/navbar';
import Footer from '../components/footer';
import React from 'react';
import './about.css';

const Aboutpage = () => {
  return (
    <>
      <Navbar/>
        <div className='about'>
            <h2>About Us</h2>
            <p>
                NewsHub is a modern digital news platform committed to keeping its audience 
                informed every moment. Built on the philosophy of <italic>“Stay Informed, Stay Ahead”</italic>,
                NewsHub delivers timely, accurate, and reliable news from Pakistan and around 
                the world.
            </p>
            <p>With comprehensive coverage across politics, business, economy, technology, sports, 
               health, entertainment, and weather, NewsHub ensures that readers have access to news 
               that truly matters. Our focus is not just on reporting events, but on providing meaningful 
               context, analysis, and clarity behind every headline.
            </p>
            <p>Every story published on NewsHub is continuously reviewed and updated as new developments 
               emerge, ensuring our audience receives the most current and relevant information. Alongside 
               breaking news, NewsHub features insightful blogs, opinion pieces, and in-depth reports 
               written by experienced contributors and passionate journalists.
            </p>
            <p>Supported by a growing network of correspondents and digital reporters, NewsHub strives 
               to be at the forefront of credible journalism—bringing facts, perspectives, and stories 
               closer to you, anytime and anywhere.
            </p>
        </div>

      <Footer />
      </>
  );
};

export default Aboutpage;