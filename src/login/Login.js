import React from 'react';
import './Login.css'

function Login() {
    return(
        <div className='login'>
            <form className='loginArea'>
                <label className='loginAC'>
                    Account:
                    <input name='accout' type='text'/>
                </label>
                <label>
                    Password:
                    <input name='password' type='text'/>
                </label>
                <div className='LoginBtn'>
                    <button type='button'>Register</button>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;