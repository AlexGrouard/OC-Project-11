import styles from './Slideshow.module.scss'
import { useState } from 'react'

function Slideshow({ images }) {
    let [currentSlide, setCurrentSlide] = useState(0); //to do more research to understand how the hook works

    const handleClick = () => {
        //move up the list of images and at the max set back to 0
        if (currentSlide < images.length) { 
            setCurrentSlide(currentSlide++)
            if (currentSlide === images.length) {currentSlide = 0}
        }
        //to use with swipe gesture
        if (currentSlide > images.length) {
            setCurrentSlide(currentSlide - 1)
            if (currentSlide === images.length) {currentSlide = images.length}
        }
    }  

    return (
        <button className={styles.slideshow} onClick={handleClick}>
            <img className={styles.image} src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
        </button>
    );
}

export default Slideshow