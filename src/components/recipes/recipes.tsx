import "./recipes.css";
import Recipe from "./recipe/recipe";
import { Col } from "react-bootstrap";

export default function Recipes() {
  return (
    <Col md={9}>
      <Recipe />
      <Recipe />
      <Recipe />
    </Col>
  );
}
