import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }


    return (
        <div className='auth-form-container'>
            <h1>Register</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlfor='name'>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='enter name' id='name' name='name'></input>

                <label htmlfor='email'>email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='enter email' id='email' name='email'></input>
                <label htmlfor='password'>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='enter password' id='password' name='password'></input>

                <button type='submit'>register</button>
            </form>
            <Link to='/'  >Already have an account?Login</Link>
        </div>

    )
}

export default Register