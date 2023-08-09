import Carousel from 'react-material-ui-carousel';
import "./Carousel.css";
import CarouselItem from './CarouselItem';
import carouselphotos from "./carouselphotos.json";

function Carousel() {
        return (
            <div className='carousel-container'>
            <Carousel>
                {carouselphotos.map( item => <CarouselItem key={item.id} item={item} /> )}
            </Carousel>
            </div>
        )
  }
  
  export default Carousel;
