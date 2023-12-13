import "react-responsive-carousel/lib/styles/carousel.min.css";

import Hero from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
