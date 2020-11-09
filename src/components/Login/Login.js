import React, {useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../App';
import NavBar from '../HomePage/NavBar/NavBar';

const Login = () => {
    useEffect(()=>{
            var currentDocumentTimestamp =
            new Date(performance.timing.domLoading).getTime();
            // Current Time //
            var now = Date.now();
            // Ten Seconds //
            var tenSec = 10 * 1000;
            // Plus Ten Seconds //
            var plusTenSec = currentDocumentTimestamp + tenSec;
            if (now > plusTenSec) {
            window.location.reload();
            } else {}
            
    },[])
   

    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    console.log("nameloginani",loggedInUser.name);
    const [newUser , setNewUser] = useState([]);
    const[user, setUser] = useState({
      usernumber: '',
      password:'',
      error:false
    });
    const history = useHistory();
    const handleClick=()=>{
        fetch('https://cors-anywhere.herokuapp.com/http://sellinbd.com/lexdiary-website/registration/login_new_user.php?usernumber='+`+88${user.usernumber}`+'&password='+user.password, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
        // We get the API response and receive data in JSON format...
        .then(response =>response.json())
        // ...then we update the users state
        .then(data =>  {
                console.log(data)
                const newUserInfo = {...user};
                newUserInfo.message=data.message;
                newUserInfo.name = data.usernumber;
                {
                    data.usernumber ? history.push("/") : history.push("/login")
                }
                {
                    data.usernumber ?  localStorage.setItem("usernumber",data.usernumber)
                    :localStorage .setItem("","")
                }
                if(data.message=="s"){
                    newUserInfo.error=false;
                }
                else{
                    newUserInfo.error=true;
                }
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
            })
        // Catch any errors we hit and update the app
        .catch(error =>{
            const newUserInfo = {...user};
            newUserInfo.message = error.message;
            newUserInfo.success=false;
            setUser(newUserInfo);
          });
    }

console.log(user);

  
   
    const handleBlur = (e) => {
          const setNewInfo = {...user};
          setNewInfo[e.target.name] = e.target.value;
          setUser(setNewInfo);
  }
    return (
        <div>
            <NavBar></NavBar>
             <div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100">
            <form class="login100-form validate-form" method="get">
                <span class="login100-form-title p-b-26">
                  <Link to="/"> <img src="/assets/img/lexdiary-logo.png" id="lexdiary-logo" height="auto" width="100px"/> </Link>
                </span>
               
                {
                    user.error && <p style={{ color:'red', paddingBottom:"30px", textAlign:"center"}}> Invalid UserName And Passowrd </p>
                  }
               
                <div class="wrap-input100 validate-input" data-validate = "Valid phone number is:  01xxxxxxxxx">
                    <label class="text-white">User Number</label> 
                    <input class="input100"  value="+88" readOnly style={{position:"absolute",color:"#0f3f70",width:"40px",padding:"0 5px",background:"white"}}></input>
                    <input class="input100" maxlength="11" minlength="11" type="text" name="usernumber" onChange={handleBlur} style={{padding:"0 50px"}}></input>
                    {/* <span class="focus-input100" data-placeholder="User Number"></span> */}
                   
                </div>

                <div class="wrap-input100 validate-input" data-validate="Enter password">
                    <label class="text-white">Password</label>
                    <input class="input100" minlength="6" type="password" name="password" onChange={handleBlur}></input>
                    {/* <span class="focus-input100" data-placeholder="Password"></span> */}
                </div>

                <div class="container-login100-form-btn">
                    <div class="wrap-login100-form-btn">
                        <div class="login100-form-bgbtn"></div>
                        <button class="login100-form-btn"    onClick={handleClick}>
                            Login
                        </button>
                    </div>
                </div>

                <div class="text-center p-t-40">
                    <span class="txt1">
                        Don’t have an account?
                    </span>

                    <Link class="txt2" to="/signup">
                        &nbsp; Sign Up
                    </Link>
                </div>
            </form>
                  {/* {
                    user.name && <> {history.push("/")} </>
                  } */}
                 
        </div>
    </div>



<div id="dropDownSelect1"></div>

{/* <div id="preloader"></div> */}
</div>

<a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
</div>
    );
};

export default Login;