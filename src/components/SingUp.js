import React from 'react'
import { useFormik } from 'formik';
import { signUpSchema } from './schemas';
// formik form handling
// yup form validation
const SignUp = () => {
    const initialValues = {
        name: "",
        email : "",
        password : "",
        confirmpassword : ""
    }

    const {values, errors, handleBlur,touched, handleChange, handleSubmit} = useFormik({
        initialValues : initialValues,
        validationSchema : signUpSchema,
        onSubmit : (values, action) =>{
            console.log(values);
            action.resetForm();
        }
    })
 
  return (
    <>
        <form onSubmit={handleSubmit}>
        
            <div className="mb-3">
                <label  className="form-label">Enter Your Name</label>
                <input type="text" className="form-control" name='name' placeholder="Enter Your Name" autoComplete='off' 
                value={values.name} 
                onChange={handleChange} 
                onBlur={handleBlur}
                />
                {errors.name && touched.name ? (<p style={{color: "red"}}>{errors.name}</p> ): null}
            </div>
            <div className="mb-3">
                <label  className="form-label">Enter your Email</label>
                <input type="text" className="form-control" name='email' placeholder="Enter Your Email" autoComplete='off'
                value={values.email} 
                onChange={handleChange} 
                onBlur={handleBlur}
                />
                {errors.email && touched.email ? (<p style={{color: "red"}}>{errors.email}</p>) : null}
            </div>
            <div className="mb-3">
                <label  className="form-label">Enter your Password</label>
                <input type="password" className="form-control" name='password' placeholder="Enter Your Password" autoComplete='off'
                value={values.password} 
                onChange={handleChange} 
                onBlur={handleBlur}
                />
                {errors.password && touched.password ? (<p style={{color: "red"}}>{errors.password}</p>) : null}
            </div>
            <div className="mb-3">
                <label  className="form-label">Enter Confirm Password</label>
                <input type="password" className="form-control" name='confirmpassword' placeholder="Enter Confirm Password" autoComplete='off'
                value={values.confirmpassword} 
                onChange={handleChange} 
                onBlur={handleBlur}
                />
                {errors.confirmpassword && touched.confirmpassword ? (<p style={{color: "red"}}>{errors.confirmpassword}</p> ) : null}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default SignUp