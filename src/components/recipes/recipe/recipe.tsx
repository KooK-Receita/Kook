import bruschetta from "../../../assets/imagens_receitas/bruschetta.png";
import relogio from "../../../assets/relogio.png";
import "./recipe.css";
import React from "react";

export default function Recipe() {
  return (
    <div className="recipe">
      <div className="recipe-image">
        <img width={236} height={148} src={bruschetta} />
      </div>
      <div className="recipe-description">
        <h3>Bruschetta</h3>
        <hr />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        </span>
      </div>
      <div className="prepare">
        <img width={86} height={86} src={relogio} />
        <span className="prepare-time">30 min</span>
      </div>
    </div>
  );
}
