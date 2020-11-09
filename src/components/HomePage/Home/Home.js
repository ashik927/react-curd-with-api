import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeWithOutlogin from '../HomeWithOutLogin/HomeWithOutlogin';
import NavBar from '../NavBar/NavBar';
import RunningItem from '../RunningItem/RunningItem';
import Loader from 'react-spinner-loader';
import Page from 'react-page-loading'

const Home = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    let localData = localStorage.getItem('usernumber'); 
    const [loader, setLoader] = useState(true);

    // useEffect(()=>{
    //     var currentDocumentTimestamp =
    //     new Date(performance.timing.domLoading).getTime();
    //     // Current Time //
    //     var now = Date.now();
    //     // Ten Seconds //
    //     var tenSec = 10 * 1000;
    //     // Plus Ten Seconds //
    //     var plusTenSec = currentDocumentTimestamp + tenSec;
    //     if (now > plusTenSec) {
    //     window.location.reload();
    //     } else {}
        
    //   },[])

    return (
       <div>
         
            <NavBar></NavBar>
            <Header></Header>
             <Page loader={"bar"} color={"#A9A9A9"} size={8} duration={3}>

            {
            
            loggedInUser.name || localData ?   <RunningItem></RunningItem> :  <HomeWithOutlogin></HomeWithOutlogin>
            
          }
          </Page>
           
           
            <Footer></Footer>
       </div>
    );
};

export default Home;