import "./App.css";
import Content from "./components/content";
import LeftMenu from "./components/left-menu";
import "bootstrap/dist/css/bootstrap.min.css";
import RigthMenu from "./components/rigth-menu";

function App() {
  return (
    <div className="app">
      <LeftMenu />
      <Content />
      <RigthMenu />
    </div>
  );
}

export default App;
