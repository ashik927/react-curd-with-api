import React, { useState } from 'react';
import Footer from '../HomePage/Footer/Footer';
import NavBar from '../HomePage/NavBar/NavBar';
import Page from 'react-page-loading'
import { useHistory } from 'react-router-dom';


const JcdForm = () => {
    const [info , setInfo] = useState({});
    const history = useHistory();
    let localData = localStorage .getItem('usernumber'); 
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    
   const handleSubmit=(e) => {
    const formData = new FormData()
    formData.append('division', "JCD");
    formData.append('fileno', info.fileno);
    formData.append('court', info.courtname);
    formData.append('caseno', info.casenamenumber);
    formData.append('partyA', info.partyA);
    formData.append('partyB', info.partyB);
    formData.append('onbehalf', info.onbehalf);
    formData.append('c_name', info.c_name);
    formData.append('c_number', info.c_number);
    formData.append('fixeddate', info.fixeddate);
    formData.append('fix', info.fix);
    formData.append('usernumber', localData);
    alert("submitted");
    e.preventDefault();
    fetch('http://sellinbd.com/lexdiary-website/registration/addChamberFile.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      history.push("/jcdform")
    })
    .catch(error => {
      console.error(error)
    })
}
    return (
        <div>
           <Page loader={"bar"} color={"#A9A9A9"} size={8} >

            <NavBar></NavBar>
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
                            <li class="nav-item"><a href="" class="active nav-link"><b>Judge Court</b></a></li>
                          </ul>
                          <div class="tab-content pt-3">
                            <div class="tab-pane active">
                              <form class="form" onSubmit={handleSubmit}>
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Chamber File No. </label>
                                            <input class="form-control" onBlur={handleBlur} name="fileno" type="text" placeholder="" title="Add case file no." required></input>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Court Name</label>
                                            <input class="form-control" type="text" onBlur={handleBlur} name="courtname" placeholder="" title="Court name"></input>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Case Name & Number</label>
                                            <input class="form-control" type="text" onBlur={handleBlur} name="casenamenumber" placeholder="" title="Case name & number"></input>
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
                                          <label>On behalf of</label>
                                          <input class="form-control" onBlur={handleBlur} name="onbehalf" type="text" placeholder="" title="on behalf of"></input>
                                        </div>
                                      </div>
                                    </div>
                                  
                                    <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Fixed For</label>
                                            <input class="form-control" onBlur={handleBlur} name="fix" type="text" placeholder="" title="Fixed for"></input>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Fixed Date</label>
                                            <div id="datepicker" class="input-group date" data-date-format="mm-dd-yyyy">
                                                <input data-provide="datepicker" class="form-control" onBlur={handleBlur} name="fixeddate"  />
                                                <span class="input-group-addon"><i class="fa fa-calendar" style={{fontSize: "35px"}}></i></span>
                                            </div>
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
                                            <input class="form-control" onBlur={handleBlur} name="c_number" type="text" placeholder=""></input>
                                          </div>
                                        </div>
                                      </div>
                                   
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col d-flex justify-content-end">
                                    <button class="btn btn-primary" type="submit" style={{padding: "8px 30px", borderRadius: "20px"}}>Add</button>
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
  <Footer></Footer>
  
  </Page>
  
</div>
    );
};

export default JcdForm;