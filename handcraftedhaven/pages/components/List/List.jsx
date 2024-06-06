import React from 'react'
import styles from "./list.module.css"
import Card from "../Card/Card"
import { data } from './data'

const List = ({catId}) => {


  return (
    <div className={styles.list}>
        {
            data[catId].map(item => (
                <Card item={item} key={item.id} />
            ))
        }
    </div>
  )
}

export default List