import { Col, Row } from "react-bootstrap";
import AdicioneSuaReceita from "../adicione-sua-receita/adicione-sua-receita";
import Carrosel from "../carossel/carrossel";
import Categories from "../categories/categories";
import Header from "../header/header";
import Recipes from "../recipes/recipes";
import "./content.css";
import React from "react";
function Content() {
  return (
    <Col>
      <Header />
      <Row id="body" className="justify-content-md-center">
        <Carrosel />
        <AdicioneSuaReceita />
        <Categories />
        <Recipes />
      </Row>
    </Col>
  );
}

export default Content;
