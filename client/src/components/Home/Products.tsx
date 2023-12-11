import { useEffect, useState } from "react";
import { Product } from "../../types";
import ProductCard from "../ProductCard";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <section className="home__products">
      <h2>Just For You</h2>
      {products.map((product, index) => (
        <ProductCard {...product} key={index} />
      ))}
    </section>
  );
}

export default Products;
