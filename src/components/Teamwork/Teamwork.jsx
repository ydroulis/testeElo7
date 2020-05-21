import React from 'react'
import video from './img/placeholder-video.png'
import imgCamila from './img/camila.png'
import imgGuto from './img/guto.png'
import imgDavid from './img/david.png'
import imgBeatriz from './img/beatriz.png'

export default Teamwork => {


    return (
        <article className="teamwork">
            <section className="ceo">
                <img src={video} alt="placeholder-video" />
                <h1>Palavra do CEO</h1>
                <h2>Carlos Curioni</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, tellus vitae malesuada elementum, ex justo blandit orci, nec lacinia risus purus vel mi. In hac habitasse platea dictumst. Nunc at felis in nibh pretium imperdiet vitae id augue.</p>
            </section>
            <section className="teamCards">
                <div className="card"><img src={imgCamila} alt="Foto da Camila" /></div>
                <div className="card"><img src={imgGuto} alt="foto do Guto" /></div>
                <div className="card"><img src={imgDavid} alt="Foto do David" /></div>
                <div className="card"><img src={imgBeatriz} alt="Foto da Beatriz" /></div>
            </section>
        </article>
    )
}