import React from 'react'
import "./list.scss"
import Card from "../Card/Card"
import { data } from './data'

const List = ({catId}) => {


  return (
    <div className='list'>
        {
            data[catId].map(item => (
                <Card item={item} key={item.id} />
            ))
        }
    </div>
  )
}

export default List