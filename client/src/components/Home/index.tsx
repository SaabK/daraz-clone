import Categories from "./Categories";
import Features from "./Features";
import Products from "./Products";
import Services from "./Services";
import Slider from "./Slider";

function Home() {
  return (
    <section className="home container">
      <div className="home__hero">
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
