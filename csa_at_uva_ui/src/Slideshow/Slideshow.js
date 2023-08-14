import Carousel from 'react-material-ui-carousel';
import "./Slideshow.css";
import SlideshowItem from './SlideshowItem';
import carouselphotos from "./carouselphotos.json";

function Slideshow() {
        return (
            <div className='carousel-container'>
            <Carousel>
                {carouselphotos.map( item => <SlideshowItem key={item.id} item={item} /> )}
            </Carousel>
            </div>
        )
  }
  
  export default Slideshow;
