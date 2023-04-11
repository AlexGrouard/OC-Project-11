import styles from "./Collapsable.module.scss"
import arrowDown from "assets/UI/arrow-down.svg"
import arrowUp from "assets/UI/arrow-up.svg"
import { useState } from "react"

function Collapsable({ title, content }) {
	const [isOpen, setIsOpen] = useState(false)

	let equipementArrays = []
	if (Array.isArray(content)) {
		content.forEach((el) => equipementArrays.push(<li key={el}>{el}</li>))
		return (
			<div className={styles.main}>
				<div className={styles.content}>
					<button
						className={styles.title}
						onClick={() => setIsOpen(!isOpen)}
					>
						{title}
						{!isOpen ? (
							<div className={styles.arrow}>
								<img
									src={arrowDown}
									alt='arrow down'
									height='30px'
									width='30px'
								></img>
							</div>
						) : (
							<div className={styles.arrow}>
								<img
									src={arrowUp}
									alt='arrow up'
									height='30px'
									width='30px'
								></img>
							</div>
						)}
					</button>
					<div className={isOpen ? styles.show : styles.hide}>
						<ul className={styles.equipement}> {equipementArrays} </ul>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className={styles.main}>
				<div className={styles.content}>
					<button
						className={styles.title}
						onClick={() => setIsOpen(!isOpen)}
					>
						{title}
						{!isOpen ? (
							<div className={styles.arrow}>
								<img
									src={arrowDown}
									alt='arrow down'
									height='30px'
									width='30px'
								></img>
							</div>
						) : (
							<div className={styles.arrow}>
								<img
									src={arrowUp}
									alt='arrow up'
									height='30px'
									width='30px'
								></img>
							</div>
						)}
					</button>
					<p className={isOpen ? styles.show : styles.hide}>{content}</p>
				</div>
			</div>
		)
	}
}

export default Collapsable
