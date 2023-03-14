import React, { useEffect, useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@material-ui/core'
import * as Yup from 'yup'

const getLocalData = ()=>{
    let data = localStorage.getItem('SignupData3');
    if(data) {
        return JSON.parse(localStorage.getItem('SignupData3'));
    }else{
        return [];
    }
}

const SingUp3 = () => {
    const paperStyle = { padding: 20, width: 700, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    const [item, setItem]= useState(getLocalData());

    const initialValues = {
        name : "",
        email : "",
        gender : "",
        phoneNumber : "",
        password : "",
        confirmPassword : "",
        termAndConditions : false

    }

    const validationSchema = Yup.object().shape({
        name : Yup.string().min(3,"It's too short").required("Required"),
        email : Yup.string().email("Enter valid email").required("Required"),
        gender : Yup.string().oneOf(["male", "female"],"Required").required("It is Required"),
        phoneNumber : Yup.number().typeError("Enter valid Phone Number").required("Required"),
        password : Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword : Yup.string().oneOf([Yup.ref('password')],"Password Does Not Match").required("Required"),
        termAndConditions : Yup.string().oneOf(["true"],"Accept term and condition")
    })

    const onSubmit = (values, props) =>{
        console.log(values);
        console.log(props);

        props.resetForm()
        setItem([...item, values])
    }

    const clearAll = ()=>{
        console.log("hi")
        setItem([]);
    }

    const deleteData = (id)=>{
        const deleteItem = item.filter((ele,ind) =>{
            return ind !== id;
        })
        setItem(deleteItem);
    }


    useEffect(() => {
        localStorage.setItem("SignupData3", JSON.stringify(item));
    }, [item]);

  return (
    <>
    <Grid>
        <Paper style={paperStyle}>
            <Grid align="center">
                <Avatar style={avatarStyle}>
                    <AddCircleOutlineOutlinedIcon/>
                </Avatar>
                <h2 style={headerStyle}>Sign Up</h2>
                <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                
            </Grid>
        
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form >
                    <Field as={TextField} fullWidth name="name" label="Name"
                    placeholder="Enter Your Name" autoComplete='off' helperText={<ErrorMessage name="name" />}/>
                    
                    <Field as={TextField} fullWidth name="email" type="email" label="Email"
                    placeholder="Enter Your Email" autoComplete='off' helperText={<ErrorMessage name="email" />}/>
                    
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <Field as={RadioGroup} aria-label="gender" name="gender" style={{display : "initial"}}>
                            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        </Field>
                    </FormControl>
                    <FormHelperText><ErrorMessage name="gender" /></FormHelperText>

                    <Field as={TextField} fullWidth name="phoneNumber" label="Phone Number"
                    placeholder="Enter Your Phone Number" helperText={<ErrorMessage name="phoneNumber" />} autoComplete='off'/>

                    <Field as={TextField} fullWidth name="password" type="password" label="Password"
                    placeholder="Enter Your Password" helperText={<ErrorMessage name="password" />} autoComplete='off'/>

                    <Field as={TextField} fullWidth name="confirmPassword" type="password" label="Confirm Password"
                    placeholder="Confirm Your Password" helperText={<ErrorMessage name="confirmPassword" />} autoComplete='off'/>

                    <FormControlLabel
                    control={<Field as={Checkbox} name="termAndConditions" />} label="I accept the term and conditions." />
                    <FormHelperText><ErrorMessage name="termAndConditions" /></FormHelperText>
                    <br/>
                    <Button type='submit' variant='contained' color="primary">Submit</Button>
                </Form>

            </Formik>
        </Paper>
        
    </Grid>


    <table className="table mb-4">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Password</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
  
                  {
                    item.map((ele, ind)=>{
                        return(
                            <tr key={ind}>
                                <th scope="row">{ind+1}</th>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.gender}</td>
                                <td>{ele.password}</td>
                                <td>
                                    <div className='eachItem' key={ind}>
                                        <button type="button" className="btn btn-danger" onClick={()=>{deleteData(ind)}}>Delete</button>
                                        &nbsp; &nbsp; &nbsp;
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }               
            </tbody>
        </table>
        <button type="submit" className="btn btn-danger" onClick={clearAll}>ClearAll</button>

    </>

  )
}

export default SingUp3