import React from "react";
import "./home.scss";
/*import Slider from '../../components/Slider/Slider'*/
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="bg-home"></div>
        <div className="details">
          <h1>
            LARGE CERAMIC <br />
            COFFEE CUP
          </h1>
          <p>
            <button>Shop Now</button>
          </p>
        </div>
      </div>

      <FeaturedProducts type="trending" />
      <Categories />
    </div>
  );
};

export default Home;
