import React from 'react';

export default function Card(props){
    return (
        <div className = "cards">
                    <div className="card"><a href="#"><img src={props.img} alt="" /></a></div>
                </div>
    )
}