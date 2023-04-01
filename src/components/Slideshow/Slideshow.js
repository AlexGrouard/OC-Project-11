import styles from './Slideshow.module.scss'
import { useState } from 'react'

function Slideshow({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0); //to do more research to understand how the hook works
    return (
        <div className="slideshow">
            <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} />

        </div>
    );
}

export default Slideshow