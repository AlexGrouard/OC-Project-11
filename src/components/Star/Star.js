//import styles from './Star.module.scss'
import redStar from '../../assets/UI/star_red.svg'
import greyStar from '../../assets/UI/star_grey.svg'

function Star(rating){
    let i = 0;
    let nbr = rating.value
//if no numbers provided add 5 empty stars
//if number provided then add the number of color stars and if it's lower than 5 add enough empty star to go to 5.
    while (i < 5){
        i++;
        console.log(i)
        if (nbr > 0){
            for (let e = 0; nbr < e; e++ ){
                i++;
                return (<img src={redStar} alt="red star"></img>)
                
            }
            if (i < 5){
                return <img src={greyStar} alt="red star"></img>
                i++;
            }
        }
        else{
            return <img src={greyStar} alt="grey star"></img>
            i++;
        }
        
    }    
}

export default Star