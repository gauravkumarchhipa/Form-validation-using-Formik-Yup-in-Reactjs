import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, FormHelperText} from 'material-ui-core'
import React from 'react'
import * as Yup from 'yup'
const Checkbox1 = () => {
    

    const initialValues = {
      occupation: [],
    }

    const validationSchema = Yup.object().shape({
      occupation : Yup.array()
      .required("Required")
      .min(1, "Select Minimum 1 occupation")
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
              <Field type="checkbox" value="Web_Developer" name="occupation"/>
              <label>Web Developer</label><br/>
              <Field type="checkbox" value="App_Developer" name="occupation"/>
              <label>App Developer</label><br/>
              <Field type="checkbox" value="Web_Designer" name="occupation"/>
              <label>Web Designer</label><br/>
              <FormHelperText><ErrorMessage name="occupation" /></FormHelperText>
              <Button type='submit' variant='contained' color="primary">Submit</Button>
            </Form>
        </Formik>
    </>
  )
}

export default Checkbox1