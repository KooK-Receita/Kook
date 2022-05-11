import "./modal.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import Ingrediente from "../../models/ingrediente";

interface ModalCriarProps {
  addReceitas: Function;
}

export default function ModalCriar(props: ModalCriarProps) {
  const [state, setState] = useState<any>({
    unidadeTempo: "Minutos",
    ingrediente: [],
  });
  const [ingredientes, setIngredientes] = useState<any>([]);
  const [ingrediente, setIngrediente] = useState<any>({});

  function handleInputChange(event: any) {
    const target = event?.target;
    const value = target?.type == "checkbox" ? target.checked : target.value;
    const name: any = target?.name;

    if (name === "nome" || name === "unidade" || name === "quantidade") {
      ingrediente[name] = value;
      setIngrediente(ingrediente);
    } else {
      state[name] = value;
      setState(state);
    }
  }

  function addIngrediente() {
    const ingredienteAux = Object.assign({}, ingrediente);
    setIngredientes((old: any) => [...old, ingredienteAux]);
    state["ingrediente"].push(ingrediente);
    console.log(state);
  }

  function preView() {
    return (
      <ul>
        {ingredientes.map((ingrediente: Ingrediente, index: number) => (
          <li key={index}>
            {`${ingrediente.quantidade} ${
              ingrediente.unidade ? ingrediente.unidade + " de " : ""
            } ${ingrediente.nome}`}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h3>Adicione sua Receita</h3>
      <hr />
      <Form>
        <Row>
          <Col md={5}>
            <Form.Group>
              <Form.Label>Nome da Receita *</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                name="nomeReceita"
                type="text"
              />
            </Form.Group>
          </Col>

          <Col md={2}>
            <Form.Group>
              <Form.Label>Tempo de preparo</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                name="tempoPreparo"
                type="number"
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Unidade de tempo</Form.Label>
              <Form.Select onChange={handleInputChange} name="unidadeTempo">
                <option>Minutos</option>
                <option>Horas</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Porções</Form.Label>
              <Form.Control
                name="porcoes"
                type="text"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Quantidade</Form.Label>
              <Form.Control
                name="quantidade"
                type="number"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>

          <Col md={5}>
            <Form.Group>
              <Form.Label>Ingrediente*</Form.Label>
              <Form.Control
                name="nome"
                type="text"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>

          <Col md={2}>
            <Form.Group>
              <Form.Label>Unidade</Form.Label>
              <Form.Control
                name="unidade"
                type="text"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Col md={5}>
          <div className="ingredienteButton">
            <Button onClick={() => addIngrediente()}>
              Adicionar ingrediente
            </Button>
          </div>
        </Col>

        <Row>
          <Col md={5}>
            <Form.Group>
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                name="categoria"
                type="text"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Modo de preparo *</Form.Label>
              <textarea
                onChange={handleInputChange}
                name="modoPreparo"
                className="form-control"
              ></textarea>
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group>
              <Form.Label>Adicione uma imagem</Form.Label>
              <input name="imagem" className="form-control" type="file" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <div className="preview">{preView()}</div>
        </Row>
        <Button
          onClick={() => props.addReceitas(state)}
          variant="success"
          type="button"
        >
          Salvar
        </Button>
      </Form>
    </div>
  );
}
