import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import NavBar from '../HomePage/NavBar/NavBar';
import Page from 'react-page-loading'

const HcdFormWithoutDistrict = () => {
    const [info , setInfo] = useState({});
    let localData = localStorage .getItem('usernumber'); 

    let {formName} = useParams();
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit=(e) => {
    alert("submitted");
    const formData = new FormData()
    formData.append('division', "HCD");
    formData.append('fileno', info.fileno);
    formData.append('district', "");
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
      console.log(data)
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
                              <form class="form"  onSubmit={handleSubmit}>
                                
                                
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

export default HcdFormWithoutDistrict;