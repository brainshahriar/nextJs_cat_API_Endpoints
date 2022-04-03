import React from 'react'
import styles from './card.module.css'
import { useRouter } from "next/router";

export default function Card({cat}) {
    const router = useRouter();
  return (
    <div className={styles.card} onClick={()=>router.push(`/cats/${cat.id}`)}>
        <div className={styles["card-header"]}>
            <img src={cat.image.url} alt={cat.image.alt} className={styles["card-img"]}/>
        </div>
        <div>
            <h3>{cat.name}</h3>
            <p>{cat.phone}</p>
            <p>{cat.email}</p>
        </div>
    </div>
  )
}
