import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./left-menu.css";
import { Col } from "react-bootstrap";

function LeftMenu() {
  return (
    <Col className="left-menu">
      <FontAwesomeIcon icon={faBars} id="menu-icon" />
    </Col>
  );
}

export default LeftMenu;
