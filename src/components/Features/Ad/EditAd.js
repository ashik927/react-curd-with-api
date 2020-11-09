import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../HomePage/Footer/Footer';
import NavBar from '../../HomePage/NavBar/NavBar';

const EditAd = () => {
  const {fileno} = useParams();
  let localData = localStorage.getItem('usernumber');
  const [infoAd , setInfoAd] = useState([]);
  const [info , setInfo] = useState({});
  console.log(infoAd);
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
    const handleBlur = e => {
      const newInfo = { ...info };
      newInfo[e.target.name] = e.target.value;
      setInfo(newInfo);
  } 
    const handleSubmit=(e) => {
      alert("submitted")
      e.preventDefault()
      const formData = new FormData()
      formData.append('fileno', fileno);
      formData.append('district', "");
      formData.append('casetype',info.casetype);
      formData.append('caseno', `${info.caseno}`);
      formData.append('partyA', info.partyA);
      formData.append('partyB', info.partyB);
      formData.append('onbehalf', info.onbehalf);
      formData.append('c_name', info.c_name);
      formData.append('c_number', info.c_number);
      formData.append('usernumber', localData);
  
      fetch('http://sellinbd.com/lexdiary/registration/updateCasesAD.php', {
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
             <main id="main">
    <section id="testimonials" class="testimonials" style={{marginTop: "2%"}}>
        <div class="container">
            <div class="row flex-lg-nowrap">
              
            
              <div class="col">
                <div class="row">
                  <div class="col mb-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="e-profile">
                         
                          <ul class="nav nav-tabs">
                            <li class="nav-item"><a href="" class="active nav-link">Settings / appellate-division-case / edit</a></li>
                          </ul>
                          <div class="tab-content pt-3">
                            <div class="tab-pane active">
                            {infoAd.filter(inf => inf.fileno === fileno).map(filteredPerson => (
                              <form class="form" onSubmit={handleSubmit}>
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                     
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Chamber File No.</label>
                                          <input class="form-control" type="text" onChange={handleBlur} name="fileno" defaultValue={filteredPerson.fileno}/>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>{filteredPerson.casetype}</label>
                                          <input class="form-control" type="text" name="caseno" onChange={handleBlur} defaultValue={filteredPerson.caseno}/>
                                        </div>
                                      </div>
                                    </div>
                                   

                                 
                                    
                                  </div>
                                </div>
                                <div class="row mt-4">
                                  <div class="col-12 col-sm-12 mb-12">
                                    <div class="mb-4"><b>Name of Parties</b></div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Name of the Party</label>
                                          <input class="form-control" name="partyA"  onChange={handleBlur} type="text" defaultValue={filteredPerson.partyA}/>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="mb-4 text-center"><b>VS</b></div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Name of the Opposite Party</label>
                                          <input class="form-control" name="partyB" onChange={handleBlur} type="text" defaultValue={filteredPerson.partyB}/>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>On Behalf of</label>
                                            <input class="form-control" type="text" onChange={handleBlur} name="onbehalf" defaultValue={filteredPerson.onbehalf} />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Client Name (Optional)</label>
                                            <input class="form-control" type="text" onChange={handleBlur} name="c_name" defaultValue={filteredPerson.c_name}/>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Client Phone Number (Optional)</label>
                                            <input class="form-control" onChange={handleBlur} type="text" name="c_number" defaultValue={filteredPerson.c_number}/>
                                          </div>
                                        </div>
                                      </div>
                                  </div>
                                 
                                  <div class="col-12 col-sm-5 offset-sm-1 mb-3">
                                   
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col d-flex justify-content-end">
                                    <button class="btn btn-primary" type="submit">Save Changes</button>
                                  </div>
                                </div>
                              </form>
                            ))}
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
        </div>
    );
};

export default EditAd;