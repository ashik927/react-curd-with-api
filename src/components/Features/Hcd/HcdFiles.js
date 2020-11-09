import React, { useEffect, useState } from 'react';
import Footer from '../../HomePage/Footer/Footer';
import NavBar from '../../HomePage/NavBar/NavBar';
import AdTable from './HcdTable';

const HcdFiles = () => {
    let localData = localStorage .getItem('usernumber');
    const [infoHcd , setInfoHcd] = useState([]);
    useEffect(()=>{
        const formData = new FormData();
        formData.append('usernumber', localData);
        fetch('http://sellinbd.com/lexdiary/searchlist/readCases.php?usernumber='+localData, {
              method: 'POST',
              body: formData
             })
        .then(res => res.json())
        .then(result=> setInfoHcd(result.records))
      
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
           {infoHcd.length}
           <thead>
               <tr>
                   <th>Chamber File List</th>
                   <th>Action</th>
                   
               </tr>
           </thead>
           <tbody >
           <tr class="col-md-12">
               {
                      infoHcd.map(totalHcd => <AdTable totalHcd={totalHcd} ></AdTable>)
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

export default HcdFiles;