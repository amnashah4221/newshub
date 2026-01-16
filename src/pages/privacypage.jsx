import Navbar from '../components/navbar';
import Footer from '../components/footer';
import React from 'react';
import './privacypage.css';
import { useNavigate } from 'react-router-dom';

const Privacypage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className='privacypage'>
                <button onClick={() => navigate('/')} className='back-btn'>
                    <i className="bi bi-arrow-left"></i> Back to News
                </button>
                <h1>Privacy Policy</h1>
                <h6 style={{ color: "gray" }}>Last updated: January 10, 2026</h6>
                <ol>
                    <li>
                        <h3>Introduction</h3>
                        <p>
                            Welcome to NewsHub. We respect your privacy and are committed to protecting
                            your personal data. This privacy policy will inform you about how we look 
                            after your personal data when you visit our website and tell you about your
                            privacy rights and how the law protects you.
                        </p>
                    </li>

                    <li>
                        <h3>Information We Collect</h3>
                        <div>
                            We may collect, use, store and transfer different kinds of personal data 
                            about you:
                            <ul className='u-list'>
                                <li>
                                    <h5>Identity Data: </h5>
                                    <p> includes first name, last name, username or similar identifier.</p>
                                </li>
                            </ul>

                            <ul className='u-list'>
                                <li>
                                    <h5>Contact Data: </h5>
                                    <p>includes email address and telephone numbers.</p>
                                </li>
                            </ul>

                            <ul className='u-list'>
                                <li>
                                    <h5>Technical Data: </h5>
                                    <p>includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</p>
                                </li>
                            </ul>

                            <ul className='u-list'>
                                <li>
                                    <h5>Usage Data: </h5>
                                    <p> includes information about how you use our website and services.</p>
                                </li>
                            </ul>

                            <ul className='u-list'>
                                <li>
                                    <h5>Marketing and Communications Data: </h5>
                                    <p> includes your preferences in receiving marketing from us.</p>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <h3>How We Use Your Information?</h3>
                        <div>
                            We use your personal data for the following purposes:
                            <ul>
                                <li>To provide and maintain our news service</li>
                                <li>To personalize your experience and deliver content relevant to your interests.</li>
                                <li>To send you newsletters and updates (with your consent).</li>
                                <li>To improve our website and services</li>
                                <li>To detect, prevent and address technical issues</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <h3>Data Security</h3>
                        <p>We have implemented appropriate security measures to prevent your personal 
                            data from being accidentally lost, used or accessed in an unauthorized way, 
                            altered or disclosed. We limit access to your personal data to those employees,
                            agents, contractors and other third parties who have a business need to know.
                        </p>
                    </li>

                    <li>
                        <h3>Your Legal Rights</h3>
                        <div>
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                            <ul>
                                <li>Request access to your personal data</li>
                                <li>Request correction of your personal data</li>
                                <li>Request erasure of your personal data</li>
                                <li>Object to processing of your personal data</li>
                                <li>Request restriction of processing your personal data</li>
                                <li>Request transfer of your personal data</li>
                                <li>Right to withdraw consent</li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <h3>Third-Party Links</h3>
                        <p>This website may include links to third-party websites, plug-ins and 
                            applications. Clicking on those links or enabling those connections may 
                            allow third parties to collect or share data about you. We do not control 
                            these third-party websites and are not responsible for their privacy 
                            statements.
                        </p>
                    </li>

                    <li>
                        <h3>Contact Us</h3>
                        <div>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            <div className='privacy-mail'>
                                <h5>Email:</h5><p>privacy@newhub.com</p>
                            </div>
                            <div className='privacy-address'>
                                <h5>Address:</h5><p> NewsHub Communications 4th Floor, Madina City Mall,
                                    Abdullah Haroon Road, Saddar Karachi, Sindh Pakistan
                                </p>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
            <Footer />
        </>
    );
};

export default Privacypage;