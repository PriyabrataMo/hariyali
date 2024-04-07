import { Carousel } from "../components/slider/slider";
import { slides } from "../components/slider/sliderData.json";

function Slider() {
  return (
    <div className='*
    height: 90vh;
    display: top;
    flex-direction: column;
    justify-content: center;
    align-items: center;'>
      <Carousel data={slides} />
    </div>
  );
}

export default Slider;