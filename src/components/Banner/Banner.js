import styles from './Banner.module.scss'

function Banner(){
    const home = true
    const about = false
    //if route = home or about
    if (home) 
    return(
            <div className={styles.home}>
                <p>Chez vous, partout et ailleurs</p>
            </div>
        )
    if (about) {
        return(
            <div className={styles.about}>
            </div>
        )
    }
    else{
        return  <div className={styles.none}></div>
    }
}

export default Banner