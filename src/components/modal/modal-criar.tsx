import "./modal.css";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function ModalCriar() {
  return (
    <div>
      <h3>Adicione sua Receita</h3>
      <hr />
      <Form>
        <Row>
          <Col md={5}>
            <Form.Group>
              <Form.Label>Nome da Receita</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>

          <Col md={2}>
            <Form.Group>
              <Form.Label>Tempo de preparo</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Unidade</Form.Label>
              <Form.Select>
                <option>Minutos</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Porções</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Quantidade</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>

          <Col md={5}>
            <Form.Group>
              <Form.Label>Ingrediente</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>

          <Col md={2}>
            <Form.Group>
              <Form.Label>Unidade</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <Form.Group>
              <Form.Label>Categoria</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Modo de preparo</Form.Label>
              <textarea className="form-control"></textarea>
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group>
              <Form.Label>Adicione uma imagem</Form.Label>
              <input className="form-control" type="file" />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
