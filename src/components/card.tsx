import "./card.css";
import Category from "./category";

function Card() {
  return (
    <div className="recipe-card">
      <h2>Titulo da Receita</h2>
      <img src="http://blog.chefsclub.com.br/wp-content/uploads/2019/08/historia_do_cafe-968x660.jpg" />
      <Category />
    </div>
  );
}

export default Card;
