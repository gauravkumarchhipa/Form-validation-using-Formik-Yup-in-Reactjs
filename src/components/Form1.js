import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { form1Schema } from './schemas/formvalidation1';

const getLocalData = ()=>{
    let data = localStorage.getItem('formdata1');
    if(data) {
        return JSON.parse(localStorage.getItem('formdata1'));
    }else{
        return [];
    }
}

const Form1 = () => {
    const [item, setItem]= useState(getLocalData());
    // const [isEditData, setIsEditData] = useState(null);

    const initialValues = {
        name: "",
        email : "",
        password : "",
        confirmpassword : "",
        radio : "",
        fav_language : ""
    }

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues : initialValues,
        validationSchema : form1Schema,
        onSubmit : (values, action) =>{
            // console.log(values);
            action.resetForm();
        }
    })
    const addData = ()=>{
        if(values.name === "" || values.email === "" || values.password === "" || values.confirmpassword !== values.password || values.radio === "" || values.fav_language === ""){
            alert("Field All Data");
        }
        else {
            setItem([...item, values]);
        }
    }

    const clrAllData = ()=>{
        setItem([]);
    }

    const deleteData = (id)=>{
        const deleteItem = item.filter((ele,ind)=>{
            return ind !== id;
        });
        setItem(deleteItem);
    }

   
    useEffect(() => {
        localStorage.setItem("formdata1", JSON.stringify(item));
    }, [item]);
    
 
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

            <label>Select Your Language</label> &nbsp; &nbsp;

            {/* <RadioButtonGroup> */}
              <input type="radio" id="html" name="fav_language" value="HTML"/>
              <label>HTML</label>
              <input type="radio" id="css" name="fav_language" value="CSS"/>
              <label>CSS</label>
              <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
              <label>JavaScript</label>
            {/* </RadioButtonGroup> */}
            <br/>
            {errors.fav_language && touched.fav_language ?(<p style={{color: "red"}}>{errors.fav_language}</p> ) : null}

           


            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Select Your Gender
            </label>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="radio" id="Male" value="Male"/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Male
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="radio" id="Female" value="Female"/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Female
                </label>
            </div>
            

            <br/>

            <select className="form-select" size="3" aria-label="size 3 select example" defaultValue={"selected"}>
                <option value="selected">Select Vehicle</option>
                <option value="1">car</option>
                <option value="2">bike</option>
            </select>
            <br/>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="checkbox" id="check1"/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    iphone
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="checkbox" id="check2"/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    samsung
                </label>
            </div>

            

            <button type="submit" className="btn btn-primary" onClick={addData}>Submit</button> &nbsp; &nbsp;
       
       
        </form>

        <table className="table mb-4">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
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
        <button type="submit" className="btn btn-danger" onClick={clrAllData}>ClearAll</button>

           
    </>
  )
}

export default Form1