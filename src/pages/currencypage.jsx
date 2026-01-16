import Navbar from '../components/navbar';
import Footer from '../components/footer';
import currencies from '../data/currencies.json';
import React, {useState, useEffect} from 'react';
import './currencypage.css';

const Currencypage = () => {
     const [rates, setRates] = useState([]);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then(res => res.json())
      .then(data => {
        
      const usdToPkr = data.rates["PKR"];
        const filtered = currencies
        .map(c => ({
          code: c.code,
          name: c.name,
          image: c.img,
          rate: usdToPkr/(data.rates[c.code]) 
        }));
        setRates(filtered);
      })
      .catch(err => console.error(err));
  }, []);
   
    return (
        <>
            <Navbar />
            <div className='currencypage'>
                <h1>Dollar and Other Currency Rates</h1>
                <p>
                   The US Dollar (USD) plays a vital role in global trade because it influences
                   the pricing of goods and services exchanged between nations. Changes in the 
                   exchange rate can greatly affect import and export costs, which in turn 
                   impact a country’s trade balance and overall economy. For example, when the 
                   dollar becomes stronger, imports become more costly for countries such as 
                   Pakistan, resulting in higher consumer prices and increased expenses for 
                   businesses.
                </p>

                <p>
                    Pakistanis often look up the exchange rates of the US Dollar, UAE Dirham (AED), 
                    and Saudi Riyal (SAR) because the country heavily depends on remittances from 
                    overseas workers, especially those based in the Middle East. Many people have 
                    relatives or friends working abroad, so monitoring exchange rates helps them 
                    understand the value of the money sent back home. Moreover, changes in currency 
                    rates affect import prices, travel costs, and investment choices, making it 
                    important for both individuals and businesses to stay updated on exchange rate 
                    movements.
                </p>

                <div className='g-cards'>
                   {rates.length === 0 ? (
            <p>Loading rates...</p>
          ) : (
            rates.map((c) => (
              <div className='g-card' key={c.code}>
               <img src={c.image} style={{width: "80%"}} alt={c.name}/>
                 <div className='fstrow'>
                  <h2>{c.name}</h2>
                  <h3>{c.code}</h3>
                  </div>
                <h5>Rate: {c.rate.toFixed(2).toLocaleString()}</h5>
              </div>
            ))
          )}
                </div>

                <p>
                 Note: The currency rates displayed here are indicative only and are subject to change
                </p>
            </div>

            <Footer />
        </>
    );
};

export default Currencypage;