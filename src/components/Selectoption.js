import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, FormHelperText} from 'material-ui-core'
import React from 'react'
import * as Yup from 'yup'
const SelectOption = () => {
    

    const initialValues = {
        city: "",
    }

    const validationSchema = Yup.object().shape({
        city : Yup.string().required("Select your City"),
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
                <Field component="select" name="city" placeholder='select options' >
                    <option value="CITY">Select your City</option>
                    <option value="ahmedabad">Ahmedabad</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="surat">Surat</option>
                    <option value="delhi">Delhi</option>
                    
                </Field>
                <FormHelperText><ErrorMessage name="city" /></FormHelperText>
                <Button type='submit' variant='contained' color="primary">Submit</Button>
            </Form>
        </Formik>
    </>
  )
}

export default SelectOption