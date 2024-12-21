import React from "react";

export default function AdminFooter() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="section">
            <h4>About Us</h4>
            <p>
              Your trusted platform for buying and selling pre-owned vehicles.
              Explore a wide range of vehicles in your city.
            </p>
          </div>
          <div className="section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/faq">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="section">
            <h4>Contact Us</h4>
            <p>Email: tops@gmail.com</p>
            <p>Phone: +91 (123) 456-7890</p>
            <p>Address: Tops Technology Rajkot</p>
          </div>
          <div className="section">
            <h4>Follow Us</h4>
            <div className="socialMedia">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>&copy; 2024 AutoPortal. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
