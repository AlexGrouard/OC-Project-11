import data from '../../data/data.json'
import styles from './Rental.module.scss'
import { useParams } from 'react-router-dom'
import Error from '../404/Error.js'
import Tags from '../../components/Tags/Tags.js'
import Star from '../../components/Star/Star.js'
import Collapsable from '../../components/Collapsable/Collapsable';
import Slideshow from '../../components/Slideshow/Slideshow'

function Rental() {
    const params = useParams();
    const logement = data.find((e) => e.id === params.id)
    const tags = logement.tags.map((tag ,id) => <Tags key={id} tag={tag} />)
    if (!logement) {
        return(
            <Error />
        )
    }
    else{
        return (
            <section className={styles.container}>
                <div className={styles.cover}>
                    <Slideshow className={styles.coverImg} images={logement.pictures} />
                </div>
                <div className={styles.titles}>
                    <div>
                        <h2>{logement.title}</h2>
                        <div>{logement.location}</div>
                    </div>
                    <div className={styles.picture}>
                        <div className={styles.name}>{logement.host.name}</div>
                        <img className={styles.picture} src={logement.host.picture} alt={logement.host.name}/>
                    </div>
                </div>
                <div className={styles.rating}>
                    <div className={styles.allTag}>
                        {tags}
                    </div>
                    <Star rating={logement.rating}/>
                </div>
                <article className={styles.description}>  
                    <div>
                        <Collapsable  title='Description' content={logement.description} maxWidth='50%'/>
                    </div>
                    <div>
                        <Collapsable  title='Equipements' content={logement.equipments} maxWidth='50%'/>
                    </div>
                </article>
            </section>
        ); 
    }
}

export default Rental