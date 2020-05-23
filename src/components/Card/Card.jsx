import React from 'react';
import './Card.css'

export default function Card(props){
    return (
        <React.Fragment>
            <div className="card"><a href="#"><img src={props.img} alt={props.alt} /></a></div>
        </React.Fragment>
    )
}