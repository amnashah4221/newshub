import Navbar from '../components/navbar';
import Footer from '../components/footer';
import React from 'react';
import './privacypage.css';
import { useNavigate } from 'react-router-dom';

const TermsofService = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className='privacypage'>
                <button onClick={() => navigate('/')} className='back-btn'>
                    <i className="bi bi-arrow-left"></i> Back to News
                </button>
                <h1>Terms of Service</h1>
                <h6 style={{ color: "gray" }}>Last updated: January 10, 2026</h6>
                <ol>
                    <li>
                        <h3>Agreement to Terms</h3>
                        <p>
                            By accessing or using NewsHub, you agree to be bound by these Terms of Service and all applicable
                            laws and regulations. If you do not agree with any of these terms, you are prohibited from using 
                            or accessing this site.
                        </p>
                    </li>

                    <li>
                        <h3>Use License</h3>
                        <div>
                            Permission is granted to temporarily access the materials (information or software) on NewsHub 
                            for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
                            transfer of title, and under this license you may not:
                            <ul className='u-list'>
                                <li>Modify or copy the materials </li>
                                <li>Use the materials for any commercial purpose or public display</li>
                                <li>Attempt to decompile or reverse engineer any software contained on NewsHub</li>
                                <li>Remove any copyright or other proprietary notations from the materials</li>
                                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <h3>Content Guidelines</h3>
                        <div>All content published on NewsHub is for informational purposes only. We strive to ensure accuracy
                            but make no guarantees about the completeness, reliability, or accuracy of this information.
                            Users who interact with our platform agree to:
                            <ul>
                                <li>Provide accurate information when creating accounts or submitting content</li>
                                <li>Not post defamatory, obscene, or illegal content</li>
                                <li>Not impersonate others or misrepresent affiliations</li>
                                <li>Respect intellectual property rights</li>
                                <li>Not engage in harassment or hate speech</li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <h3>Intellectual Property</h3>
                        <p>The content on NewsHub, including but not limited to text, graphics, images, logos, and software,
                            is the property of NewsHub or its content suppliers and is protected by international copyright 
                            laws. Unauthorized use of any materials may violate copyright, trademark, and other laws.
                        </p>
                    </li>

                    <li>
                        <h3>Disclaimer</h3>
                        <p>The materials on NewsHub are provided on an 'as is' basis. NewsHub makes no warranties, 
                            expressed or implied, and hereby disclaims and negates all other warranties including, 
                            without limitation, implied warranties or conditions of merchantability, fitness for a 
                            particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </li>

                    <li>
                        <h3>Limitations</h3>
                        <p>In no event shall NewsHub or its suppliers be liable for any damages (including, without 
                            limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                            the use or inability to use the materials on NewsHub, even if NewsHub or a NewsHub authorized 
                            representative has been notified orally or in writing of the possibility of such damage.
                        </p>
                    </li>

                    <li>
                        <h3>User Accounts</h3>
                        <p>If you create an account on NewsHub, you are responsible for maintaining the security of your 
                            account and all activities that occur under your account. You must notify us immediately of any 
                            unauthorized use of your account.
                        </p>
                    </li>

                    <li>
                        <h3>Modifications</h3>
                        <p>NewsHub may revise these terms of service at any time without notice. By using this website, 
                            you are agreeing to be bound by the then current version of these terms of service. We encourage 
                            you to periodically review these terms.
                        </p>
                    </li>

                    <li>
                        <h3>Governing Laws</h3>
                        <p>These terms and conditions are governed by and construed in accordance with applicable laws, 
                            and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                        </p>
                    </li>
                    <li>
                        <h3>Contact Us</h3>
                        <div>
                            For any questions regarding these Terms of Service, please contact us at:
                            <div className='privacy-mail'>
                                <h5>Email:</h5><p>legal@newhub.com</p>
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

export default TermsofService;