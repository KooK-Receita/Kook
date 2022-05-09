import { Card } from "react-bootstrap";
import "./category.css";
import React from "react";
import data from "../../../assets/imagens_receitas/data";

function Category() {
  return (
    <Card className="cards-container">
      {data.map((item) => {
        const { id, imagem, categoria } = item;

        return (
          <Card.Body key={id} className="category">
            <img src={imagem} className="img" />
            <br />
            <Card.Text className="category-text">{categoria}</Card.Text>
          </Card.Body>
        );
      })}
    </Card>
  );
}

export default Category;
