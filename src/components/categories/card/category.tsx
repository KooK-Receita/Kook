import { Card } from "react-bootstrap";
import pizza from "../../../assets/pizza.png";
import "./category.css";
import React from "react";

function Category() {
  return (
    <Card className="category">
      <img width="56" height="56" src={pizza} />
      <Card.Body>
        <Card.Text className="category-text">Fast Food</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Category;
