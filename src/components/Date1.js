import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, FormHelperText} from 'material-ui-core'
import React from 'react'
import * as Yup from 'yup'
const Date1 = () => {
    
    const initialValues = {
        dob: ""
    }

    const validationSchema = Yup.object().shape({
        dob : Yup
        .date().required("Date of Birth is required")
        .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
    })

    const onSubmit = (values, props) =>{
        console.log(values);
        console.log(props);
        props.resetForm();
    }
   

  return (
    <>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form >
               
                <Field type="date" name="dob"/>&nbsp; 
                <label>Enter Your Date Of Birth</label>
                <FormHelperText><ErrorMessage name="dob" /></FormHelperText>
                <Button type='submit' variant='contained' color="primary">Submit</Button>
            </Form>
        </Formik>
    </>
  )
}

export default Date1