import styles from "./Error.module.scss"
import { Link } from "react-router-dom"

function Error() {
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<div>404</div>
				<p>Oups! La page que vous demandez n'existe pas.</p>
			</div>
			<Link to='/' className={styles.link}>
				Retournez sur la page d'accueil
			</Link>
		</div>
	)
}

export default Error
