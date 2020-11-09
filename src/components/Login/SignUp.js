import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../HomePage/NavBar/NavBar';

const SignUp = () => {
    return (
        <div>
            <div>
            <NavBar></NavBar>
             <div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100">
            <form class="login100-form validate-form" method="get">
                <span class="login100-form-title p-b-26">
                  <Link to="/"> <img src="/assets/img/lexdiary-logo.png" id="lexdiary-logo" height="auto" width="100px"/> </Link>
                </span>
                <div class="wrap-input100 validate-input" data-validate = "Please Input User Name">
                    <input class="input100" type="text" name="username" ></input>
                    <span class="focus-input100" data-placeholder="User Name"></span>
                </div>

                <div class="wrap-input100 validate-input" data-validate = "Valid phone number is: +880 01xxxxxxxxx">
                    <input class="input100" type="text" name="usernumber" ></input>
                    <span class="focus-input100" data-placeholder="User Number"></span>
                </div>

                <div class="wrap-input100 validate-input" data-validate="Enter password">
                    
                    <input class="input100" type="password" name="pass" ></input>
                    <span class="focus-input100" data-placeholder="Password"></span>
                </div>

                <div class="container-login100-form-btn">
                    <div class="wrap-login100-form-btn">
                        <div class="login100-form-bgbtn"></div>
                        <button class="login100-form-btn" >
                            Registration
                        </button>
                    </div>
                </div>

                <div class="text-center p-t-60">
                    <span class="txt1">
                        Existing Account?   <br/>
                    </span>

                    <Link class="txt2" to="/login">
                        Sign In
                    </Link>
                </div>
            </form>
                 
        </div>
    </div>



<div id="dropDownSelect1"></div>

{/* <div id="preloader"></div> */}
</div>

<a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
        </div>
    );
};

export default SignUp;