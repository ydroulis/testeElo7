import React from 'react'
import Ceo from '../Ceo/Ceo'
import Team from '../Team/Team'
import Card from '../Card/Card'
import imgCamila from './img/camila.png'
import imgGuto from './img/guto.png'
import imgDavid from './img/david.png'
import imgBeatriz from './img/beatriz.png'
import './Teamwork.css'

export default function Teamwork() {
    return (
        <article className="teamwork">
            <Ceo/>
            <Team>
                <div className = "cards">
                    <Card img={imgCamila} alt = "Foto Camila"/>
                    <Card img={imgGuto} alt = "Foto Guto"/>
                    <Card img={imgDavid} alt = "Foto David"/>
                    <Card img={imgBeatriz} alt = "Foto Beatriz"/>
                </div>
            </Team>
        </article>
    )
}