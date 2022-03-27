import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./left-menu.css";

function LeftMenu() {
  return (
    <div className="side">
      <div className="navBar">
        <div className="icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="title">
          <h1>KOOK</h1>
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
