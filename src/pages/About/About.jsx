import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="header">
          <div className="bg-about"></div>
          <div className="details">
            <h1>About Us</h1>
            <p>The project aims to develop a web application that allows artisans and crafters to display and sell their products.</p>
            <p>It serves as a virtual marketplace that bridges the gap between creators and customers.</p>
          </div>
        </div>

        <div className="middle">
          <div className="upper-row">
            <div className="left-col">
              <h1>Our Mission</h1>
              <p>Handcrafted Haven is designed to nurture a sense of community, support local artisans, and advocate for sustainable consumption.</p>
              <p>We seek to transform how handcrafted items are found, valued, and purchased.</p>
            </div>
          </div>
        </div>

      
        <div className="middle">
          <div className="upper-row">
            <div className="left-col">
              <h1>Values</h1>
              <ul>
                <li>Community Interaction</li>
                <li>Sustainable Consumption</li>
                <li>Secure E-commerce</li>
                <li>Quality Products</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="middle">
          <div className="upper-row">
            <div className="left-col">
              <h1>Social Media</h1>
              <div className="contactIconsContainer">
                <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJZcRDzZkmCzCtpDqhBNlglXcPWgwhxQNLWqZNdMbjvDBWRbxDQFXprVKCgqnWmhJSfdRvq">
                  <img className="contactIcon" src="/email.png" alt="Email" />
                </a>
                <a href="https://www.instagram.com/">
                  <img className="contactIcon" src="/instagram.png" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/">
                  <img className="contactIcon" src="/facebook.png" alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
