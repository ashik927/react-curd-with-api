import React, { useEffect, useState } from 'react';
import TotalHcd from './TotalHcd';
import Footer from '../HomePage/Footer/Footer';
import NavBar from '../HomePage/NavBar/NavBar';

const TodaySearchListHcd = () => {
    const [info , setInfo] = useState({});
    const [success , setSuccess] = useState(false);
    const [infoHcd , setInfoHcd] = useState([]);
    const [dateHcd , setDateHcd] = useState([]);
    let localData = localStorage .getItem('usernumber');
    const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
}
  console.log(infoHcd);
    useEffect(()=>{
        const formData = new FormData();
        formData.append('usernumber', localData);
        fetch('http://sellinbd.com/lexdiary-website/searchlist/readtestSlCurrentdate.php?usernumber='+localData, {
              method: 'POST',
              body: formData
             })
        .then(res => {
          if (res.status == 200 ) {
           setSuccess(true)
            res.json() 
            .then(result=> setInfoHcd(result))
        }
        })
       
        .catch(error => {
          console.error("error",error)
        })
      },[])

      const handleSubmitHcd=(e) => {
        alert(`your serach date is ,${info.dated}`)
      e.preventDefault();
      const formData = new FormData();
      formData.append('usernumber', localData);
      formData.append('dated', info.dated);
      fetch('http://sellinbd.com/lexdiary-website/searchlist/readtestSl.php?usernumber='+`${localData}`+'&dated='+info.dated, {
        method: 'POST',
        body: formData
      })
      .then(res => {
      return res.json();
      })
      .then(data => {
        setInfoHcd(data.records)
        setSuccess(true);
      })
      .catch(error => {
        console.error("error",error)
      })
    }
    return (
        <div>

          <NavBar></NavBar>
            <main id="main">


<div class="container" data-aos="fade-up" style={{marginTop: "5%", marginBottom: "5%"}}>
 <h4 class="text-center" style={{marginBottom: "50px",marginTop: "80px"}}>Today Search List (High Court Division)</h4>
 <div class="row" data-aos="zoom-in" data-aos-delay="100">
   <div class="col-lg-12 col-md-12 mt-md-0">
     <form onSubmit={handleSubmitHcd}>
       <div class="text-center">
     <label><b>Date:&nbsp;&nbsp;</b></label>
     <input data-provide="datepicker"  onBlur={handleBlur} name="dated" />
     <button type="submit" class="btn btn-primary" style={{background: "transparent", borderRadius: "0", border:"0.5px solid #0f3f70", color: "whitesmoke",backgroundColor: "#0f3f70",marginLeft: "10px"}}>Search <i class="fa fa-search"></i></button>
   </div>
   </form>
       {
         success ?
         <table id="myTable" class="display col-md-12">
           <thead>
               <tr>
              <th> Total Cases {infoHcd.length}</th>
               
               </tr>
           </thead>
           <tbody>
           <tr>
                   <td>
                     <div class="row">
                    
                     {
                      infoHcd.map(searchHcd => <TotalHcd searchHcd={searchHcd} key={localData}></TotalHcd>)
                    }
                    
                     </div>
                   </td>
                 
               </tr>
                    
               {/* <tr>
                   <td>
                       <div class="row">
                           <div class="col-md-4">
                             <p style={{fontSize: "14px", color:"black"}}>
                               <b>Case No:</b><br/>
                               <b>Item No:</b><br/>
                               <b>Case Type: </b><br/>
                               <b>Case Name:</b><br/>
                               </p>
                           </div>
                           <div class="col-md-4">
                             <p style={{fontSize: "14px", color:"black"}}>
                               Party A <br/>
                               VS<br/>
                               Party B
                               </p>
                           </div>
                           <div class="col-md-4">
                             <p style={{fontSize: "14px", color:"black"}}>
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
       </table>
       :
       <h1 style={{color:"red", textAlign: "center"}}> No Cases</h1>
       }
   </div>
   </div>
 </div>







</main>
<Footer></Footer>
</div>
    );
};

export default TodaySearchListHcd;