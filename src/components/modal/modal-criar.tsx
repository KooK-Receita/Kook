import "./modal.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

interface ModalCriarProps {
  addReceitas: Function;
}

export default function ModalCriar(props: ModalCriarProps) {
  const [state, setState] = useState<any>({unidadeTempo : "Minutos" });

  function handleInputChange(event: any) {
    const target = event?.target;
    const value = target?.type == "checkbox" ? target.checked : target.value;
    const name = target?.name;

    state[name] = value;
    setState(state);
  }

  return (
    <div>
      <h3>Adicione sua Receita</h3>
      <hr />
      <Form>
        <Row>
          <Col md={5}>
            <Form.Group>
              <Form.Label>Nome da Receita</Form.Label>
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
              <Form.Control name="porcoes" type="text" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Quantidade</Form.Label>
              <Form.Control name="quantidade" type="number" />
            </Form.Group>
          </Col>

          <Col md={5}>
            <Form.Group>
              <Form.Label>Ingredientes</Form.Label>
              <Form.Control name="ingrediente" type="text" onChange={handleInputChange}/>
            </Form.Group>
          </Col>

          <Col md={2}>
            <Form.Group>
              <Form.Label>Unidade</Form.Label>
              <Form.Control name="unidade" type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <Form.Group>
              <Form.Label>Categoria</Form.Label>
              <Form.Control name="categoria" type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Modo de preparo</Form.Label>
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
