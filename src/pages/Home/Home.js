import { data }  from './data/data.json'
import styles from './Home.module.scss'
import Banner from '../../components/Banner/Banner.js'
import Card from '../../components/Card/Card.js'

function Home(){
    data.map(logement => {});
    return (
        <div className={styles.main}>
            <Banner />
        </div>
    )
}

export default Home