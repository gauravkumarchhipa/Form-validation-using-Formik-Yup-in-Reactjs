import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup} from 'material-ui-core'
import React from 'react'
import * as Yup from 'yup'
const RadioBtn = () => {
    

    const initialValues = {
        gender: "",
    }

    const validationSchema = Yup.object().shape({
        gender : Yup.string().oneOf(["male", "female"],"Required").required("Required"),
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
                <FormControl component="fieldset" >
                    <FormLabel component="legend">Gender</FormLabel>
                    <Field as={RadioGroup} aria-label="gender" name="gender" style={{display : "initial"}}>
                        <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                        <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                    </Field>
                </FormControl>
                <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
                <Button type='submit' variant='contained' color="primary">Submit</Button>
            </Form>
        </Formik>
    </>
  )
}

export default RadioBtn