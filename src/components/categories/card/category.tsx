import { Card } from "react-bootstrap";
import "./category.css";
import React, { useState, useEffect, createContext } from "react";
import data from "../../../assets/imagens_receitas/data";
import { image } from "../../../components/carossel/carrossel";
import CardComponent from "./cardItem";
export const cardContextProvider = createContext<image | number | {}>(data);

function Category() {
  const vetorDeElementos = data;
  const [index, setIndex] = useState<number>(0);
  //Altera o indice das imagens de acordo com o indice atual
  useEffect(() => {
    let slideAnterior = vetorDeElementos.length - 1;
    if (index < 0) {
      setIndex(slideAnterior);
    }
    if (index > slideAnterior) {
      setIndex(0);
    }
  }, [index, vetorDeElementos]);

  //Altera o indice das imagens periodicamente
  useEffect(() => {
    let indiceIntervalo = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(indiceIntervalo);
  }, [index]);

  return (
    <cardContextProvider.Provider value={{ vetorDeElementos, index, setIndex }}>
      <CardComponent />
    </cardContextProvider.Provider>
  );
}

export default Category;
