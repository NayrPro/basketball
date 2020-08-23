import React from 'react'
import {useSelector} from 'react-redux'
import FormikComponent from "./FormikComponent"
export default function Form() {
    /** Bringing the state windowSize from windowSizeReducer to apply 
        or not aos animation on main-form depending on its value */
    const {windowSize} = useSelector(state => ({...state.windowSizeReducer}))
    return (
        <div 
          className="main-form"
          data-aos = {windowSize > 992 ? "fade-up" : ""}
        >
                <h2>Suscribe to our mailing list!</h2>
                
                {/*This component will manage the state of each inputs of
                  the form*/}
                <FormikComponent />
        </div>

    )
}
