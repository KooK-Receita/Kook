import { Col, Row } from "react-bootstrap";
import bruschetta from "../../../assets/bruschetta.png";
import relogio from "../../../assets/relogio.png";
import * as RecipeModel from "../../../models/recipe";

import "./recipe.css";

interface RecipeProps {
  recipe: RecipeModel.default;
}

export default function Recipe(props: RecipeProps) {
  const { nomeReceita, modoPreparo, tempoPreparo, unidadeTempo } = props.recipe;

  return (
    <div className="recipe">
      <div className="recipe-image">
        <img width={236} height={148} src={bruschetta} />
      </div>
      <div className="recipe-description">
        <h3>{nomeReceita}</h3>
        <hr />
        <span>{modoPreparo}</span>
      </div>
      <div className="prepare">
        <img width={86} height={86} src={relogio} />
        <span className="prepare-time">
          {tempoPreparo + " " + unidadeTempo}
        </span>
      </div>
    </div>
  );
}
