import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import bg1 from '../bg-1.jpg';
import bg2 from '../onboarding.png';
import bg3 from '../onboard.png';

function PasswordInput({ value, onChange }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="password-input-wrapper">
            <input
                className="form-control password-input"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={value}
                onChange={onChange}
            />
            <div className="password-toggle" onClick={handleTogglePassword}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </div>
        </div>
    );
}

function LoginForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [agreed, setAgreed] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission or validation logic here
    };

    return (
        <div className="register-photo">
            <div className="form-container">
                {/* <div className="image-holder" style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}> */}
                <div className="image-holder">
                    <img src={bg2} alt="" />
                    <div className='alignbtn-ezra'>
                        <p className='ezra-logo'>
                            ezra
                        </p>
                        <button className='ezra-btn'>Contact us</button>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <h2 className="text-center">
                        <strong>Log in</strong> your account
                    </h2>
                    <p className='login-para'>Welcome back! Please enter your details.</p>
                    <div className="form-group">
                        <label htmlFor="name" className='login-label'>Name:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className='login-label'>Email:</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className='login-label'>Password:</label>
                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className='login-label'>Re-Enter Password:</label>
                        <input
                            className="form-control"
                            type="password"
                            name="password-repeat"
                            placeholder="Password (repeat)"
                            value={passwordRepeat}
                            onChange={(e) => setPasswordRepeat(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <label className="form-check-label">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                />
                                I agree to the license terms.
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">
                            Sign Up
                        </button>
                    </div>
                    <a href="#" className="already">
                        You already have an account? Login here.
                    </a>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
