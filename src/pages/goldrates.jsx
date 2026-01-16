import Navbar from '../components/navbar';
import Footer from '../components/footer';
import React, { useEffect, useState } from 'react';
import './goldrates.css';

const Goldrates = () => {
    const [goldRates, setGoldRates] = useState(null);
    const [rates, setRates] = useState(null);

    useEffect(()=>{
        const fetchGoldPrice = async ()=>{
            const response = await fetch('https://api.coinbase.com/v2/prices/XAU-USD/spot');
            const result = await response.json();
            setGoldRates(parseFloat(result.data.amount));
        }

       const fetchCurrencyRates = async ()=>{
            const response = await fetch('https://open.er-api.com/v6/latest/USD');
            const rateData = await response.json();
            setRates(rateData.rates.PKR);
        }


        fetchGoldPrice();
        fetchCurrencyRates();
        },[]);

        //1 Troy \ounce = 31.1035Grams
        //1 Tola = 11.664 Grams

        const pricePerOunce = goldRates * rates;
        const pricePerGram = pricePerOunce / 31.1035;
        const pricePer10Gram = pricePerGram * 10;
        const pricePerTola = pricePerGram * 11.664;

        const formatPrice = (price)=> Math.round(price).toLocaleString();

    return (
        <>
            <Navbar />
            <div className='goldratepage'>
                <h1>Gold Rates</h1>
                <h5>Today in Pakistan</h5>
                <p>
                    Gold prices in Pakistan are influenced by international gold market rates and the exchange rate 
                    of the Pakistani rupee. Since both global gold prices and currency values change regularly, gold
                    rates in Pakistan can fluctuate frequently. Prices are usually updated every few hours and may 
                    be revised more often during periods of significant movement in the live spot gold market.
                </p>

                <div className='g-cards'>
                    <div className='g-card'>
                        <h4>Per Tola</h4>
                        <h4 className='gold-p'>Rs.{formatPrice(pricePerTola)} /-</h4>
                        <h4 className='k-gold'>24K Gold</h4>
                    </div>

                    <div className='g-card'>
                        <h4>Per 10 Gram</h4>
                        <h4 className='gold-p'>Rs.{formatPrice(pricePer10Gram)} /-</h4>
                        <h4 className='k-gold'>24K Gold</h4>
                    </div>

                    <div className='g-card'>
                        <h4>Per Gram</h4>
                        <h4 className='gold-p'>Rs. {formatPrice(pricePerGram)}/-</h4>
                        <h4 className='k-gold'>24K Gold</h4>
                    </div>

                    <div className='g-card'>
                        <h4>Per Ounce</h4>
                        <h4 className='gold-p'>Rs.{formatPrice(pricePerOunce)} /-</h4>
                        <h4 className='k-gold'>24K Gold</h4>
                    </div>
                </div>

                <p>
                   Gold, often referred to as the yellow metal, has represented wealth and prosperity for centuries.
                   In addition to its decorative use, gold has long served as a safe-haven investment, offering 
                   protection to investors during periods of economic instability, geopolitical conflict, and market
                   fluctuations. In recent times, this role has become even more prominent as global economic and 
                   political uncertainties continue to rise. Gold’s attractiveness as a safe-haven asset extends 
                   beyond institutional investors; individual investors also rely on it to safeguard their wealth 
                   against volatility and uncertainty. Moreover, the growth of online trading platforms and gold 
                   exchange-traded funds (ETFs) has made gold investment more accessible, leading to increased 
                   demand.
                </p>
            </div>

            <Footer />
        </>
    );
};

export default Goldrates;