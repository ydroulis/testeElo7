import React from 'react';
import qualidade from './img/qualidade.png';
import descontracao from './img/descontracao.png';
import atividades from './img/atividades.png';
import './SaibaMais.css'

export default function SaibaMais(){
    return (
        <section className = "saibaMais">
            <div className = "saibaMais-card">
                <img src={qualidade} alt=""/>
                <h1>Qualidade de vida</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, tellus vitae malesuada elementum, ex justo blandit orci, nec lacinia risus purus vel mi.</p>
            </div>
            
            <div className = "saibaMais-card">
                <img src={descontracao} alt=""/>
                <h1>Ambiente descontraído</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, tellus vitae malesuada elementum, ex justo blandit orci, nec lacinia risus purus vel mi. In hac habitasse platea dictumst. Nunc at felis in nibh pretium imperdiet vitae id augue.</p>
            </div>

            <div className = "saibaMais-card">
                <img src={atividades} alt=""/>
                <h1>Atividades extras</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, tellus vitae malesuada elementum, ex justo blandit orci, nec lacinia risus purus vel mi. In hac habitasse platea dictumst.</p>
            </div>
            <a href="#"><p>Saiba mais >></p></a>
        </section>
    )
}