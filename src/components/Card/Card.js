import styles from './Card.module.scss'
import { Link } from 'react-router-dom'

function Card(logement){
    return(
        <div className={styles.main} >
            <Link to='/fiche'>
                <img className={styles.cover} src={logement.value.cover} alt={logement.value.title + ' cover'} />
                <div className={styles.title}>{logement.value.title}</div>
            </Link>
        </div>
    )
}

export default Card