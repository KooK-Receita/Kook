import { Card, Col, Image, Navbar } from "react-bootstrap";
import "./header.css";
import pizza from "../../assets/pizza.png";
import Search from "../filters/search";
import MoreFilters from "../filters/more-filters";

function Header() {
  return (
    <Navbar className="default-bg padding-nav" variant="light">
      <Col sm={2}>
        <Navbar.Brand href="#">
          <Image className="rounded mx-auto d-block" height={98} src={pizza} />
        </Navbar.Brand>
      </Col>
      <Col sm={4}>
        <p className="title">KOOK</p>
      </Col>

      <div id="filters" className="d-flex">
        {/* <MoreFilters /> */}
        <Search />
      </div>
    </Navbar>
  );
}

export default Header;
