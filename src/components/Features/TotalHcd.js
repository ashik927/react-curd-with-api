import React from 'react';

const TotalHcd = (props) => {
    const {court , sl , casetype, c_name, c_number, caseno, fileno, fix, onbehalf, parties, message} = props.searchHcd;
    return (
        <>
            
             { message ?
             <h1 style={{color:"red", textAlign: "center"}}> No Cases</h1>
             :
             <>
               <div class="col-md-4">
                           <p style={{fontSize: "14px", color:"black"}}>
                             <b >Case No: <span class="text-primary">{caseno}</span> </b><br/>
                             <b>Item No: <span class="text-primary">{sl}</span></b><br/>
                             <b>Case Type: <span class="text-primary">{casetype}</span> </b><br/>
                             <b>Case Name:</b><br/>
                             <b>District:</b><br/>
                           </p>
                             
                         </div>
                         <div class="col-md-4">
                           <p style={{fontSize: "14px", color:"black"}}>
                             {/* Party A <br/>
                             VS<br/>
                             Party B */}
                             {parties}
                             </p>
                         </div>
                         <div class="col-md-4">
                           <p style={{fontSize: "14px", color:"black"}}>
                            <b>On behalf of: <span class="text-primary">{onbehalf}</span></b><br/>
                            <b>Fixed for: <span class="text-primary">{fix}</span></b><br/>
                            <b>Client Name: <span class="text-primary">{c_name}</span></b><br/>
                            <b>Client Number: <span class="text-primary">{c_number}</span></b> <br/>
                           </p>
                         </div>   
              </>
              
              }
            
         
                        
        </>
    );
};

export default TotalHcd;