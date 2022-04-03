import { Card, Col, Image, Navbar } from "react-bootstrap";
import "./header.css";
import pizza from "../../assets/pizza.png";

function Header() {
  return (
    <Navbar className="default-bg padding-nav" variant="light">
      <Col sm={2}>
        <Navbar.Brand href="#">
          <Image className="rounded mx-auto d-block" src={pizza} />
        </Navbar.Brand>
      </Col>
      <Col>
        <h1>KOOK</h1>
      </Col>
    </Navbar>
  );
}

export default Header;
