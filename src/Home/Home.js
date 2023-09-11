import React from 'react'

import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const UserValidation = (username, password) => {

        if(username === 'validUser' && password ==='validPassword') {
            return true;
        }
        else{
            return false
        }
    }

   const navigate = useNavigate();

    const hamdleSubmit = (e) =>{
        e.preventDefault();
        
            const isValid = UserValidation(username, password);

        navigate("/success")

        // if(isValid) {
        //     navigate("/s")
        // }
        // else {
        //     alert( "Credentials are invalid ! Please try again");
        // }
    } 

  return (
    <div className='user__login'>
        <form onSubmit={hamdleSubmit}>
        <div className='user__login-form'>
        <label ><p>Username:</p></label>
            <input type='UserName' id='UserName' name='UserName' required value={username} onChange={(e) => setUsername(e.target.value)} />
            <label><p>Password:</p></label>
            <input type='password' id='password' name='password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className='user__submit-btn'> 
            <button type='submit'>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default Home