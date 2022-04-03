import { Card, Col, Image, Navbar } from "react-bootstrap";
import "./header.css";
import pizza from "../../assets/pizza.png";

function Header() {
    return (
        <Navbar className="default-bg padding-nav" variant="light">
            <Col sm={1} className="justify-content-end">
                <Navbar.Brand href="#" className="start-end">
                    <Image src={pizza} />
                </Navbar.Brand>
            </Col>
            <Col>
                <h1>KOOK</h1>
            </Col>
        </Navbar>
    );
}

export default Header;
