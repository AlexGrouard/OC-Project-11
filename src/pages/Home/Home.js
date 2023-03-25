import data from '../../data/data.json'
//import { Link } from 'react-router-dom'
import styles from './Home.module.scss'
import Banner from '../../components/Banner/Banner.js'
import Card from '../../components/Card/Card.js'

function Home(){ 
    const Cards = data.map((logement) => <Card key={logement.id} value={logement} />)
    //
    return (
        <div className={styles.main}>
            <Banner />
            <div className={styles.container}>
                {Cards}
            </div>
        </div>
    )
}

export default Home