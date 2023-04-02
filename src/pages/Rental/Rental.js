import data from 'data/data.json'
import styles from './Rental.module.scss'
import { useParams } from 'react-router-dom'
import Error from 'pages/404/Error.js'
import Tags from 'components/Tags/Tags.js'
import Star from 'components/Star/Star.js'
import Collapsable from 'components/Collapsable/Collapsable';
import Slideshow from 'components/Slideshow/Slideshow'

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
                <div className={styles.info}>
                    <div className={styles.titles}>
                        <div className={styles.title}>{logement.title}</div>
                        <div className={styles.location}>{logement.location}</div>
                        <div className={styles.allTag}>
                            {tags}
                        </div>
                    </div>
                    <div className={styles.rating}>
                        <div className={styles.pictures}>
                            <div className={styles.name}>{logement.host.name}</div>
                            <img className={styles.picture} src={logement.host.picture} alt={logement.host.name}/>
                        </div>
                        <div><Star rating={logement.rating}/></div>
                    </div>
                </div>
                <article className={styles.content}>  
                    <div className={styles.description}>
                        <Collapsable  title='Description' content={logement.description} />
                    </div>
                    <div className={styles.equipement}>
                        <Collapsable  title='Equipements' content={logement.equipments} />
                    </div>
                </article>
            </section>
        ); 
    }
}

export default Rental