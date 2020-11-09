import React from 'react';
import { Link } from 'react-router-dom';

const HcdTable = (props) => {
    const {court , sl , casetype, c_name, c_number, caseno, fileno, fix, onbehalf, parties,message} = props.totalHcd;
    let localData = localStorage .getItem('usernumber');
    const handleDelete = () =>{
        alert("delete");
        const formData = new FormData();
        formData.append('usernumber', localData);
        formData.append('caseno', caseno);
        formData.append('casetype', casetype);
        fetch('http://sellinbd.com/lexdiary/searchlist/deleteCasesHCDwithCaseno.php?usernumber='+`${localData}`+'&caseno='+caseno+'&casetype='+casetype, {
          method: 'POST',
          body: formData
        })
        
        .then(response => response.json())
        .then(data => {
          console.log("delete");
          window.location.reload();
        })
        .catch(error => {
          console.error(error)
        })
      }
    
    return (
        <div class="col-md-12">
             
                   <td>
                     
                           <p style={{fontSize: "14px", color:"black"}}>
                            <b>Chamber File No:{fileno}</b>&nbsp;17<br/>
                             <b>{casetype}:</b>&nbsp;{caseno}<br/>
                             <b>On Behalf of: </b>&nbsp;{onbehalf}<br/>
                             
                           </p>
                      
                   </td>
                   <td class="text-right">
                     <Link to={"/update-hcd/"+fileno}>  <button class="btn btn-primary"  style={{margin: "5px",padding: "8px 40px"}}> Edit</button></Link>
                       <button class="btn btn-danger" onClick={handleDelete} style={{margin: "5px",padding: "8px 30px"}}> Delete</button>
                   </td>
    </div>       
    );
};

export default HcdTable;