import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";
import './home.css';
import MyImage from './svgs/user-optimized.svg';
import MyImage0 from './svgs/pass-optimized.svg';
import MyImage1 from './svgs/open-eye-optimized.svg';
import MyImage2 from './svgs/close-eye-optimized.svg';

const LogIn = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {setShow(!show);togglePassword()}
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(true);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    navigate("/dashboard");
  }
  return (
    <div className="flex-container">
      <div className="flex-items beauty">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">

            <span className='icon-left'>
              <img role={'img'} style={{ width: '20px' }} src={MyImage} />
            </span>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <br />
          <div className="input-group">

            <span className='icon-left'>
              <img role={'img'} style={{ width: '16px' }} src={MyImage0} />
            </span>
            <input type={passwordShown ? "password" : "text"} name="password" />
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
          <button type="submit" className='button button1'>Submit</button>

        </form>
      </div >
    </div >
  );
};

export default LogIn;