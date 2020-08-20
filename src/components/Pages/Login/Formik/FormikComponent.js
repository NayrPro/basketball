import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import Input from "./Input"

export default function FormikComponent() {

    const InitialValues = {
        username: '',
        password: '',
    }
    
    const validationSchema = Yup.object({
        username: Yup.string().required("Your firstname is required"),
        password: Yup.string().required("Enter a password")
    })

    const onSubmit = values =>{
         console.log('Form data', values)
    }
    return (
        <Formik initialValues={InitialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {
                formik => (
                <Form>
                    <Input 
                        type="text" 
                        label="Username or mail adress" 
                        name="username"
                        error={formik.errors.username}
                        touched={formik.touched.username}
                    />
                    
                    <Input 
                        type="password" 
                        label="Password" 
                        name="password"
                        error={formik.errors.password}
                        touched={formik.touched.password}
                    />
                    
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