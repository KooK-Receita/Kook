import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LeftMenu from "./components/left-menu/left-menu";
import Content from "./components/content/content";
import Carrosel from "./components/carossel/carrossel";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container id="main" fluid h-vh-100>
      <Row className="d-flex">
        <LeftMenu />
        <Carrosel />
        <Content />
      </Row>
    </Container>
  );
}

export default App;
