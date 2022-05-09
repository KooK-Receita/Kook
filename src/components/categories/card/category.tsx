import { Card } from "react-bootstrap";
import "./category.css";
import React from "react";
import data from "../../../assets/imagens_receitas/data";

function Category() {
  return (
    <Card className="category">
      {data.map((item) => {
        const { id, imagem, categoria } = item;

        return (
          <Card.Body key={id}>
            <img src={imagem} />
            <Card.Text className="category-text">{categoria}</Card.Text>
          </Card.Body>
        );
      })}
      <img width="56" height="56" src="" />
    </Card>
  );
}

export default Category;
