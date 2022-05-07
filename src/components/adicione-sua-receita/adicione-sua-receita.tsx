import "./adicione-sua-receita.css";
import { Button, Col, Row } from "react-bootstrap";
import ModalFiltro from "../modal/modal-filtro";
import Modal from "react-modal";
import { useState } from "react";
import ModalCriar from "../modal/modal-criar";

function AdicioneSuaReceita() {
  const [modalFiltroIsOpen, setFiltroIsOpen] = useState(false);
  const [modalCriarIsOpen, setCriarIsOpen] = useState(false);

  const customStyles = {
    content: {
      marginRight: "15%",
      marginLeft: "15%",
    },
  };

  return (
    <Col md={9}>
      <div className="ads">
        <div className="inside">
          <span>
            <a href="#" onClick={() => setCriarIsOpen(true)}>
              Adicione sua receita
            </a>
          </span>
          <Modal isOpen={modalCriarIsOpen} style={customStyles}>
            <ModalCriar />
            <button type="button" onClick={() => setCriarIsOpen(false)}>
              Fechar
            </button>
          </Modal>
        </div>
        <div className="inside">
          <span>
            <a href="javascript:void(0)" onClick={() => setFiltroIsOpen(true)}>
              Filtre uma receita
            </a>
          </span>
          <Modal isOpen={modalFiltroIsOpen} style={customStyles}>
            <ModalFiltro />
            <Button type="button" onClick={() => setFiltroIsOpen(false)}>
              Fechar
            </Button>
          </Modal>
        </div>
      </div>
    </Col>
  );
}

export default AdicioneSuaReceita;
