import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { signUpSchema } from './schemas';

const getLocalData = ()=>{
    let data = localStorage.getItem('datas');
    if(data) {
        return JSON.parse(localStorage.getItem('datas'));
    }else{
        return [];
    }
}

const TodoList = () => {
    const [item, setItem]= useState(getLocalData());
    // const [isEditData, setIsEditData] = useState(null);

    const initialValues = {
        name: "",
        email : "",
        password : "",
        confirmpassword : ""
    }

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues : initialValues,
        validationSchema : signUpSchema,
        onSubmit : (values, action) =>{
            // console.log(values);
            action.resetForm();
        }
    })
    const addData = ()=>{
        // let Data = `values.name === "" || values.email === "" || values.password === "" || values.confirmpassword !== values.password`;
    
        if(values.name === "" || values.email === "" || values.password === "" || values.confirmpassword !== values.password){
        // if(Data){   
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

    const editData = (ind)=>{
        let newEditItem = item.find((ele)=>{
            return ele.id === ind
        });
        console.log(newEditItem);
        setItem(newEditItem);
    }

    useEffect(() => {
        localStorage.setItem("datas", JSON.stringify(item));
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
            <button type="submit" className="btn btn-primary" onClick={addData}>Submit</button> &nbsp; &nbsp;
            <button type="submit" className="btn btn-primary" onClick={addData}>Update</button>
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
                                        <button type="button" className="btn btn-primary" onClick={()=>{editData(ind)}}>Edit</button>
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

export default TodoList