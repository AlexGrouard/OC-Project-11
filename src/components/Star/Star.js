import styles from './Star.module.scss'
import redStar from '../../assets/UI/star_red.svg'
import greyStar from '../../assets/UI/star_grey.svg'

function Star({ rating }){
    let i = 1
    const stars = []
    //loop to get the right amount of rating stars as given in the data
    for ( i ; rating >= i; i++ ) {
        if (i => rating){
            stars.push (<img key={i} src={redStar} alt="red star"></img>)
        }
    }
    //loop to complete the 5 stars rating
    for (i ; i < 6; i++) {
        stars.push (<img key={i} src={greyStar} alt="grey star"></img>)
    }
    return <div className={styles.stars}>{stars}</div>
}
export default Star
