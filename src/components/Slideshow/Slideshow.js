import styles from "./Slideshow.module.scss"
import arrowLeft from "assets/UI/arrow-left.png"
import arrowRight from "assets/UI/arrow-right.png"
import { useState } from "react"

function Slideshow({ images }) {
	let [currentSlide, setCurrentSlide] = useState(0) //to do more research to understand how the hook works

	const handleClick = () => {
		//console.log(currentSlide)
		//move up the list of images and at the max set back to 0
		if (currentSlide < images.length) {
			setCurrentSlide(currentSlide + 1)
			currentSlide++
			if (currentSlide === images.length) {
				setCurrentSlide((currentSlide = 0))
			}
		}
		if (currentSlide > images.length) {
			setCurrentSlide(currentSlide - 1)
			if (currentSlide === images.length) {
				currentSlide = images.length
			}
		}
	}

	return (
		<div className={styles.main}>
			<button className={styles.slideshow} onClick={handleClick}>
				<img
					className={styles.image}
					src={images[currentSlide]}
					alt={`Slide ${currentSlide}`}
				/>
			</button>
			{/* need to implement a rollback to the start*/}
			<div className={styles.control}>
				<button
					className={styles.previousBtn}
					onClick={() => setCurrentSlide(currentSlide - 1)}
				>
					<img src={arrowLeft} alt='previous' />
				</button>
				<button
					className={styles.nextBtn}
					onClick={() => setCurrentSlide(currentSlide + 1)}
				>
					<img src={arrowRight} alt='next' />
				</button>
			</div>
		</div>
	)
}

export default Slideshow
