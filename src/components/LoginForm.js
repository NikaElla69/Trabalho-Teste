import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password.length >= 8) {
            onLogin(email);
        } else {
            alert('Please enter a valid email and password with at least 8 characters.');
        }
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div>
                <text className='text'>Faça o seu login</text>
            </div>
            <div>
                <label>Nome de Usuário:</label>
                <input type='text' />

            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Senha:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className='button' >Login</button>
        </form>
    );
}

export default LoginForm;
