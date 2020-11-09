import React, { useContext, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import NavBar from '../HomePage/NavBar/NavBar';
import Page from 'react-page-loading'

const HcdForm = () => {
  let localData = localStorage .getItem('usernumber'); 
    const [info , setInfo] = useState({});
    let {formName} = useParams();
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
 
    

    let caseConvertString =JSON.stringify({formName});
    
    let caseCategory = caseConvertString.split(" ");
    let caseCategoryName = caseCategory[0].split(":");
    const handleSubmit=(e) => {
    alert("submitted");
    const formData = new FormData()
    formData.append('division', "HCD");
    formData.append('fileno', info.fileno);
    formData.append('district', info.district);
    formData.append('casetype',formName);
    formData.append('caseno', `${info.casetype1}/${info.casetype2}`);
    formData.append('partyA', info.partyA);
    formData.append('partyB', info.partyB);
    formData.append('onbehalf', info.onbehalf);
    formData.append('c_name', info.c_name);
    formData.append('c_number', info.c_number);
    formData.append('usernumber', localData);
    fetch('http://sellinbd.com/lexdiary-website/registration/addCaseHCD.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
}
    return (
        <div>
         
            <NavBar></NavBar>
            <Page loader={"bar"} color={"#A9A9A9"} size={8} >

            
            <section id="testimonials" class="testimonials" style={{marginTop: "5%"}}>
        <div class="container">
            <div class="row flex-lg-nowrap">
           
              <div class="col">
                <div class="row">
                  <div class="col mb-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="e-profile">
                       
                          <ul class="nav nav-tabs">
                            <li class="nav-item"><a href="" class="active nav-link">High Court Division /  <b>{formName}</b></a></li>
                          </ul>
                          <div class="tab-content pt-3">
                            <div class="tab-pane active">
                              <form class="form" onSubmit={handleSubmit}>
                               
                                <div class="row">
                                    <div class="col">
                                      <div class="form-group">
                                          <label for="on-behalf-of"> District</label>
                                          <select class="form-control" id="on-behalf-of" onBlur={handleBlur} aria-placeholder="on behalf of" name="district">
                                            <option style={{display:"none"}} selected>Select district</option>
                                            <option>Bagerhat</option>
                                            <option>Bandarban</option>
                                            <option>Barguna</option>
                                            <option>Barisal</option>
                                            <option>Bhola</option>
                                            <option>Bogra</option>
                                            <option>Brahmanbaria</option>
                                            <option>Chandpur</option>
                                            <option>Chittagong</option>
                                            <option>Chuadanga</option>
                                            <option>Comilla</option>
                                            <option>Cox's Bazar	</option>
                                            <option>Dhaka</option>
                                            <option>Dinajpur</option>
                                            <option>Faridpur</option>
                                            <option>Feni</option>
                                            <option>Gaibandha</option>
                                            <option>Gazipur</option>
                                            <option>Gopalganj</option>
                                            <option>Habiganj</option>
                                            <option>Jaipurhat</option>
                                            <option>Jamalpur</option>
                                            <option>Jessore</option>
                                            <option>Jhalakati</option>
                                            <option>Jhenaidah</option>
                                            <option>Khagrachari</option>
                                            <option>Khulna</option>
                                            <option>Kishoreganj</option>
                                            <option>Kurigram</option>
                                            <option>Kushtia</option>
                                            <option>Lakshmipur</option>
                                            <option>Lalmonirhat</option>
                                            <option>Madaripur</option>
                                            <option>Magura	</option>
                                            <option>Manikganj</option>
                                            <option>Meherpur</option>
                                            <option>Moulvibazar</option>
                                            <option>Munshiganj</option>
                                            <option>Mymensingh</option>
                                            <option>Naogaon</option>
                                            <option>Narail</option>
                                            <option>Narayanganj</option>
                                            <option>Narsingdi</option>
                                            <option>Natore</option>
                                            <option>Nawabganj</option>
                                            <option>Netrakona</option>
                                            <option>Nilphamari</option>
                                            <option>Noakhali</option>
                                            <option>Pabna</option>
                                            <option>Panchagarh</option>
                                            <option>Parbattya Chattagram	</option>
                                            <option>Patuakhali</option>
                                            <option>Pirojpur</option>
                                            <option>Rajbari</option>
                                            <option>Rajshahi</option>
                                            <option>Rangpur</option>
                                            <option>Satkhira</option>
                                            <option>Shariatpur</option>
                                            <option>Sherpur</option>
                                            <option>Sirajganj</option>
                                            <option>Sunamganj</option>
                                            <option>Sylhet</option>
                                            <option>Tangail</option>
                                            <option>Thakurgaon</option>
                                           
                                          </select>
                                       
                                      </div>
                                    </div>
                                  </div>
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Chamber File No. <span class="required" style={{color:"red"}}>*</span></label>
                                            <input class="form-control" onBlur={handleBlur} name="fileno" type="text" placeholder="" title="Add case file no." required></input>
                                          </div>
                                        </div>
                                      </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>{formName} <span class="required" style={{color:"red"}}>*</span></label>
                                          <input class="form-control" type="text" onBlur={handleBlur} name="casetype1" placeholder="Number" required></input>
                                        </div>
                                      </div> 
                                    
                                      <div class="col">
                                        <div class="form-group">
                                          <label>.</label>
                                          <input class="form-control" type="text" onBlur={handleBlur} name="casetype2" placeholder="year" required></input>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Name of Parties</label>
                                          <input class="form-control" name="partyA" type="text" onBlur={handleBlur} placeholder="Name of the party" title="name of the party"></input>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group text-center">
                                          <label><b>Vs</b></label>
                                          <input class="form-control" name="partyB" type="text" onBlur={handleBlur} placeholder="Name of the opposite party"></input>
                                        </div>
                                      </div>
                                    </div>
                                   
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                            <label for="on-behalf-of">On behalf of <span class="required" style={{color:"red"}}>*</span></label>
                                            <select class="form-control" id="on-behalf-of" name="onbehalf" onBlur={handleBlur} aria-placeholder="on behalf of" required>
                                              <option style={{display:"none"}} selected>Select on behalf of</option>
                                              <option>Petitioner</option>
                                              <option>Appellant</option>
                                              <option>Respondent</option>
                                              <option>Opposite Party</option>
                                              <option>Plaintiff</option>
                                              <option>Defendant</option>
                                            </select>
                                         
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Clients Name</label>
                                            <input class="form-control" onBlur={handleBlur} name="c_name" type="text" placeholder=""></input>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Clients Phone Number</label>
                                            <input class="form-control" type="text" name="c_number" onBlur={handleBlur} placeholder=""></input>
                                          </div>
                                        </div>
                                      </div>
                                      {/* <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <input type="hidden" class="form-control"  name="usernumber" onChange={handleBlur}  value={localData}></input>
                                          </div>
                                        </div>
                                      </div> */}
                                   
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col d-flex justify-content-end">
                                    <button class="btn btn-primary" type="submit" style={{padding: "8px 30px", borderRadius:"20px"}}>Add</button>
                                  </div>
                                </div>
                              </form>
            
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            
                  <div class="col-12 col-md-3 mb-3">
                    <div class="card mb-3">
                      <div class="card-body">
                        <div class="px-xl-3">
                          <button class="btn btn-block btn-secondary">
                            <i class="fa fa-sign-out"></i>
                            <span>Logout</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <h6 class="card-title font-weight-bold">Support</h6>
                        <p class="card-text">Get fast, free help from our friendly assistants.</p>
                        <button type="button" class="btn btn-primary">Contact Us</button>
                      </div>
                    </div>
                  </div>
                </div>
            
              </div>
            </div>
            </div>
            
      </section>
      </Page>
        </div>
    );
};

export default HcdForm;