import React from 'react';

const TotalAd = (props) => {
    const {court , sl , casetype, c_name, c_number, caseno, fileno, fix, onbehalf, parties,message} = props.searchAd;
    return (
        <>
        {
          message ?  <p class="text-danger">{message}</p>  :
          <>
          <div class="col-md-4">
          <p style={{fontSize: "14px", color:"black"}}>
            <b>Case No:{caseno}</b><br/>
            <b>Item No:{sl}</b><br/>
            <b>Case Type:{casetype} </b><br/>
            <b>Case Name:</b><br/>
            <b>District:</b><br/>
          </p>
            
        </div>
        <div class="col-md-4 text-center">
          <p style={{fontSize: "14px",color:"black"}}>
            
            {/* Party A <br/>
            VS<br/>
            Party B */}
            {parties}
            </p>
        </div>
        <div class="col-md-4">
          <p style={{fontSize: "14px" , color:"black"}}>
           <b>On behalf of:{onbehalf}</b><br/>
           <b>Fixed for:{fix}</b><br/>
           <b>Client Name:{c_name}</b><br/>
           <b>Client Number:{c_number}</b> <br/>
          </p>

        </div>
        </>
        }
           
                        

        </>
    );
};

export default TotalAd;