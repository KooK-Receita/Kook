import Card from "./card";
import "./content.css";
import Filters from "./filters";

function Content() {
  return (
    <div className="content">
      <Filters />
      <div className="cringe"></div>
      <div className="main-content">
        <div className="content-row">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Content;
