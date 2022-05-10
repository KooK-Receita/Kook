import { ok } from "assert";
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

  function filtrar(objeto: any) {
    setReceitas((old) =>
      old.filter((receita) => {
        var isOk = true;
        if (objeto.nome != null && receita.nome != objeto.nome) {
          isOk = false;
        }

        if (objeto.porcoes != null && receita.porcoes != objeto.porcoes) {
          isOk = false;
        }

        if (
          objeto.tempoPreparo != null &&
          receita.tempoPreparo != objeto.tempoPreparo
        ) {
          isOk = false;
        }
        return isOk;
      })
    );
  }

  return (
    <Col className="content">
      <Header />
      <Row id="body" className="justify-content-md-center">
        <Carrosel />
        <AdicioneSuaReceita
          receitas={receitas}
          filtrar={filtrar}
          addReceitas={adicionar}
        />
        <Categories />
        <Recipes receitas={receitas} />
      </Row>
    </Col>
  );
}

export default Content;
