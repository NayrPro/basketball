import React from 'react'
import './css/Main.css'
import './css/Main-sections.css'
import './css/Main-info.css'
import Headline from './components/Headline'
import Info from './components/Info'
import Section from './components/Section'
import Form from './components/Form'
export default function Main() {
    return (
        <div className="main">
            <Headline/>
            <Section/>
            <Info/>
            <Form/>
        </div>
    )
}
