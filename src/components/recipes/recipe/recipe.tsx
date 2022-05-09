import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Modal from "react-modal";
import bruschetta from "../../../assets/bruschetta.png";
import relogio from "../../../assets/relogio.png";
import * as RecipeModel from "../../../models/recipe";
import ModalDetalhe from "../../modal/modal-detalhe";

import "./recipe.css";

interface RecipeProps {
  recipe: RecipeModel.default;
}

export default function Recipe(props: RecipeProps) {
  const {
    nomeReceita,
    modoPreparo,
    tempoPreparo,
    unidadeTempo
  } = props.recipe;
  const [modalDetalheIsOpen, setDetalheIsOpen] = useState(false);

  const customStyles = {
    content: {
      marginRight: "15%",
      marginLeft: "15%",
      borderRadius: "25px",
    },
  };

  Modal.setAppElement("#root");

  return (
    <div className="recipe" onClick={() => setDetalheIsOpen(true)}>
      <div className="recipe-image">
        <img width={236} height={148} src={bruschetta} />
      </div>
      <div className="recipe-description">
        <h3>{nomeReceita}</h3>
        <hr />
        <span>{modoPreparo}</span>
      </div>
      <div className="prepare">
        <img width={86} height={86} src={relogio} />
        <span className="prepare-time">
          {tempoPreparo + " " + unidadeTempo}
        </span>
      </div>
      <Modal isOpen={modalDetalheIsOpen} style={customStyles}>
        <ModalDetalhe receita={props.recipe} />

        <Button
          variant="secondary"
          type="button"
          onClick={() => setDetalheIsOpen(false)}
        >
          Voltar
        </Button>
      </Modal>


    </div>
  );
}
