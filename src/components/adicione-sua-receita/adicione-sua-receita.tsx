import "./adicione-sua-receita.css";
import { Button, Col } from "react-bootstrap";
import ModalFiltro from "../modal/modal-filtro";
import Modal from "react-modal";
import { createContext, useState } from "react";
import ModalCriar from "../modal/modal-criar";

interface AdicioneSuaReceitaProps {
  receitas: any[];
  addReceitas: Function;
}

function AdicioneSuaReceita(props: AdicioneSuaReceitaProps) {
  const [modalFiltroIsOpen, setFiltroIsOpen] = useState(false);
  const [modalCriarIsOpen, setCriarIsOpen] = useState(false);

  const customStyles = {
    content: {
      marginRight: "15%",
      marginLeft: "15%",
      borderRadius: "25px",
    },
  };

  Modal.setAppElement("#root");

  return (
    <Col md={9}>
      <div className="ads">
        <div className="inside">
          <span>
            <a className="modalLink" onClick={() => setCriarIsOpen(true)}>
              Adicione sua receita
            </a>
          </span>
          <Modal isOpen={modalCriarIsOpen} style={customStyles}>
            <ModalCriar addReceitas={props.addReceitas} />

            <Button
              variant="secondary"
              type="button"
              onClick={() => setCriarIsOpen(false)}
            >
              Voltar
            </Button>
          </Modal>
        </div>
        <div className="inside">
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
