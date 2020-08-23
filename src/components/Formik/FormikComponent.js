import React from 'react'
import {Formik, Form} from 'formik'
import Input from "./Input"

export default function FormikComponent(props) {

    return (
        <Formik initialValues={props.InitialValues}
                validationSchema={props.validationSchema}
                onSubmit={props.onSubmit}>
            {
                formik => (
                <Form>
                        {Object.keys(props.InitialValues).map((InitialValue, i) => (
	                        <Input 
		                        key= {i}
 		                        type={InitialValue !== "email" && InitialValue !== "password" ? "text" : InitialValue}
 		                        label= {InitialValue === "username" ? `${InitialValue} or email` : InitialValue}
 		                        name= {InitialValue}
		                        error = {formik.errors[InitialValue]}
		                        touched = {formik.touched[InitialValue]}
	                        />
                        ))}
                    
                    <button  className={formik.isValid? "main-form-input submit" : "main-form-input submit-no-hover"}
                             type="submit" 
                             disabled={!formik.isValid} 
                             style={{background : !formik.isValid && "grey"}}>Submit
                    </button>
                </Form>
                )
            }
        </Formik>
    )
}