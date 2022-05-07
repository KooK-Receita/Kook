import "./adicione-sua-receita.css";
import { Col, Row } from "react-bootstrap";

function AdicioneSuaReceita() {
  return (
    <Col md={9}>
      <div className="ads">
        <div className="inside">
          <span>Adicione sua receita</span>
        </div>
        <div className="inside">
          <span>Filtre uma receita</span>
        </div>
      </div>
    </Col>
  );
}

export default AdicioneSuaReceita;
