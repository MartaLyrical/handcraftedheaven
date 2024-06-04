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
            <p>
            Handcrafted Haven is a website that showcases the artwork of different artisans. The website allows potential customers to sign in, shop on the portal, and contribute to the fine work of all the artisans on the website. We believe in the philosophy that simplicity is the greatest sophistication. At Handcrafted Haven, we offer simple but high-quality products ranging from all types of jewelry that will catch your eye. Our jewelry ranges from diamond-coated, silver-coated, to gold-coated. Shop for whatever you desire in the comfort of your own home and get the best quality jewelry at an affordable price. We are committed to providing an unforgettable experience. Explore all that we have to offer and remember to sign up to register.
            </p>
          </div>
        </div>

        <div className="middle">
          <div className="upper-row">
            <div className="left-col">
              <h1>Our Mission</h1>
              <p>
              We strive to become the premier artisan store on earth. By offering the highest quality service to all our customers, we bring together people of all ages. Our goal is to cater to the needs of every individual, from the least affluent to the wealthiest, and provide unparalleled support regardless of their social status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
