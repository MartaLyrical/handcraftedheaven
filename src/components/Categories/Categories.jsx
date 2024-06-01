import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://lyricalcorp.com/assets/images/handcraftedheaven/bracelets.png"
            alt=""
          />
          <button>
            <Link to="/products/woodworking" className="link">
              Woodworking
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://lyricalcorp.com/assets/images/handcraftedheaven/bracelets.png"
            alt=""
          />
          <button>
            <Link to="/products/embroidery" className="link">
              Embroidery
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://lyricalcorp.com/assets/images/handcraftedheaven/bracelets.png"
            alt=""
          />
          <button>
            <Link to="/products/jewelry" className="link">
              Jewelry
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://lyricalcorp.com/assets/images/handcraftedheaven/bracelets.png"
            alt=""
          />
          <button>
            <Link to="/products/ceramics" className="link">
              Pottery and Ceramics
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://lyricalcorp.com/assets/images/handcraftedheaven/bracelets.png"
                alt=""
              />
              <button>
                <Link to="/products/paperCrafts" className="link">
                  Paper Crafts
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://lyricalcorp.com/assets/images/handcraftedheaven/bracelets.png"
                alt=""
              />
              <button>
                <Link to="/products/acc" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://lyricalcorp.com/assets/images/handcraftedheaven/bracelets.png"
            alt=""
          />
          <button>
            <Link to="/products/handCrafts" className="link">
              HandCrafts
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
