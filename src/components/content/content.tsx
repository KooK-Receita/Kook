import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import AdicioneSuaReceita from "../adicione-sua-receita/adicione-sua-receita";
import Carrosel from "../carossel/carrossel";
import Categories from "../categories/categories";
import Header from "../header/header";
import Recipes from "../recipes/recipes";
import "./content.css";

function Content() {
  const [receitas, setReceitas] = useState<any[]>([]);

  function adicionar(objeto: never) {
    setReceitas((old) => [...old, objeto]);
  }

  return (
    <Col className="content">
      <Header />
      <Row id="body" className="justify-content-md-center">
        <Carrosel />
        <AdicioneSuaReceita receitas={receitas} addReceitas={adicionar} />
        <Categories />
        <Recipes receitas={receitas} />
      </Row>
    </Col>
  );
}

export default Content;
