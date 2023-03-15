import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../config";
import './home.css';
import MyImage from './svgs/user-optimized.svg';
import MyImage0 from './svgs/pass-optimized.svg';
import MyImage1 from './svgs/open-eye-optimized.svg';
import MyImage2 from './svgs/close-eye-optimized.svg';

const regex = /@visionx\.com$/;

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [passwordShown, setPasswordShown] = useState(true);
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
    navigate("/dashboard");
  }

  const handleClick = () => { setShow(!show); togglePassword() }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };


  const handleChange = (event) => {
    const { value } = event.target
    setEmail(value);

    console.log(value, regex.test(value))
    if (!regex.test(value)) {
      setError('It needs to ends with @visionx.com');
    } else {
      setError('');
    }

  };


  return (
    <div className="flex-container">
      <div className="flex-items beauty">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className='icon-left'>
              <img role={'img'} style={{ width: '20px' }} src={MyImage} />
            </span>
            <input type="email" value={email} name="email" placeholder="Email" onChange={handleChange} />
          </div>
          <div >{error}</div>
          <br />
          <div className="input-group">

            <span className='icon-left'>
              <img role={'img'} style={{ width: '16px' }} src={MyImage0} />
            </span>
            <input type={passwordShown ? "password" : "text"} name="password" placeholder="Password" />
            <span className='icon-right'>
              {show ?
                <img role={'img'} style={{ width: '20px' }} src={MyImage1} onClick={handleClick} />
                :
                <img role={'img'} style={{ width: '20px', paddingTop: '4px' }} src={MyImage2} onClick={handleClick} />
              }
              {/* <img role={'img'} style={{width:'18px'}} src={MyImage1} /> */}
            </span>
          </div>
          <br />
          <button className={error==='' ? "button button1 " : "button  disabled"} disabled={error==='' ? false : true} type="submit">Submit</button>
        </form>
      </div>
    </div>


  );
};

export default SignUp;