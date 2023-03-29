import styles from './Collapsable.module.scss'
import arrow from '../../assets/UI/arrow.svg'
import { useState } from 'react';

function handleClick() {
   // console.log('click')
}


function Collapsable ({title, content}){
    return (
        <div className={styles.main}>
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

export default Collapsable