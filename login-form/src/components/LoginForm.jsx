import { useState } from 'react';
import './LoginForm.css';

export function LoginForm() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  function passwordVisibilitySwitcher() {
    setIsPasswordShown(!isPasswordShown);
  }

  return (
    <>
      <div>
        <input 
          placeholder="Email" 
          className ="login-input"
        />
      </div>
      <div>
        <input 
          placeholder="Password" 
          type={isPasswordShown ? 'text' : 'password'}
          className ="login-input"
        />
        <button
          className="password-visibility-button"
          onClick={passwordVisibilitySwitcher}
        >
          {isPasswordShown ? 'Hide' : 'Show'}
        </button>
      </div>
      <button className="login-button">
        Login
      </button>
      <button className="login-button">
        Sign up
      </button>
    </>
  );
}