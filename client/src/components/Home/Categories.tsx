import { categories } from "../../data/data";

function Categories() {
  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>{category.title}</li>
      ))}
    </ul>
  );
}

export default Categories;
