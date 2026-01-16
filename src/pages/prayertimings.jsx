import Navbar from '../components/navbar';
import Footer from '../components/footer';
import React, { useEffect, useState } from 'react';
import './prayertimings.css';
import cities from '../data/cities.json';

const Prayertimings = () => {
    const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const [data, setData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(()=>{
    const fetchAllCities = async () => {
    const results = [];
    for (let city of cities) {
        try {
            const response = await fetch(
                `https://api.aladhan.com/v1/timingsByCity?city=${city.name}&country=${city.country}&method=2`
            );
            const json = await response.json();
            results.push({ city: city.name, timings: json.data.timings });
        } catch (err) {
            console.error("Failed to fetch", city.name, err);
        }
    }
    setData(results);
};

    fetchAllCities();
  }, [])
    return (
        <>
            <Navbar />
            <div className='prayertimings'>
               <div className='prayer-head'> 
                    <h1> <i className="bi bi-clock"></i>Prayer Timings</h1>
                    <p className='p-head'><i className="bi bi-pin"></i>Daily prayer times for major cities in Pakistan</p>
                    <p className='n-head'>Last updated: {today} </p>
               </div>
              
              <h3>
                Today's Prayer Times {selectedCity && `- ${selectedCity}`}
            </h3>
           
           {selectedCity ? (
  (() => {
    const cityData = data.find(item => item.city === selectedCity);
    if (!cityData) return <p>Loading...</p>; 
    const prayers = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

    return (
      <div className='prayer-cards-container'>
        {prayers.map((name) => (
          <div key={name} className='prayer-card'>
            <h6 className='prayer-name'>{name}</h6>
            <p className='prayer-time'>{cityData.timings[name]}</p>
          </div>
        ))}
      </div>
    );
  })()
) : (
  <p>Please select a city from the table below</p>
)}
                <h3>Prayer Times by City </h3>
                <div className='table-responsive'>
                <table>
                    <thead>
                        <tr>
                            <th>CITY</th>
                            <th>FAJR</th>
                            <th>DHUHR</th>
                            <th>ASR</th>
                            <th>MAGHRIB</th>
                            <th>ISHA</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item)=>(
                            <tr key={item.city} onClick={() => setSelectedCity(item.city)}>
                                <td onClick={() => window.scrollTo(0, 0)}>{item.city}</td>
                                <td onClick={() => window.scrollTo(0, 0)}>{item.timings.Fajr}</td>
                                <td onClick={() => window.scrollTo(0, 0)}>{item.timings.Dhuhr}</td>
                                <td onClick={() => window.scrollTo(0, 0)}>{item.timings.Asr}</td>
                                <td onClick={() => window.scrollTo(0, 0)}>{item.timings.Maghrib}</td>
                                <td onClick={() => window.scrollTo(0, 0)}>{item.timings.Isha}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>

            

            <Footer />
        </>
    );
};

export default Prayertimings;