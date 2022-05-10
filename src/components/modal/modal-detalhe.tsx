import "./modal.css";
import { useState } from "react";
import bruschetta from "../../assets/bruschetta.png";
export default function ModalDetalhe(props: any) {
    const {
        nomeReceita,
        tempoPreparo,
        unidadeTempo,
        porcoes,
        ingrediente,
        categoria,
        modoPreparo,
        imagem
    } = props.receita;


    console.log(ingrediente);
    console.log(props.receita)


    return (
        <div className="modal-detalhe">
            <h3>{nomeReceita}</h3>
            <hr />
            <img src={bruschetta} alt="imagem" className="imagemDetalhe"/>
            <h5>ingredientes</h5>
            
            <ul>
                {ingrediente.map((ingrediente: any) => {
                    return (
                        <li key={ingrediente.nome}>
                            {`${ingrediente.quantidade} ${ingrediente.unidade? ingrediente.unidade + 'de' : ''} ${ingrediente.nome}`}
                        </li>
                    );
                }
            )}
            </ul>
            <div className="square">
                <h5>Modo de preparo</h5>
                <p>{modoPreparo}</p>
            </div>
        </div>
    )
}