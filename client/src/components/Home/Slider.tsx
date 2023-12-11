import { Slide } from "react-slideshow-image";
import { slideImages } from "../../data/data";

function Slider() {
  return (
    <Slide>
      {slideImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt="Buy on daraz" />
        </div>
      ))}
    </Slide>
  );
}

export default Slider;
