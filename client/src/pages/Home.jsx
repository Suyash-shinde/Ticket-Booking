import React from 'react'
import { Card } from './Card'
import styles from './Home.module.css'
const json=
  [
    {"id": 1, "name": "Item 1"},
    {"id": 2, "name": "Item 2"},
    {"id": 3, "name": "Item 3"},
    {"id": 4, "name": "Item 4"},
    {"id": 5, "name": "Item 5"},
    {"id": 6, "name": "Item 6"},
    {"id": 7, "name": "Item 7"},
    {"id": 8, "name": "Item 8"},
    {"id": 9, "name": "Item 9"},
    {"id": 10, "name": "Item 10"},
    {"id": 11, "name": "Item 11"},
    {"id": 12, "name": "Item 12"},
    {"id": 13, "name": "Item 13"},
    {"id": 14, "name": "Item 14"},
    {"id": 15, "name": "Item 15"},
    {"id": 16, "name": "Item 16"},
    {"id": 17, "name": "Item 17"},
    {"id": 18, "name": "Item 18"},
    {"id": 19, "name": "Item 19"},
    {"id": 20, "name": "Item 20"},
    {"id": 21, "name": "Item 21"},
    {"id": 22, "name": "Item 22"},
    {"id": 23, "name": "Item 23"},
    {"id": 24, "name": "Item 24"},
    {"id": 25, "name": "Item 25"},
    {"id": 26, "name": "Item 26"},
    {"id": 27, "name": "Item 27"},
    {"id": 28, "name": "Item 28"},
    {"id": 29, "name": "Item 29"},
    {"id": 30, "name": "Item 30"},
    {"id": 31, "name": "Item 31"},
    {"id": 32, "name": "Item 32"},
    {"id": 33, "name": "Item 33"},
    {"id": 34, "name": "Item 34"},
    {"id": 35, "name": "Item 35"},
    {"id": 36, "name": "Item 36"},
    {"id": 37, "name": "Item 37"},
    {"id": 38, "name": "Item 38"},
    {"id": 39, "name": "Item 39"},
    {"id": 40, "name": "Item 40"},
    {"id": 41, "name": "Item 41"},
    {"id": 42, "name": "Item 42"},
    {"id": 43, "name": "Item 43"},
    {"id": 44, "name": "Item 44"},
    {"id": 45, "name": "Item 45"},
    {"id": 46, "name": "Item 46"},
    {"id": 47, "name": "Item 47"},
    {"id": 48, "name": "Item 48"},
    {"id": 49, "name": "Item 49"},
    {"id": 50, "name": "Item 50"}
];
export const Home = () => {
  return (
    <>
    <div className={styles.screen}> SCREEN </div>
    <div className={styles.seating}>
      <div className={styles.seatList}>
        {json.map((item)=>(
          <Card id={item.id} key={item.name}></Card>
        ))}
      </div>
     
    </div>
    </>
  )
}
