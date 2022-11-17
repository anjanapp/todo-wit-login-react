import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {

    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };

   return (
        <div className='auth-form-container'>
            <pre>{JSON.stringify(formValues,undefined,2)}</pre>
            <h1>Login</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <label>Username</label>
                <input  type='text' name='username' placeholder='enter username' value={formValues.username} onChange={handleChange}/>
                <p>{formErrors.username}</p> 
                <label>email</label>
                <input type='email' name='email' placeholder='enter email' value={formValues.email} onChange={handleChange}/>
                <p>{formErrors.email}</p> 
                <label>Password</label>
                <input type='password' name='password' placeholder='enter password' value={formValues.password} onChange={handleChange}/>
                <p>{formErrors.password}</p> 
                <Link to='/dashboard'>
                    <button type='submit'>Log In</button>

                </Link>
            </form>
            <Link to='/register' >Dont have an account?Register</Link>
        </div>
    )
}

export default Login