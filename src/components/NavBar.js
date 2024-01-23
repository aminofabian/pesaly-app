import React, { useState } from 'react';

export default function NavBar() {
  const [loginButtonColor, setLoginButtonColor] = useState('light');
  const [registerButtonColor, setRegisterButtonColor] = useState('primary');

  const handleLoginClick = () => {
    setLoginButtonColor('primary');
    setRegisterButtonColor('light');
  };

  const handleRegisterClick = () => {
    setRegisterButtonColor('primary');
    setLoginButtonColor('light');
  };

  return ( 
    <nav className="navbar custom-navbar">
      <span>
        <img src='/pessaly.png' className="navbar-logo" alt="Logo" />
      </span>
      <div className="navbar-buttons">
        <button
          className={`btn btn-${loginButtonColor} custom-btn`}
          onClick={handleLoginClick}
        >
          <i>Login</i>
        </button>
        <button
          className={`btn btn-${registerButtonColor} custom-btn`}
          onClick={handleRegisterClick}
        >
          <i>Register</i>
        </button>
      </div>
    </nav>
  );
}
