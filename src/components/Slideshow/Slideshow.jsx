import styles from "./Slideshow.module.scss"
import arrowLeft from "assets/UI/arrow-left.png"
import arrowRight from "assets/UI/arrow-right.png"
import { useState } from "react"

function Slideshow({ images }) {
	let [currentSlide, setCurrentSlide] = useState(0)

	const nextClick = () => {
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
	if (images.length > 1) {
		return (
			<div className={styles.main}>
				<button className={styles.slideshow} onClick={nextClick}>
					<img
						className={styles.image}
						src={images[currentSlide]}
						alt={`Slide ${currentSlide}`}
					/>
				</button>
				<div className={styles.number}>
					{currentSlide + 1}/{images.length}
				</div>
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
	} else {
		return (
			<div className={styles.main}>
				<button className={styles.slideshow} onClick={nextClick}>
					<img
						className={styles.image}
						src={images[currentSlide]}
						alt={`Slide ${currentSlide}`}
					/>
				</button>
			</div>
		)
	}
}

export default Slideshow
