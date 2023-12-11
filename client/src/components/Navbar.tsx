import shoppingCart from "../assets/cart.svg";
import wordmarkLogo from "../assets/wordmark_and_logo.png";

function Navbar() {
  return (
    <header>
      <img src={wordmarkLogo} alt="Daraz logo" className="logo" />
      <div className="search">
        <input type="text" placeholder="Search in Daraz" />
      </div>
      <div className="registeration">
        <button className="btn btn-secondary">Login</button>
        <button className="btn btn-secondary">Sign Up</button>
      </div>
      <img src={shoppingCart} alt="Your shopping cart" />
    </header>
  );
}

export default Navbar;
