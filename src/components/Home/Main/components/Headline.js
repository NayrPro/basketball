import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux"
export default function Headline() {
    const {windowSize} = useSelector(state => ({...state.windowSizeReducer}))
    return (
        <React.Fragment>
            <h1 className="main-title">LOREM IPSUM DOLOR!</h1>
            <p className="main-title-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis quis asperiores, enim esse deleniti iste harum hic accusamus reprehenderit quaerat repellat optio laboriosam repellendus ab ipsam earum possimus. Labore quos quaerat at corporis esse! Asperiores.<Link to="/" replace>Click Here!</Link></p>
            <div className="main-overlay">
                <img 
                alt="main"
                className="main-image lazy" 
                data-src={require('../images/home.jpg')}
                data-srcset={require('../images/home.jpg')}
                sizes={windowSize}
                width={windowSize}
                height="656.094"
                ></img>
            </div>
        </React.Fragment>
    )
}
