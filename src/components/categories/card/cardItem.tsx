import React, { useContext } from "react";
import { cardContextProvider } from "./category";
import { Card } from "react-bootstrap";
import data from "../../../assets/imagens_receitas/data";

const CardComponent: React.FC = (item, itemIndex) => {
  const { vetorDeElementos, index, setIndex }: any = useContext(
    cardContextProvider
  );
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
    <Card className={`${slideClass}, cards-container`}>
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
