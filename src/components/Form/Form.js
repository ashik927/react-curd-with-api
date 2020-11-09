import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import NavBar from '../HomePage/NavBar/NavBar';
import Page from 'react-page-loading'

const Form = (props) => {

    const [info , setInfo] = useState({});
    let {formName} = useParams();
    let localData = localStorage .getItem('usernumber'); 
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    let caseConvertString =JSON.stringify({formName});
    
    let caseCategory = caseConvertString.split(" ");
    let caseCategoryName = caseCategory[0].split(":");
    // console.log(caseCategoryName[1].replace(/"/g,""));
   const handleSubmit=(e) => {
    alert("submitted");
    const formData = new FormData()
    formData.append('division', "AD");
    formData.append('fileno', info.fileno);
    formData.append('district', "");
    formData.append('caseType',formName);
    formData.append('caseno', `${info.caseType1}/${info.caseType2}`);
    formData.append('partyA', info.partyA);
    formData.append('partyB', info.partyB);
    formData.append('onbehalf', info.onbehalf);
    formData.append('c_name', info.c_name);
    formData.append('c_number', info.c_number);
    formData.append('usernumber', localData);

    fetch('http://sellinbd.com/lexdiary/registration/addCaseAD.php', {
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

            <main id="main">
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
                            <li class="nav-item"><a href="" class="active nav-link">Appellate Division / {caseCategoryName[1].replace(/"/g,"")} Case / <b>{formName}</b></a></li>
                          </ul>
                          <div class="tab-content pt-3">
                            <div class="tab-pane active">
                              <form class="form"  onSubmit={handleSubmit}>
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Chamber File No. <span class="required" style={{color:"red"}}>*</span> </label>
                                            <input class="form-control" onBlur={handleBlur} name="fileno" type="text" placeholder="" title="Add case file no." required></input>
                                          </div>
                                        </div>
                                      </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>{formName} <span class="required" style={{color:"red"}}>*</span></label>
                                          <input class="form-control" onBlur={handleBlur} type="text" name="caseType1" placeholder="Number" required></input>
                                        </div>
                                      </div> 
                                    
                                      <div class="col">
                                        <div class="form-group">
                                          <label>.</label>
                                          <input class="form-control" onBlur={handleBlur} type="text" name="caseType2" placeholder="year" required></input>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Name of Parties</label>
                                          <input class="form-control" type="text" onBlur={handleBlur} name="partyA" placeholder="Name of the party (Optional)" title="name of the party (Optional)"></input>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group text-center">
                                          <label><b>Vs</b></label>
                                          <input class="form-control" type="text" onBlur={handleBlur} name="partyB" placeholder="Name of the opposite party (Optional)" title="Name of the opposite party (Optional)"></input>
                                        </div>
                                      </div>
                                    </div>
                                   
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                            <label for="on-behalf-of">On behalf of <span class="required" style={{color:"red"}}>*</span></label>
                                            <select class="form-control" id="on-behalf-of" aria-placeholder="on behalf of" onBlur={handleBlur} name="onbehalf" required>
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
                                            <label>Clients Name (Optional)</label>
                                            <input class="form-control" onBlur={handleBlur} name="c_name" type="text" placeholder=""></input>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Clients Phone Number (Optional)</label>
                                            <input class="form-control" type="text" onBlur={handleBlur} name="c_number" placeholder=""></input>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            {/* <label>User Number</label> */}
                                            <input  class="form-control" value="" type="hidden" onBlur={handleBlur} name="usernumber" placeholder="" readOnly></input>
                                          </div>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col d-flex justify-content-end">
                                    <button class="btn btn-primary" type="submit" style={{padding: "8px 30px",borderRadius: "20px"}}>Add</button>
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
  

  </main>
              </Page>

        </div>
    );
};

export default Form;