import React, { useContext } from "react";
import { cardContextProvider } from "./category";
import { Card } from "react-bootstrap";
import "./category.css";
import data from "../../../assets/imagens_receitas/data";

const CardComponent: React.FC = () => {
  const { vetorDeElementos, index, setIndex }: any = useContext(
    cardContextProvider
  );

  return (
    <Card className="cards-container">
      {data.map((item, itemIndex) => {
        const { id, imagem, categoria } = item;

        let slideClass = "nextSlide";

        if (itemIndex === index) {
          slideClass = "currentSlide";
        }

        //Can potentially break the carroussel uncomment with caution
        if (
          itemIndex === index - 1 ||
          (index === 0 && itemIndex === vetorDeElementos.length - 1)
        ) {
          slideClass = "prevSlide";
        }

        return (
          <Card.Body key={id} className={`${slideClass}, category`}>
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
