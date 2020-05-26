import React from 'react';
import ListaVagas from '../ListaVagas/ListaVagas'
import './VagasEmAberto.css'


export default function VagasEmAmberto(){
    return(
        <article className = "vagasEmAberto">
            <h1>Vagas em aberto</h1>
            <ListaVagas/>
        </article>
    )
}