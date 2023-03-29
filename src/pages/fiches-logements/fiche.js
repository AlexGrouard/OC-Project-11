import data from '../../data/data.json'
import styles from './Fiche.module.scss'
import { useParams } from 'react-router-dom'
import Tags from '../../components/Tags/Tags.js'
import Star from '../../components/Star/Star.js'
import Collapsable from '../../components/Collapsable/Collapsable';

function Fiche() {
    const params = useParams();
    const logement = data.find((e) => e.id === params.id)
    return (
        <section className={styles.container}>
            <div className={styles.cover}>
                <img className={styles.coverImg}src={logement.cover} alt={logement.title} />
            </div>
            <div className={styles.title}>
                <div className={styles.left}>
                    <h2>{logement.title}</h2>
                    <div>{logement.location}</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.name}>{logement.host.name}</div>
                    <img className={styles.picture} src={logement.host.picture} alt={logement.host.name}/>
                </div>
            </div>
            <div className={styles.rating}>
                <Tags tags={logement.tags} />
                <Star rating={logement.rating}/>
            </div>
            <article className={styles.description}>  
                <div className={styles.left}>
                    <Collapsable  title='Description' content={logement.description}/>
                </div>
                <div className={styles.right}>
                    <Collapsable  title='Equipements' content={logement.equipments}/>
                </div>
            </article>
        </section>
    ); 
}

export default Fiche