import React from "react";
import "./RecipeTile.css";

function RecipeTile({ recipe }) {
  return (
    <div className="RecipeTile">
      <img src={recipe["recipe"]["image"]} className="recipetile_Image" />
      <p className="recipetile_name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}

export default RecipeTile;
