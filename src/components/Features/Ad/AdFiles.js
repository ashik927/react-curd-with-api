import React, { useEffect, useState } from 'react';
import Footer from '../../HomePage/Footer/Footer';
import NavBar from '../../HomePage/NavBar/NavBar';
import AdTable from './AdTable';

const AdFiles = () => {
    let localData = localStorage .getItem('usernumber');
    const [infoAd , setInfoAd] = useState([]);
    useEffect(()=>{
        const formData = new FormData();
        formData.append('usernumber', localData);
        fetch('https://sellinbd.com/lexdiary-website/searchlist/readCasesAD.php?usernumber='+localData, {
              method: 'POST',
              body: formData
             })
        .then(res => res.json())
        .then(result=> setInfoAd(result.records))
      
      },[])

    return (
        <div>
            <NavBar></NavBar>
            <main id="main">

<div class="container" data-aos="fade-up" style={{marginTop: "5%", marginBottom: "5%"}}>
 <h4 class="text-center" style={{marginBottom: "50px",marginTop: "80px"}}>Chamber Case File (Appellate Division)</h4>
 <div class="row" data-aos="zoom-in" data-aos-delay="100">
   <div class="col-lg-12 col-md-12 mt-md-0">
   
       <table id="myTable" class="display ">
           {infoAd.length}
           <thead>
               <tr>
                   <th>Chamber File List</th>
                   <th>Action</th>
                   
               </tr>
           </thead>
           <tbody >
           <tr class="col-md-12">
               {
                      infoAd.map(totalAd => <AdTable totalAd={totalAd} ></AdTable>)
              }
              </tr>
           </tbody>
       </table>
   </div>
   </div>
 </div>







</main>
<Footer></Footer>
</div>
    );
};

export default AdFiles;