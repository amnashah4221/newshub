import Navbar from '../components/navbar';
import Footer from '../components/footer';
import React from 'react';
import './privacypage.css';
import { useNavigate } from 'react-router-dom';

const Cookiepolicy = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className='privacypage'>
                <button onClick={() => navigate('/')} className='back-btn'>
                    <i className="bi bi-arrow-left"></i> Back to News
                </button>
                <h1>Cookie Policy</h1>
                <h6 style={{ color: "gray" }}>Last updated: January 10, 2026</h6>
                <ol>
                    <li>
                        <h3>What Are Cookies</h3>
                        <p>
                            Cookies are small text files that are placed on your computer or mobile device when you visit a 
                            website. They are widely used to make websites work more efficiently, as well as to provide 
                            information to the owners of the site. Cookies enhance your browsing experience by allowing 
                            sites to remember your preferences.
                        </p>
                    </li>

                    <li>
                        <h3>How We Use Cookies</h3>
                        <p>NewsHub uses cookies for the following purposes:</p>
                        <ul className='u-list'>
                            <li>
                                <h5>Essential Cookies:</h5>
                                <p>These are necessary for the website to function properly and cannot be switched off in our systems.</p>
                            </li>
                            <li>
                                <h5>Performance Cookies:</h5>
                                <p>These allow us to count visits and traffic sources so we can measure and improve the performance of our site.</p>
                            </li>
                            <li>
                                <h5>Functional Cookies:</h5>
                                <p>These enable the website to provide enhanced functionality and personalization.</p>
                            </li>
                            <li>
                                <h5>Targeting Cookies:</h5>
                                <p>These may be set through our site by our advertising partners to build a profile of your interests.</p>
                            </li>
                            <li>
                                <h5>Identity Data:</h5>
                                <p>Includes first name, last name, username or similar identifier.</p>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>Managing Cookies</h3>
                        <p>
                            You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
                        </p>
                        <h4>Browser Controls</h4>
                        <p>
                            Most browsers allow you to view, manage, delete and block cookies for a website. Be aware that if you delete all cookies, any preferences you have set will be lost, including the ability to opt-out from cookies as this function itself requires placement of an opt-out cookie on your device.
                        </p>
                        <p>For information on how to manage cookies on popular browsers, visit:</p>
                        <ul>
                            <li>Google Chrome: chrome://settings/cookies</li>
                            <li>Mozilla Firefox: about:preferences#privacy</li>
                            <li>Safari: Preferences → Privacy</li>
                            <li>Microsoft Edge: edge://settings/privacy</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Third-Party Cookies</h3>
                        <p>In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site:</p>
                        <ul className='u-list'>
                            <li>
                                <h5>Google Analytics:</h5>
                                <p>Helps us understand how visitors engage with our site.</p>
                            </li>
                            <li>
                                <h5>Social Media:</h5>
                                <p>Social sharing buttons and widgets may set cookies.</p>
                            </li>
                            <li>
                                <h5>Advertising Partners:</h5>
                                <p>May use cookies to deliver relevant advertisements.</p>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>Cookie Consent</h3>
                        <p>
                            When you first visit our website, you will be shown a cookie consent banner. You can choose to accept all cookies, reject non-essential cookies, or customize your preferences. You can change your preferences at any time by clearing your cookies and revisiting our site.
                        </p>
                    </li>

                    <li>
                        <h3>Updates to This Policy</h3>
                        <p>
                            We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we post changes to this policy, we will revise the "Last updated" date at the top of this policy.
                        </p>
                    </li>

                    <li>
                        <h3>Contact Us</h3>
                        <p>If you have any questions about our use of cookies, please contact us at:</p>
                        <div className='privacy-mail'>
                            <h5>Email:</h5>
                            <p>privacy@newhub.com</p>
                        </div>
                        <div className='privacy-address'>
                            <h5>Address:</h5>
                            <p>
                                NewsHub Communications 4th Floor, Madina City Mall,
                                Abdullah Haroon Road, Saddar Karachi, Sindh Pakistan
                            </p>
                        </div>
                    </li>
                </ol>
            </div>
            <Footer />
        </>
    );
};

export default Cookiepolicy;
