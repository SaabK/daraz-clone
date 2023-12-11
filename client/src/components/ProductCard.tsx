import { Product } from "../types";
import yellowStar from "../assets/icons/yellow_star.png";
import greyStar from "../assets/icons/grey_star.png";

function ProductCard({ title, image, price, ratings, comments }: Product) {
  let discount = 100 - Math.ceil((price.current / price.old) * 100);

  return (
    <div className="product">
      <div className="product__image">
        <img src={image} alt={title} />
      </div>

      <p className="product__title">{title}</p>
      <div className="product__price">
        <p className="product__price-current">Rs. {price.current}</p>
        {price.old && (
          <p className="product__price-old">
            <s>Rs.{price.old}</s>
            <span className="product__price-discount"> - {discount}%</span>
          </p>
        )}
      </div>

      <div>
        <div className="product__ratings">
          <div className="product__ratings-layer">
            {/* Rendering base layer grey stars for reviews */}

            {[...Array(5)].map((_, index) => (
              <img src={greyStar} key={index} width={24} />
            ))}
          </div>

          <div className="products__ratings-star">
            {/* Rendering actual yellow star for reviews */}

            {[...Array(ratings)].map((_, index) => (
              <img src={yellowStar} key={index} width={24} />
            ))}
          </div>
        </div>
        <span className="product__comments">{comments}</span>
      </div>
    </div>
  );
}

export default ProductCard;
