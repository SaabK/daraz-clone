import { categories } from "../../data/data";
import arrowHead from "../../assets/icons/arrow_head.png";

function Categories() {
  return (
    <ul className="categories">
      {categories.map((category, index) => (
        <li key={index}>
          {category.title}
          <img src={arrowHead} className="arrow-head" />
        </li>
      ))}
    </ul>
  );
}

export default Categories;
