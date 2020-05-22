import React from 'react'
import video from './img/placeholder-video.png'
import Card from '../Card/Card'
import './Teamwork.css'
import imgCamila from './img/camila.png'
import imgGuto from './img/guto.png'
import imgDavid from './img/david.png'
import imgBeatriz from './img/beatriz.png'


export default Teamwork => {
    return (
        <article className="teamwork">
            <section className="ceo">
                <img src={video} alt="placeholder-video" />
                <div className="ceo-content">
                    <h1>Palavra do CEO</h1>
                    <h2>Carlos Curioni</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, tellus vitae malesuada elementum, ex justo blandit orci, nec lacinia risus purus vel mi. In hac habitasse platea dictumst. Nunc at felis in nibh pretium imperdiet vitae id augue.</p>
                </div>
            </section>
            <section className="team">
                <h1>Conheça nosso time fora de série</h1>
                    <Card img={imgCamila}/>
                    <Card img={imgGuto}/>
                    <Card img={imgDavid}/>
                    <Card img={imgBeatriz}/>
                { /* <div className = "cards">
                    <div className="card"><a href="#"><img src={imgCamila} alt="Foto da Camila" /></a></div>
                    <div className="card"><a href="#"><img src={imgGuto} alt="foto do Guto" /></a></div>
                    <div className="card"><a href="#"><img src={imgDavid} alt="Foto do David" /></a></div>
                    <div className="card"><a href="#"><img src={imgBeatriz} alt="Foto da Beatriz" /></a></div>
                </div>*/}
            </section>
        </article>
    )
}