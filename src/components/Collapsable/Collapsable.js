import styles from './Collapsable.module.scss'
import arrow from '../../assets/UI/arrow.svg'
//import { useState } from 'react';

function handleClick() {
   // console.log('click')
   /*
               <div className="controls">
                <button onClick={() => setCurrentSlide(currentSlide - 1)}>
                Previous
                </button>
                <button onClick={() => setCurrentSlide(currentSlide + 1)}>
                Next
                </button>
            </div>
   */
}

function Collapsable ({title, content, maxWidth}){
    let equipementArrays = [];
    if (Array.isArray(content)) {
        content.forEach((el) => equipementArrays.push(<li key={el}>{el}</li>))
        return (
            <div className={styles.main} style={{maxWidth :`${maxWidth}`}}>
                <div className={styles.content} onClick={handleClick()}>
                    <div className={styles.title}>
                        <span>{title}</span>
                        <div className={styles.arrow}>
                            <img src={arrow} height='30px' width='30px'></img>
                        </div>
                    </div>
                    <ul className={styles.equipement}> {equipementArrays} </ul>
                </div>
    
            </div>
        )
    }
    else {
        return (
            <div className={styles.main} style={{maxWidth :`${maxWidth}`}}>
                <div className={styles.content} onClick={handleClick()}>
                    <div className={styles.title}>
                        <span>{title}</span>
                        <div className={styles.arrow}>
                            <img src={arrow} height='30px' width='30px'></img>
                        </div>
                    </div>
                    <p>{content}</p>
                </div>
    
            </div>
        )
    } 
}

export default Collapsable