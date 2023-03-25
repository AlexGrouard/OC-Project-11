import data from '../../data/data.json'
import styles from './Fiche.module.scss'
import { useParams } from 'react-router-dom'

function Fiche() {
    const params = useParams();
    const logement = data.find((e) => e.id === params.id)

    return (
        <section className={styles.container}>
            <div className={styles.cover}>
                <img src={logement.cover} alt={logement.title} />
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
                <div className={styles.tags}>
                    {logement.tags.forEach(tag => {return <div className={styles.tag}>{tag}</div>})}
                </div>
                <div className={styles.stars}>
                    {/*add star component*/}
                </div>
            </div>
            <article className={styles.description}>  
                <div className={styles.left}>
                    {/*add collapsable component with logement.description*/}
                </div>
                <div className={styles.right}>
                    {/*add collapsable component with logement.equipement*/}
                </div>
            </article>
        </section>
    ); 
}

export default Fiche