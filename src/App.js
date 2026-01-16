import React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../src/pages/home";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Feedbackpage from "./pages/feedback";
import Contactpage from "./pages/contact";
import Aboutpage from "./pages/about";
import Privacypage from "./pages/privacypage";
import TermsofService from "./pages/termsofservice";
import Cookiepolicy from "./pages/cookiepolicy";
import Goldrates from "./pages/goldrates";
import Currencypage from "./pages/currencypage";
import Prayertimings from "./pages/prayertimings";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedbackpage/>}/>
        <Route  path="/contactus" element={<Contactpage/>}/>
        <Route  path="/aboutus" element={<Aboutpage/>}/>
        <Route  path="/privacypolicy" element={<Privacypage/>}/>
        <Route path="/termsofservice" element={<TermsofService/>}/>
        <Route path="/cookiepolicy" element={<Cookiepolicy/>}/>
        <Route path="/goldrates" element={<Goldrates/>}/>
        <Route path="/currencyexchange" element={<Currencypage/>}/>
        <Route path="/prayertimings" element={<Prayertimings/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
