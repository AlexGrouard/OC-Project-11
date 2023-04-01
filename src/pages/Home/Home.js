import data from '../../data/data.json'
import styles from './Home.module.scss'
import Banner from '../../components/Banner/Banner.js'
import Card from '../../components/Card/Card.js'
import homeBanner from '../../assets/home-banner.png'

function Home(){ 
    const Cards = data.map((logement) => <Card key={logement.id} logement={logement} />)
    return (
        <div className={styles.main}>
            <Banner text='Chez vous, partout et ailleurs' imageBg={homeBanner} />
            <div className={styles.container}>
                {Cards}
            </div>
        </div>
    )
}

export default Home