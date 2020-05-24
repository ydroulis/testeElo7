import React from 'react'
import ReactDom from 'react-dom';

import VagasEmAberto from './components/VagasEmAberto/VagasEmAberto'
import SaibaMais from './components/SaibaMais/SaibaMais'
import Teamwork from './components/Teamwork/Teamwork'
import Header from './components/Header/Header'
import './index.css'

const el = document.getElementById('root')
ReactDom.render(
    <React.Fragment>
        <Header/>
        <Teamwork/>
        <SaibaMais/>
        <VagasEmAberto/>
    </React.Fragment>,
el)

