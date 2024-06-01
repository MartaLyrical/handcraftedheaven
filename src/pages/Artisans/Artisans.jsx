import React from "react";
import "./artisans.scss";

import { data } from "./data";
import ArtisansCard from "../../components/ArtisansCard/ArtisansCard";

const artisans = () => {
  return (
    <div className="artisans">
      <div class="container">
        {data.map((item) => (
          <ArtisansCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default artisans;
