import React from 'react';
import video from './img/placeholder-video.png'
import './Ceo.css'

export default function Ceo() {
    return (
        <section className="ceo">
            <img src={video} alt="placeholder-video" />
            <div className="ceo-content">
                <h1>Palavra do CEO</h1>
                <h2>Carlos Curioni</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, tellus vitae malesuada elementum, ex justo blandit orci, nec lacinia risus purus vel mi. In hac habitasse platea dictumst. Nunc at felis in nibh pretium imperdiet vitae id augue.</p>
            </div>
        </section>
    )
}