import Categories from "./Categories";
import Features from "./Features";
import Products from "./Products";
import Services from "./Services";
import Slider from "./Slider";

function Home() {
  return (
    <section id="hero">
      <div>
        <Categories />
        <Slider />
      </div>
      <Features />
      <Services />
      <Products />
    </section>
  );
}

export default Home;
