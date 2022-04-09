import { Col, Row } from "react-bootstrap";
import AdicioneSuaReceita from "../adicione-sua-receita/adicione-sua-receita";
import Header from "../header/header";
import "./content.css";

function Content() {
  return (
    <Col>
      <Header />
      <Row id="body" className="justify-content-md-center">
        <AdicioneSuaReceita />
        <div>Categorias</div>
      </Row>
    </Col>
  );
}

export default Content;
