import React, { useContext, useEffect, useState } from 'react';
import Feature from '../Feature/Feature';
import HcdModal from './HcdModal'
import RunningHcd from './RunningHcd'
import RunningAd from './RunningAd'
import Page from 'react-page-loading'

const RunningItem = () => {
  const [readview , setReadView]= useState([]);
  const [runningHcd , setrunningHcd]= useState([]);
  const [runningAd , setrunningAd]= useState([]);

  console.log("readview",readview);
  console.log("runningHcd",runningHcd);
  console.log("runningAd",runningAd);


  useEffect(()=>{
    fetch('http://sellinbd.com/lexdiary-website/runningitem/readViewHCD.php')
    .then(res => res.json())
    .then(result=> setReadView(result))

},[])

 useEffect(()=>{
    fetch('http://sellinbd.com/lexdiary/runningitem/readHCDuser.php')
    .then(res => res.json())
    .then(result=> setrunningHcd([result]))

},[])

 useEffect(()=>{
    fetch('http://sellinbd.com/lexdiary/runningitem/readADuser.php')
    .then(res => res.json())
    .then(result=> setrunningAd([result]))

},[])

    return (
             <main id="main">
     <p style={{textAlign: "center",fontWeight: "bold",marginTop: "2%" , color:"#000333" }}>Running Item in Appellate Division</p>
    <div class="marquee">
      {/* <marquee id="marqueeText" style={{marginTop:"10px" , }}></marquee> */}
      {
        runningAd.map(runAd => <RunningAd runAd={runAd}></RunningAd>)
      }
    </div>
    <p style={{textAlign: "center",fontWeight: "bold",marginTop:"1%", color:"#000333"}}>Running Item in High Court Division<button class="btn btn-pressed" style={{borderRadius: "25px",padding: "5px 15px"}} data-toggle="modal" data-target="#viewAllHCD"> View All </button></p>
    <div class="marquee">
      {/* <marquee id="marqueeText1" style={{marginTop:"10px"}}></marquee> */}
      {
        runningHcd.map(runHcd => <RunningHcd runHcd={runHcd}></RunningHcd>)
      }
    </div>

    {/* <!-- View All Running Item HCD Modal --> */}
<div class="modal fade" id="viewAllHCD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" style={{zIndex: "9999"}}>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">View All Running Item - HCD</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
    <p class="text-center" style={{color:"black"}}> <b >Date : {new Date().toLocaleString()}</b></p>
        <div class="table-responsive">
          <table class="table">
              <thead>
                  <tr>
                    {/* <th style={{width:"10%"}} scope="col">SL.</th> */}
                    <th style={{width:"30%"}} scope="col">Court No.</th>
                    <th style={{width:"50%"}} scope="col">Item No.</th>
                    <th style={{width:"25%"}} scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {
                        readview.map(view => <HcdModal view={view}></HcdModal>)
                  }
                </tbody>
          </table>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>

</div>
   <Feature></Feature>

  
  </main>
    );
};

export default RunningItem;