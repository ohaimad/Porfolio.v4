'use client';

import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Let's discuss your next project!");
    const body = encodeURIComponent(
      "Hi Otmane,\n\nI'm interested in discussing a potential project with you. Here are some details:\n\n" +
      "Project Type: [Please describe your project]\n" +
      "Timeline: [When do you need this completed?]\n" +
      "Budget: [What's your budget range?]\n" +
      "Additional Details: [Any other information you'd like to share]\n\n" +
      "Looking forward to hearing from you!\n\n" +
      "Best regards,\n[Your Name]"
    );
    
    window.location.href = `mailto:haimadotmane@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main CTA Section */}
        <div className="footer-cta">
          <span className="contact-label">(CONTACT)</span>
          <h1 className="cta-title">
            READY TO DISCUSS<br />
            YOUR NEXT PROJECT?
          </h1>
          <div onClick={handleEmailClick} className="cta-arrow">
            <div className="arrow-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M15 45L45 15M45 15H15M45 15V45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-divider"></div>

        {/* Footer Content Grid */}
        <div className="footer-content">
          {/* Work With Us Section */}
          <div className="footer-section">
            <div className="section-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="section-title">MADE WITH HATE</h3>
          </div>

          {/* Hello Section */}
          <div className="footer-section">
            <h3 className="section-title">CONTACT</h3>
            <div className="section-content">
              <p 
                onClick={handleEmailClick} 
                style={{ cursor: 'pointer', transition: 'color 0.3s ease' }}
                className="email-link"
              >
                haimadotmane@gmail.com
              </p>
              <br />
              {/* <p>17 WILLOW STREET,<br />LONDON, EC2A 4BH</p>
              <br />
              <p className="hours-title">OPENING HOURS</p>
              <p>MONDAY TO FRIDAY<br />9AM - 6PM</p> */}
            </div>
          </div>

          {/* Social Section */}
          <div className="footer-section">
            <h3 className="section-title">SOCIAL</h3>
            <div className="section-content">
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/otmaane._/" className="footer-link">INSTAGRAM</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/otmanehaimad/" className="footer-link">LINKEDIN</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/otmanehaimad" className="footer-link">BEHANCE</a>
            </div>
          </div>

          {/* Other Section */}
          {/* <div className="footer-section">
            <h3 className="section-title">OTHER</h3>
            <div className="section-content">
              <a href="#" className="footer-link">SUPPLIER T&CS</a>
              <a href="#" className="footer-link">PRIVACY POLICY</a>
              <a href="#" className="footer-link">CAREERS</a>
            </div>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <span>OH</span>
          </div>
          <div className="footer-copyright">
            <p>©<br />Otmane Haimad</p>
          </div>
          <div className="footer-credits">
            <p>2024-2025</p>
          </div>
          <div className="back-to-top">
            <button className="back-to-top-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              BACK TO TOP <span className="arrow-up">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
