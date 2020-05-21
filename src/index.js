import React from 'react'
import ReactDom from 'react-dom';


import Teamwork from './components/Teamwork/Teamwork'
import Header from './components/Header/Header'
import './index.css'

const el = document.getElementById('root')
ReactDom.render(
    <div>
        <Header/>
        <Teamwork/>
    </div>,
el)

