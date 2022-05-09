import "./adicione-sua-receita.css";
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ModalFiltro from "../modal/modal-filtro";
import Modal from "react-modal";
import { useState } from "react";
import ModalCriar from "../modal/modal-criar";
import React from "react";

function AdicioneSuaReceita() {
  const [modalFiltroIsOpen, setFiltroIsOpen] = useState(false);
  const [modalCriarIsOpen, setCriarIsOpen] = useState(false);

  const customStyles = {
    content: {
      marginRight: "15%",
      marginLeft: "15%",
      borderRadius: "25px",
    },
  };

  return (
    <Col md={9}>
      <div className="ads">
        <div className="inside">
          <span>Adicione sua receita</span>
          <span>
            <a className="modalLink" onClick={() => setCriarIsOpen(true)}>
              Adicione sua receita
            </a>
          </span>
          <Modal isOpen={modalCriarIsOpen} style={customStyles}>
            <ModalCriar />
            <Button
              variant="secondary"
              type="button"
              onClick={() => setCriarIsOpen(false)}
            >
              Voltar
            </Button>
            <Button
              variant="success"
              type="button"
              onClick={() => setFiltroIsOpen(false)}
            >
              Salvar
            </Button>
          </Modal>
        </div>
        <div className="inside">
          <span>Filtre uma receita</span>
          <span>
            <a className="modalLink" onClick={() => setFiltroIsOpen(true)}>
              Filtre uma receita
            </a>
          </span>
          <Modal isOpen={modalFiltroIsOpen} style={customStyles}>
            <ModalFiltro />
            <Button
              variant="secondary"
              type="button"
              onClick={() => setFiltroIsOpen(false)}
            >
              Voltar
            </Button>
            <Button
              variant="warning"
              type="button"
              onClick={() => setFiltroIsOpen(false)}
            >
              Filtrar
            </Button>
          </Modal>
        </div>
      </div>
    </Col>
  );
}

export default AdicioneSuaReceita;
