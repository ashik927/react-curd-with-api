import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeWithOutlogin from '../HomeWithOutLogin/HomeWithOutlogin';
import NavBar from '../NavBar/NavBar';
import RunningItem from '../RunningItem/RunningItem';
import Loader from 'react-spinner-loader';
import Page from 'react-page-loading'

const Profile = () => {
    
    return (
       <div>
         
            <NavBar></NavBar>
           
             <Page loader={"bar"} color={"#A9A9A9"} size={8} duration={3}>

             <section id="testimonials" class="testimonials" style={{marginTop: "5%"}}>
        <div class="container">
            <div class="row flex-lg-nowrap">
           
              <div class="col">
                <div class="row">
                  <div class="col mb-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="e-profile">
                          <div class="row">
                            <div class="col-12 col-sm-auto mb-3">
                              <div class="mx-auto" style={{width: "140px"}}>
                                <div class="d-flex justify-content-center align-items-center rounded" style={{height: "140px", backgroundColor: "rgb(233, 236, 239)"}}>
                                  <span style={{color: "rgb(166, 168, 170)", font: "bold 8pt Arial"}}>140x140</span>
                                </div>
                              </div>
                            </div>
                            <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                              <div class="text-center text-sm-left mb-2 mb-sm-0">
                                <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">John Smith</h4>
                                <p class="mb-0">@johnny.s</p>
                                <div class="text-muted"><small>Last seen 2 hours ago</small></div>
                                <div class="mt-2">
                                  <button class="btn btn-primary" type="button" style={{borderRadius: "25px"}}>
                                    <i class="fa fa-fw fa-camera"></i>
                                    <span>Change Photo</span>
                                  </button>
                                </div>
                              </div>
                              <div class="text-center text-sm-right">
                                <span class="badge badge-secondary" style={{padding: "5px 8px"}}>Using paid version</span>
                                <div class="text-muted"><small>Joined 09 Dec 2017</small></div>
                              </div>
                            </div>
                          </div>
                          <ul class="nav nav-tabs">
                            <li class="nav-item"><a href="" class="active nav-link">Settings</a></li>
                          </ul>
                          <div class="tab-content pt-3">
                            <div class="tab-pane active">
                              <form class="form" novalidate="">
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Username</label>
                                          <input class="form-control" type="text" name="username" placeholder="johnny.s" value="johnny.s"/>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Phone (Not Editable)</label>
                                          <input class="form-control" type="text" placeholder="+88 01xxx xxx xxx" disabled title="Phone number used in login cannot be changed"/>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Contact Number</label>
                                          <input class="form-control" type="text" placeholder="+88 01xxx xxx xxx"/>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col text-md-right">
                                        <div class="custom-control custom-checkbox text">
                                          <input type="checkbox" class="custom-control-input" id="notifications-offers" checked=""/>
                                          <label class="custom-control-label" for="notifications-offers">Show on lawyer's link profile</label>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Email</label>
                                          <input class="form-control" type="text" placeholder="user@example.com"/>
                                        </div>
                                      </div>
                                    </div>
                                   
                                  </div>
                                </div>
                                <div class="row mt-4">
                                  <div class="col-12 col-sm-12 mb-12">
                                    <div class="mb-4 text-center"><b>Change Password</b></div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Current Password</label>
                                          <input class="form-control" type="password" placeholder="••••••"/>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>New Password</label>
                                          <input class="form-control" type="password" placeholder="••••••"/>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Confirm <span class="d-none d-xl-inline">Password</span></label>
                                          <input class="form-control" type="password" placeholder="••••••"/></div>
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
           
           
            <Footer></Footer>
       </div>
    );
};

export default Profile;