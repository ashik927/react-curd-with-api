import React, { useEffect, useState } from 'react';
import Footer from '../HomePage/Footer/Footer';
import NavBar from '../HomePage/NavBar/NavBar';
import TotalAd from './TotalAd';
import Page from 'react-page-loading';

const TodaySearchListAd = () => {
  const [info , setInfo] = useState({});
  const [success , setSuccess] = useState(false);
  const [infoAd , setInfoAd] = useState([]);
  console.log("info",infoAd);
  let localData = localStorage .getItem('usernumber');

 console.log(localData);
  const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
}

useEffect(()=>{
  const formData = new FormData();
  formData.append('usernumber', localData);
  fetch('http://sellinbd.com/lexdiary/searchlist/readSearchlistADCurrentDate.php?usernumber='+localData, {
        method: 'POST',
        body: formData
       })
  .then(res => {
    if (res.status == 200 ) {
      setSuccess(true)
      res.json()
      .then(result=> setInfoAd(result.records))
  }
 
  })
 
  .catch(error => {
    console.error(error)
  })
},[])

    const handleSubmitAd=(e) => {
      alert.show(`your serach date is ,${info.dated}`)
      e.preventDefault();
      const formData = new FormData();
      formData.append('usernumber', localData);
      fetch('http://sellinbd.com/lexdiary-website/searchlist/readSearchlistAD.php?usernumber='+`${localData}`+'&dated='+info.dated, {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.status == 200 ) {
          setSuccess(true);
          response.json()
          .then(data => {
            setInfoAd(data.records)
          })
      }
     
      })
      .catch(error => {
        console.error(error)
      })
    }

    return (
      <div>
        <NavBar></NavBar>
             <main id="main" >


<div class="container" data-aos="fade-up" style={{marginTop: "5%", marginBottom: "5%"}}>
 <h4 class="text-center" style={{marginBottom: "50px",marginTop: "100px"}}>Today Search List (Appellate Division)</h4>
 <hr/>
 <div class="row" data-aos="zoom-in" data-aos-delay="100">
   <div class="col-lg-12 col-md-12 mt-md-0">
     <form onSubmit={handleSubmitAd}>
         <div class="text-center">
       <label><b>Date:&nbsp;&nbsp;</b></label>
       <input data-provide="datepicker"  onBlur={handleBlur} name="dated" />
       <button  style={{background: "transparent", borderRadius: "0", border:"0.5px solid #0f3f70", color: "whitesmoke",backgroundColor: "#0f3f70",margin: "0"}}>Search <i class="fa fa-search"></i></button>
     </div>
     </form>
   
     <Page loader={"bar"} color={"#A9A9A9"} size={8} >
       {
         success ?
         <table id="myTable" class="display col-md-12">
           <thead>
               <tr>
              <th>Search List dated:{info.dated}</th>
                   
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td>
                     <div class="row">
                     {
                      infoAd.map(searchAd => <TotalAd searchAd={searchAd} ></TotalAd>)
                      
                    }
                     </div>
                   </td>
                 
               </tr>
               {/* <tr>
                   <td>
                       <div class="row">
                           <div class="col-md-4">
                             <p style={{fontSize: "14px",color:"black"}}>
                               <b>Case No:</b><br/>
                               <b>Item No:</b><br/>
                               <b>Case Type: </b><br/>
                               <b>Case Name:</b><br/>
                               </p>
                           </div>
                           <div class="col-md-4 text-center">
                             <p style={{fontSize: "14px",color:"black"}}>
                             
                               Party A <br/>
                               VS<br/>
                               Party B
                               </p>
                           </div>
                           <div class="col-md-4">
                             <p style={{fontSize: "14px",color:"black"}}>
                             <b>On behalf of:</b><br/>
                             <b>Fixed for:</b><br/>
                             <b>Client Name:</b><br/>
                             <b>Client Number:</b> <br/>
                             </p>
                           </div>
                       </div>
                   </td>
                  
               </tr> */}
           </tbody>
       </table>:
            <h1 style={{color:"red", textAlign: "center"}}> No Cases</h1>       
       }
       </Page>
   </div>
   </div>


</div>





</main>
<Footer></Footer>
</div>
    );
};

export default TodaySearchListAd;