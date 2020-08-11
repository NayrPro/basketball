import React from 'react'
import './Main.css'
import './Main-sections.css'
import './Main-info.css'
import Home from './components/Home'
import Info from './components/Info'
import Section from './components/Section'
import Form from './components/Form'
export default function Main() {
    return (
        <div className="main">
            <Home/>
            <Info/>
            <Section/>
            <Form/>
        </div>
    )
}
