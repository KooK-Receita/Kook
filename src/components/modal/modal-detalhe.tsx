import "./modal.css";
import { useState } from "react";
import bruschetta from "../../assets/bruschetta.png";
export default function ModalDetalhe(props: any) {
    const {
        nomeReceita,
        tempoPreparo,
        unidadeTempo,
        porcoes,
        quantidade,
        ingrediente,
        unidadeIngrediente,
        categoria,
        modoPreparo,
        imagem
    } = props.receita;


    const ingredientesLista = ingrediente.split(",");
    return (
        <div className="modal-detalhe">
            <h3>{nomeReceita}</h3>
            <hr />
            <img src={bruschetta} alt="imagem" className="imagemDetalhe"/>
            <h5>ingredientes</h5>
            <ul>
                {
                    ingredientesLista.map((item: any, index: any) => {
                        return <li key={index}><h6>{item}</h6></li>;
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