import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

interface ModalFiltroProps {
  filtrar: Function;
}

export default function ModalFiltro(props: ModalFiltroProps) {
  const [state, setState] = useState<any>();

  function handleInputChange(event: any) {
    const target = event?.target;
    const value = target?.type == "checkbox" ? target.checked : target.value;
    const name = target?.name;

    state[name] = value;
    setState(state);
  }

  return (
    <div>
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

          <Col md={3}>
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
              <Form.Label>Unidade</Form.Label>
              <Form.Select onChange={handleInputChange} name="unidadeTempo">
                <option>Minutos</option>
                <option>Horas</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Ingrediente</Form.Label>
              <Form.Control
                name="ingrediente"
                type="text"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>

          <Col md={5}>
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
          <Col>
            <Form.Group>
              <Form.Label>Categoria</Form.Label>
              <Form.Control type="text" onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>

        <Button
          onClick={() => props.filtrar(state)}
          variant="success"
          type="button"
        >
          Filtrar
        </Button>
      </Form>
    </div>
  );
}
