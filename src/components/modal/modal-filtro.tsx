import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export default function ModalFiltro() {
  return (
    <div>
      <Form>
        <Row>
          <Col md={5}>
            <Form.Group>
              <Form.Label>Nome da Receita</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group>
              <Form.Label>Tempo de preparo</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Unidade</Form.Label>
              <Form.Select />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <Form.Group>
              <Form.Label>Ingrediente</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Porções</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Categoria</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
