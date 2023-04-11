import styles from "./Slideshow.module.scss"
import arrowLeft from "assets/UI/arrow-left.png"
import arrowRight from "assets/UI/arrow-right.png"
import { useState } from "react"

function Slideshow({ images }) {
	let [currentSlide, setCurrentSlide] = useState(0) //to do more research to understand how the hook works

	const nextClick = () => {
		//move up the list of images and at the max set back to 0
		setCurrentSlide(currentSlide + 1)
		currentSlide++
		if (currentSlide === images.length) {
			setCurrentSlide((currentSlide = 0))
		}
	}
	const previousClick = () => {
		if (currentSlide === 0) {
			currentSlide = images.length
		} else {
			setCurrentSlide(currentSlide - 1)
		}
	}

	return (
		<div className={styles.main}>
			<button className={styles.slideshow} onClick={nextClick}>
				<img
					className={styles.image}
					src={images[currentSlide]}
					alt={`Slide ${currentSlide}`}
				/>
			</button>
			{/* need to implement a rollback to the start*/}
			<div className={styles.control}>
				<button className={styles.previousBtn} onClick={previousClick}>
					<img src={arrowLeft} alt='previous' />
				</button>
				<button className={styles.nextBtn} onClick={nextClick}>
					<img src={arrowRight} alt='next' />
				</button>
			</div>
		</div>
	)
}

export default Slideshow
