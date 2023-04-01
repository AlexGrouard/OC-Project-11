import styles from './Banner.module.scss'

function Banner({ text, imageBg }){
    return (
        <div className={styles.banner} style={{backgroundImage : `url(${imageBg})`}}>
            <div className={styles.overlay} >
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )

}
export default Banner
