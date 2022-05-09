import "./carrosel.css";
import React, { createContext, useEffect, useState } from "react";
import data from "../../assets/imagens_receitas/data";
import CorpoCarrossel from "./corpoCarrossel";

export type image = {
  id: number;
  imagem: string;
  nome: string;
}[];

export const ContextProvider = createContext<image | number | {}>(data);

const Carrosel = () => {
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
    <ContextProvider.Provider value={{ vetorDeElementos, index, setIndex }}>
      <CorpoCarrossel />
    </ContextProvider.Provider>
  );
};

export default Carrosel;