import React from 'react'
import styles from './Card.module.css'
export const Card = ({id}) => {
    if(id%10===5 || id%10===6){
        return(
            <>
            <div className={styles.empty}></div>
            </>
        )
    }
    else{
        return (
            <>
            <div className={styles.card}>
                {id}
            </div> 
            </>
          )
    }
  
}
