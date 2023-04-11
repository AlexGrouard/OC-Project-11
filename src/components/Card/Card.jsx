import styles from "./Card.module.scss"
import { Link } from "react-router-dom"

function Card({ logement }) {
	const idLink = "../rental/" + logement.id
	return (
		<div className={styles.main}>
			<Link to={idLink}>
				<div className={styles.overlay}>
					<img
						className={styles.cover}
						src={logement.cover}
						alt={logement.title + " cover"}
					/>
				</div>
				<div className={styles.title}>{logement.title}</div>
			</Link>
		</div>
	)
}

export default Card
