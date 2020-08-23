import React from 'react'
import * as Yup from 'yup'
import {useSelector} from 'react-redux'
import FormikComponent from "../../../Formik/FormikComponent"
export default function Form() {

    /** Props that will be passed on FormikComponent in order to show a form 
        with specific properties*/
        
    const InitialValues = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    }
    
    const validationSchema = Yup.object({
        firstname: Yup.string().required("Your firstname is required"),
        lastname: Yup.string().required("Your lastname is required"),
        email: Yup.string().email("Invalid email format").required("Your e-mail is required"),
        password: Yup.string().required("Enter a password")
    })

    const onSubmit = values =>{
         console.log('Form data', values)
    }

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
                <FormikComponent InitialValues={InitialValues} 
                                 validationSchema={validationSchema} 
                                 onSubmit={onSubmit}
                />
        </div>

    )
}
