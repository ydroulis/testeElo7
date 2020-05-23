import React from 'react';
import './Team.css'

export default function Team(props){
    return (
        <section className = "team">
            <h1>Conheça nosso time fora de série</h1>
            {props.children}
        </section>
    )
}