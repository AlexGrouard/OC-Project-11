
import styles from './Banner.module.scss'

function Banner({page}){
    if (page === "about") {
        return(
            <div className={styles.about}>
            </div>
        )
    }
    else{
        return(
            <div className={styles.home}>
                <p>Chez vous, partout et ailleurs</p>
            </div>
        )
    } 
}

export default Banner