import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import Input from "../../../Formik/Input"

export default function FormikComponent() {

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
    return (
        <Formik initialValues={InitialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {
                formik => (
                <Form>
                    <Input 
                        type="text" 
                        label="Firstname: " 
                        name="firstname"
                        error={formik.errors.firstname}
                        touched={formik.touched.firstname}
                    />
                    <Input 
                        type="text" 
                        label="Lastname: " 
                        name="lastname"
                        error={formik.errors.lastname}
                        touched={formik.touched.lastname}
                    />
                    <Input 
                        type="email" 
                        label="Email: " 
                        name="email"
                        error={formik.errors.email}
                        touched={formik.touched.email}
                    />
                    
                    <Input 
                        type="password" 
                        label="Password: " 
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