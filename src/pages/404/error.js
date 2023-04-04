import styles from "./Error.module.scss"
import { Link } from "react-router-dom"

function Error() {
	return (
		<div className={styles.main}>
			<h2 className={styles.title}>404</h2>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<Link
				to='/'
				className={styles.link}
			>
				Retournez sur la page d'accueil
			</Link>
		</div>
	)
}

export default Error
