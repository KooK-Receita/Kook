import React, { useContext } from "react";
import { ContextProvider } from "./carrossel";

const { vetorDeElementos, index, setIndex }: any = useContext(ContextProvider);

const CorpoCarrossel: React.FC = () => {
  return (
    <section>
      {vetorDeElementos.map((item: any) => {
        const { id, nome, imagem } = item;

        return (
          <div key={id}>
            <img src={imagem} alt="image_de_receita" />
            <h2>{nome}</h2>
          </div>
        );
      })}
      <button
        type="button"
        className="prev"
        onClick={() => setIndex(index - 1)}
      >
        Left
      </button>
      <button
        type="button"
        className="next"
        onClick={() => setIndex(index + 1)}
      >
        Right
      </button>
    </section>
  );
};

export default CorpoCarrossel;
