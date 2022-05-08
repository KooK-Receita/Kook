import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LeftMenu from "./components/left-menu/left-menu";
import Content from "./components/content/content";
import { Container, Row } from "react-bootstrap";
function App() {
  return (
    <Container id="main" fluid>
      <Row className="flex" >
        <LeftMenu />
        <Content />
      </Row>
    </Container>
  );
}

export default App;
