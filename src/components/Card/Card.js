import styles from './Card.module.scss'
import { Link } from 'react-router-dom'

function Card(logement){
    const idLink = '../fiche/' + logement.value.id
    return(
        <div className={styles.main} >
            <Link to= {idLink} >
                <img className={styles.cover} src={logement.value.cover} alt={logement.value.title + ' cover'} />
                <div className={styles.title}>{logement.value.title}</div>
            </Link>
        </div>
    )
}

export default Card