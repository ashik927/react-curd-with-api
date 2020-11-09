import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import Footer from '../../HomePage/Footer/Footer';
import NavBar from '../../HomePage/NavBar/NavBar';

const EditHcd = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = data => console.log(data);
    let localData = localStorage .getItem('usernumber');
    const {fileno} = useParams();
    const [infoHcd , setInfoHcd] = useState([]);
    const [info , setInfo] = useState({
      fileno: '',
      district:'',
      casetype: '',
      caseno:'',
      onbehalf: '',
      c_name:'',
      c_number: '',
      partyA:'',
      partyB: '',
      usernumber:''
    });
  //   const handleBlur = (e) => {
  //     const newInfo = { ...info };
  //     newInfo[e.target.name] = e.target.value;
  //     setInfo(newInfo);
  // } 
  // console.log(info);
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
      
      const onSubmit=(data) => {
        alert("submitted")
        const formData = new FormData()
        formData.append('fileno', fileno);
        formData.append('district', "");
        formData.append('casetype',data.casetype);
        formData.append('caseno', `${data.caseno}`);
        formData.append('partyA', data.partyA);
        formData.append('partyB', data.partyB);
        formData.append('onbehalf', data.onbehalf);
        formData.append('c_name', data.c_name);
        formData.append('c_number', data.c_number);
        formData.append('usernumber', localData);
    
        fetch('http://sellinbd.com/lexdiary/registration/updateCases.php', {
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
                            <li class="nav-item"><a href="" class="active nav-link">Settings / high-court-division-case / edit</a></li>
                          </ul>
                          <div class="tab-content pt-3">
                            <div class="tab-pane active">
                            {infoHcd.filter(inf => inf.fileno === fileno).map(filteredPerson => (
                            <form onSubmit={handleSubmit(onSubmit)}>
                                  <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <input name="fileno" class="form-control" defaultValue={fileno} ref={register({ required: true })} />
                                          {errors.exampleRequired && <span>This field is required</span>}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <input name="casetype" defaultValue={filteredPerson.casetype} ref={register({ required: true })} />
                                          {errors.exampleRequired && <span>This field is required</span>}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <input name="casetno" defaultValue={filteredPerson.caseno} ref={register({ required: true })} />
                                          {errors.exampleRequired && <span>This field is required</span>}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <input name="partyA" defaultValue={filteredPerson.partyA} ref={register({ required: true })} />
                                          {errors.exampleRequired && <span>This field is required</span>}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <input name="partyB" defaultValue={filteredPerson.partyB} ref={register({ required: true })} />
                                          {errors.exampleRequired && <span>This field is required</span>}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <input name="c_name" defaultValue={filteredPerson.c_name} ref={register({ required: true })} />
                                          {errors.exampleRequired && <span>This field is required</span>}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <input name="c_number" defaultValue={filteredPerson.c_number} ref={register({ required: true })} />
                                          {errors.exampleRequired && <span>This field is required</span>}
                                        </div>
                                    </div>
                                </div>

                                <input type="submit" />
                              </form>
                            ))}
                              {/* <form class="form"  onSubmit={handleSubmit} noValidate="">
                              {infoHcd.filter(inf => inf.fileno === fileno).map(filteredPerson => (
                                <div>
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                 
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Chamber File No.</label>
                                          <input class="form-control" name="fileno"  onChange={e =>handleBlur(e)} type="text" value={fileno}  />
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>{filteredPerson.casetype}</label>
                                          <input class="form-control" name="casetype"  onChange={e =>handleBlur(e)} type="hidden" value={filteredPerson.casetype}   />
                                          <input class="form-control" name="caseno"  onChange={e =>handleBlur(e)} type="text" value={filteredPerson.caseno}   />
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
                                          <input class="form-control" name="partyA"   onChange={e =>handleBlur(e)} type="text"  defaultValue={filteredPerson.partyA} />
                                        </div>
                                      </div>
                                    </div>
                                    <div class="mb-4 text-center"><b>VS</b></div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Name of the Opposite Party</label>
                                          <input class="form-control" name="partyB"  onChange={e =>handleBlur(e)} type="text" defaultValue={filteredPerson.partyB}/>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>On Behalf of</label>
                                            <input class="form-control" name="onbehalf"  onChange={e =>handleBlur(e)} type="text" defaultValue={filteredPerson.onbehalf} disabled title="on behalf of name cannot be changed"/>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Client Name (Optional)</label>
                                            <input class="form-control" name="c_name"  onChange={e =>handleBlur(e)} type="text" defaultValue={filteredPerson.c_name}/>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Client Phone Number (Optional)</label>
                                            <input class="form-control" name="c_number"  onChange={e =>handleBlur(e)} defaultValue={filteredPerson.c_number} type="text" />
                                          </div>
                                        </div>
                                      </div>
                                  </div>
                                 
                                  <div class="col-12 col-sm-5 offset-sm-1 mb-3">
                                   
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col d-flex justify-content-end">
                                    <button class="btn btn-primary" >Save Changes</button>
                                  </div>
                                </div>
                                {/* onClick={handleSubmit} */}
                                {/* </div> */}
                                {/* ))} */}
                              {/* </form> */} 
            
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

export default EditHcd;