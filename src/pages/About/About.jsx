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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              soluta nesciunt, fuga veniam ducimus quos dolor velit ipsa numquam
              ut culpa perferendis mollitia illo tempore, consectetur ex
              recusandae expedita voluptatem.
            </p>
          </div>
        </div>

        <div className="middle">
          <div className="upper-row">
            <div className="left-col">
              <h1>Our Mission</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                soluta nesciunt, fuga veniam ducimus quos dolor velit ipsa
                numquam ut culpa perferendis mollitia illo tempore, consectetur
                ex recusandae expedita voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
