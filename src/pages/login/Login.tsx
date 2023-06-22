import React from "react";
import "./Login.scss";
import SimpleCard from "../../components/Signup/Signup";
import HoverCard from "../../components/HoverCard/HoverCard";
import LoginCard from "../../components/Login/Login";
import SignupCard from "../../components/Signup/Signup";
import { IMAGES } from "../../assets/images/images";

const Login = () => {
  return (
    <div>
      <div id='blob' className='blob'></div>

      <div className='main-container'>
        <div className='lf-container'>
          <HoverCard />
        </div>
        <div className='rg-container'>
          <SignupCard />
        </div>
      </div>
    </div>
  );
};
export default Login;
