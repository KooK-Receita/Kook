import React, { useContext } from "react";
import { cardContextProvider } from "./category";
import { Card } from "react-bootstrap";
import "./category.css";
import data from "../../../assets/imagens_receitas/data";

const CardComponent: React.FC = () => {
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
};

export default CardComponent;
