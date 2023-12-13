import { Carousel } from "react-responsive-carousel";
import { slideImages } from "../../data/data";

function Slider() {
  return (
    <Carousel
      showThumbs={false}
      // autoPlay
      interval={4000}
      infiniteLoop
      showStatus={false}
      className="react__carousel"
    >
      {slideImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt="Buy on daraz" className="carousel__image" />
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;
