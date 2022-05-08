import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LeftMenu from "./components/left-menu/left-menu";
import Content from "./components/content/content";
import { Container, Row } from "react-bootstrap";
import React from "react";

function App() {
  return (
    <Container id="main" fluid h-vh-100>
      <Row className="d-flex">
        <LeftMenu />
        <Content />
      </Row>
    </Container>
  );
}

export default App;
