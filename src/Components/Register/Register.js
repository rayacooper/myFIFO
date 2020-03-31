import React, {useState} from 'react';
import './Register.css'
import NavBar from './../NavBar/NavBar';

const Register = () => {

    const [userEmail, updateUserEmail] = useState('');
    const [userPassword, updateUserPassword] = useState('');
    const [userPasswordRepeat, updateUserPasswordRepeat] = useState('')

    return (
        <div className="RegisterMain">
            <NavBar />
            <div className="RegisterInner">
                <input type='text' placeholder='email' onChange={(event) => updateUserEmail(event.target.value)}/>
                <input type='text' placeholder='password'/>
                <input type='text' placeholder='re-type password'/>
                <br />
                <button onClick={() => console.log(userEmail)}>Register</button>
            </div>
        </div>
    )
}

export default Register;