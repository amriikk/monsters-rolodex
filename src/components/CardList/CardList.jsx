import React from 'react'
import './CardList.css'

export const CardList = props => (
    <div className='CardList'>
        {props.monsters.map(monster => (
            <h1 key={monster.id}> {monster.name} </h1>
        ))}
    </div>
);
    