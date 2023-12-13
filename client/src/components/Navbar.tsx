import shoppingCart from "../assets/icons/cart.svg";
import wordmarkLogo from "../assets/wordmark_and_logo.png";
import whitePersonOutline from "../assets/icons/white_person.png";

function Navbar() {
  return (
    <header>
      <div className="container">
        <img src={wordmarkLogo} alt="Daraz logo" className="header__logo" />
        <div className="header__search">
          <input type="text" placeholder="Search in Daraz" />
        </div>
        <div className="header__registeration">
          <button className="btn btn-secondary">
            <img src={whitePersonOutline} alt="" />
            Login
          </button>
          <button className="btn btn-secondary">Sign Up</button>
        </div>
        <img
          src={shoppingCart}
          alt="Your shopping cart"
          className="header__shopping-cart"
        />
      </div>
    </header>
  );
}

export default Navbar;
