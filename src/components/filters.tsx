import "./filters.css";
import "bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Filters() {
  return (
    <div className="filter">
      <div className="search-bar">
        <input type="text" className="form-control form-rounded" />
        <FontAwesomeIcon className="icon" icon={faSearch} />
      </div>
      <div className="button">
        <input type="button" className="form-control form-rounded" />
      </div>
    </div>
  );
}

export default Filters;
