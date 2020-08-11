import React from 'react'
import FormikComponent from "./Formik/FormikComponent"
export default function Form() {
    return (
        <div className="main-form">
                <h2>Suscribe to our mailing list!</h2>
                
                {/*This component will manage the state of each inputs of
                  the form*/}
                <FormikComponent />
        </div>

    )
}
