import "./recipes.css";
import Recipe from "./recipe/recipe";
import { Col } from "react-bootstrap";

interface RecipesProps {
  receitas: any[];
}

export default function Recipes(props: RecipesProps) {
  return (
    <Col md={9}>
      <div>
        {props.receitas.map(function (receita, index) {
          return <Recipe key={index} recipe={receita} />;
        })}
      </div>
    </Col>
  );
}
