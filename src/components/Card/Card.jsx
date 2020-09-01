import React from 'react'
import './Card.css'

export const Card = props => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=175x175`} alt="monster mugshot"/>
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </div>
)