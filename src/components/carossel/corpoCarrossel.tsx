import React, { useContext } from "react";
import { ContextProvider } from "./carrossel";

const { vetorDeElementos, index }: any = useContext(ContextProvider);

const CorpoCarrossel: React.FC = () => {
  return (
    <>
      {vetorDeElementos.map((item: any) => {
        const { id, nome, imagem } = item;

        return (
          <div key={id}>
            <img src={imagem} alt="image_de_receita" />
            <h2>nome</h2>
          </div>
        );
      })}
    </>
  );
};

export default CorpoCarrossel;
