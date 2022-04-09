import { Col, Row } from "react-bootstrap";
import Header from "../header/header";
import "./content.css";

function Content() {
  return (
    <Col>
      <Header />
      <Col id="body">
        <div>Adicione sua receita</div>
        <div>Categorias</div>
      </Col>
    </Col>
  );
}

export default Content;
