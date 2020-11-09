import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const [loggedInUser,setLoggedInUser] = useContext(userContext);
  // AD
  const[data1 , setData1] = useState("Criminal Appeal");
  const[data2 , setData2] = useState("Criminal Petition");
  const[data3 , setData3] = useState("Criminal Misc Petition");
  const[data4 , setData4] = useState("Criminal Review Petition");
  const[data5 , setData5] = useState("Contempt Petition");
  const[data6 , setData6] = useState("Civil Appeal");
  const[data7 , setData7] = useState("Civil Petition");
  const[data8 , setData8] = useState("Civil Misc Petition");
  const[data9 , setData9] = useState("Civil Review Petition");

 //HCD
 const[hcd1 , setHcd1] = useState("Civil Rule");
 const[hcd2 , setHcd2] = useState("Civil Revision");
 const[hcd3 , setHcd3] = useState("Civil Review Petition");
 const[hcd4 , setHcd4] = useState("Civil Order");
 const[hcd5 , setHcd5] = useState("Civil Misc Cases");
 const[hcd6 , setHcd6] = useState("Criminal Review Petition");
 const[hcd7 , setHcd7] = useState("Contempt Petition");
 const[hcd8 , setHcd8] = useState("Execute Case");
 const[hcd9 , setHcd9] = useState("Tender No");
 const[hcd10 , setHcd10] = useState("Criminal Appeal");
 const[hcd11 , setHcd11] = useState("Govt. Appeal");
 const[hcd12 , setHcd12] = useState("Death Rrefernce");
 const[hcd13 , setHcd13] = useState("Criminal revision");
 const[hcd14 , setHcd14] = useState("Criminal Misc");
 const[hcd15 , setHcd15] = useState("Criminal Rule (Con)");
 const[hcd16 , setHcd16] = useState("Criminal (Suo-Moto)");
 const[hcd17 , setHcd17] = useState("Criminal Rule (Review)");
 const[hcd18 , setHcd18] = useState("Criminal Rule");
 const[hcd19, setHcd19] = useState("Transfer Misc");
 const[hcd20 , setHcd20] = useState("Company Matter");
 const[hcd21, setHcd21] = useState("Custom Appeal");
 const[hcd22, setHcd22] = useState("Divorce Suit");
 const[hcd23, setHcd23] = useState("Income Tax Rrefernce");
 const[hcd24, setHcd24] = useState("Trademark Appeal");
 const[hcd25, setHcd25] = useState("Trademark Application");
 const[hcd26, setHcd26] = useState("Vat Appeal");
 const[hcd27, setHcd27] = useState("Admiralty Suit");
 const[hcd28, setHcd28] = useState("Arbitration Appeal");
 const[hcd29, setHcd29] = useState("Suo-Moto (Original)");
 const[hcd30, setHcd30] = useState("Execution Case");
 const[hcd31, setHcd31] = useState("Violation Misc Petition");
 const[hcd32, setHcd32] = useState("Contempt Petition");
 const[hcd33, setHcd33] = useState("Copy Right Appeal");
 const[hcd34, setHcd34] = useState("First Appeal");
 const[hcd35, setHcd35] = useState("First Misc Appeal");
 const[hcd36, setHcd36] = useState("Divorce Suit");
 const[hcd37, setHcd37] = useState("First Appeal Tender");
 const[hcd38, setHcd38] = useState("First misc Appeal Tender");
 const[hcd39, setHcd39] = useState("Trademark Application");
 const[hcd40, setHcd40] = useState("Transfer Misc Case");
 const[hcd41, setHcd41] = useState("Civil Rule (F.A)");
 const[hcd42, setHcd42] = useState("Civil Rule (F.M.A)");
 const[hcd43, setHcd43] = useState("Cross Objection");
 const[hcd44, setHcd44] = useState("Writ Petition");
 const[hcd45, setHcd45] = useState("Contempt Petition (Writ)");
 const[hcd46, setHcd46] = useState("Suo-Moro (Writ)");
 const[hcd47, setHcd47] = useState("Transfer Petition");
 const[hcd48, setHcd48] = useState("First misc Appeal Tender");
 const[hcd49, setHcd49] = useState("Reference Application");
 const[hcd50, setHcd50] = useState("Rule (Writ");


  const history = useHistory();
  let localData = localStorage.getItem('usernumber'); 
  const logout =() =>{
    localStorage.removeItem('usernumber');
    setLoggedInUser({});
    }
  
    return (
        <div>
             <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">

      <h1 className="logo mr-auto"><Link to="/"><img src="../assets/img/logo.png"/></Link></h1>
      

      <nav className="nav-menu d-none d-lg-block">
       
        <ul>
        {
            
            loggedInUser.name || localData ? <>   <li className="active"><Link to="/">Home</Link></li>
            <li className="drop-down"><Link to="">Add Case</Link>
              <ul>
                <li className="drop-down"><Link to="#">Appellate Division Case</Link>
                  <ul>
                    <li className="drop-down"><Link to="#">Criminal Cases</Link>
                      <ul>
                        <li><a href={"/form/"+data1}>Criminal Appeal</a></li>
                        <li><a href={"/form/"+data2}>Criminal Petition</a></li>
                        <li><a href={"/form/"+data3}>Criminal Misc Petition</a></li>
                        <li><a href={"/form/"+data4}>Criminal Review Petition</a></li>
                        
                      </ul>
                    </li>
                    <li><a href={"/form/"+data5}>Contempt Petition</a></li>
                    <li className="drop-down"><Link to="#">Civil Cases</Link>
                      <ul>
                        <li><a href={"/form/"+data6}>Civil Appeal</a></li>
                        <li><a href={"/form/"+data7}>Civil Petition</a></li>
                        <li><a href={"/form/"+data8}>Civil Misc Petition</a></li>
                        <li><a href={"/form/"+data9}>Civil Review Petition</a></li>
                        
                      </ul>
                    </li>
                   
                  </ul>
                </li>
                <li className="drop-down"><Link to="#">High Court Division Case</Link>
                  <ul>
                     <li className="drop-down"><Link to="#">Criminal Revision</Link>
                      <ul>
                        <li><a href={"/hcdform/"+hcd1}>Civil Rule</a></li>
                        <li><a href={"/hcdform/"+hcd2}>Civil Revision</a></li>
                        <li><a href={"/hcdform/"+hcd3}>Civil Review Petition</a></li>
                        <li><a href={"/hcdform/"+hcd4}>Civil Order</a></li>
                        <li><a href={"/hcdform/"+hcd5}>Civil Misc Cases</a></li>
                        <li><a href={"/hcdform/"+hcd6}>Criminal Review Petition</a></li>
                        <li><a href={"/hcdform/"+hcd7}>Contempt Petition</a></li>
                        <li><a href={"/hcdform/"+hcd8}>Execute Case</a></li>
                        
                      </ul>
                    </li>
                    <li className="drop-down"><Link to="#" >Criminal Cases</Link>
                      <ul>
                        <li><a href={"/hcdform/"+hcd9}>Tender No</a></li>
                        <li><a href={"/hcdform/"+hcd10}>Criminal Appeal</a></li>
                        <li><a href={"/hcdform/"+hcd11}>Govt. Appeal</a></li>
                        <li><a href={"/hcdform/"+hcd12}>Death Rrefernce</a></li>
                        <li><a href={"/hcdform/"+hcd13}>Criminal revision</a></li>
                        <li><a href={"/hcdform/"+hcd14}>Criminal Misc</a></li>
                        <li><a href={"/hcdform/"+hcd15}>Criminal Rule (Con)</a></li>
                        <li><a href={"/hcdform/"+hcd16}>Criminal (Suo-Moto)</a></li>
                        <li><a href={"/hcdform/"+hcd17}>Criminal Rule (Review)</a></li>
                        <li><a href={"/hcdform/"+hcd18}>Criminal Rule</a></li>
                        <li><a href={"/hcdform/"+hcd19}>Transfer Misc</a></li>
                        
                      </ul>
                    </li>
                    <li className="drop-down"><Link to="#" >Original Cases</Link>
                      <ul>
                        <li><a href={"/hcdforms/"+hcd20}>Company Matter</a></li>
                        <li><a href={"/hcdforms/"+hcd21}>Custom Appeal</a></li>
                        <li><a href={"/hcdforms/"+hcd22}>Divorce Suit</a></li>
                        <li><a href={"/hcdforms/"+hcd23}>Income Tax Rrefernce</a></li>
                        <li><a href={"/hcdforms/"+hcd24}>Trademark Appeal</a></li>
                        <li><a href={"/hcdforms/"+hcd25}>Trademark Application</a></li>
                        <li><a href={"/hcdforms/"+hcd26}>Vat Appeal</a></li>
                        <li><a href={"/hcdforms/"+hcd27}>Admiralty Suit</a></li>
                        <li><a href={"/hcdforms/"+hcd28}>Arbitration Appeal</a></li>
                        <li><a href={"/hcdforms/"+hcd29}>Suo-Moto (Original)</a></li>
                        <li><a href={"/hcdforms/"+hcd30}>Execution Case</a></li>
                        <li><a href={"/hcdforms/"+hcd31}>Violation Misc Petition</a></li>
                        <li><a href={"/hcdforms/"+hcd32}>Contempt Petition</a></li>
                        <li><a href={"/hcdforms/"+hcd33}>Copy Right Appeal</a></li>
                        
                      </ul>
                    
                    </li>
                    <li className="drop-down"><Link to="#">Civil Appeal</Link>
                      <ul>
                        <li><a a={"/hcdform/"+hcd34}>First Appeal</a></li>
                        <li><a a={"/hcdform/"+hcd35}>First Misc Appeal</a></li>
                        <li><a a={"/hcdform/"+hcd36}>Divorce Suit</a></li>
                        <li><a a={"/hcdform/"+hcd37}>First Appeal Tender</a></li>
                        <li><a a={"/hcdform/"+hcd38}>First misc Appeal Tender</a></li>
                        <li><a a={"/hcdform/"+hcd39}>Trademark Application</a></li>
                        <li><a a={"/hcdform/"+hcd40}>Transfer Misc Case</a></li>
                        <li><a a={"/hcdform/"+hcd41}>Civil Rule (F.A)</a></li>
                        <li><a a={"/hcdform/"+hcd42}>Civil Rule (F.M.A)</a></li>
                        <li><a a={"/hcdform/"+hcd43}>Cross Objection</a></li>
                        
                      </ul>
                    </li>
                    <li className="drop-down"><Link to="#">Writ</Link>
                      <ul>
                        <li><a href={"/hcdforms/"+hcd44}>Writ Petition</a></li>
                        <li><a href={"/hcdforms/"+hcd45}>Contempt Petition (Writ)</a></li>
                        <li><a href={"/hcdforms/"+hcd46}>Suo-Moro (Writ)</a></li>
                        <li><a href={"/hcdforms/"+hcd47}>Transfer Petition</a></li>
                        <li><a href={"/hcdforms/"+hcd48}>First misc Appeal Tender</a></li>
                        <li><a href={"/hcdforms/"+hcd49}>Reference Application</a></li>
                        <li><a href={"/hcdforms/"+hcd50}>Rule (Writ)</a></li>
                       
                      </ul>
                    
                    </li>
                  </ul>
                </li>
                <li><Link to="/jcdform">Judge Court Case</Link></li>
  
                </ul>
                </li>
            <li><Link to="#">Buy Lawyer's Accessories</Link></li></> : <li><a href="#"></a></li>
          }
          {loggedInUser.name || localData ?
            <li><Link to="/lawyerslink">Lawyer's Link</Link></li> : <li><a href="#"></a></li>
          }
          
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
         
       
          {
            
            loggedInUser.name || localData ?  <li><Link onClick={logout}>Logout</Link></li> : <li><a href="/login">Login</a></li>
          }
         
        </ul>
      </nav>
      {
            loggedInUser.name || localData ? <Link to="/Profile/Edit" className="get-started-btn" ><i className="fa fa-user"></i>  Profile  </Link>   :  <li><a href="#"></a></li>
       }

    </div>
  </header>
        </div>
    );
};

export default NavBar;