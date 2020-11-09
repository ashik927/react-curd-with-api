import React from 'react';
import ImportantWebLinks from '../../Features/ImportantWebLinks';
import TodaySearchListModal from '../../Features/TodaySearchListModal';

const Feature = () => {
    return (
      <div>
        <div class="container" data-aos="fade-up" style={{marginTop: "5%", marginBottom: "5%"}}>
        <h1 class="text-center" style={{marginBottom: "50px"}}>Features</h1>
        <div class="row" data-aos="zoom-in" data-aos-delay="100">
        <div class="col-lg-4 col-md-4 mt-md-0">
          <div class="icon-box">
            <div class="btn-wide btn-normal"  data-toggle="modal" data-target="#todaySearchListModal">
              
              <a href="" class="text-center feature-list-text"  data-toggle="modal" data-target="#todaySearchLilstModal"> Today Search <br/> List</a>

            </div>
          </div>
        </div>
          <div class="col-lg-4 col-md-4 mt-4 mt-md-0">
            <div class="icon-box">
              <div class="btn-wide btn-normal">
                <a href="" class="text-center feature-list-text">  Judge  Court</a>
  
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 mt-4 mt-md-0">
            <div class="icon-box">
              <div class="btn-wide btn-normal">
                <a href="/ad-all-files"  class="text-center feature-list-text">  Appellate Division <br/> Files</a>
  
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="btn-wide btn-normal">
                <a href="/hcd-all-files" class="text-center feature-list-text">  High Court Division <br/> Files</a>
  
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="btn-wide btn-normal" data-toggle="modal" data-target="#importantWebLinkModal">
                <a href="#" class="text-center feature-list-text" data-toggle="modal" data-target="#importantWebLinkModal">  important Web <br/> Links</a>
  
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="btn-wide btn-normal">
                <a href="" class="text-center feature-list-text">  Legal <br/> Reference<br/><span style={{fontWeight: "normal", fontSize: "15px",color: "red"}}>Comming soon</span></a>
  
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="btn-wide btn-normal">
                <a href="" class="text-center feature-list-text">  lawyer's <br/> Accessories</a>
  
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="btn-wide btn-normal">
                <a href="" class="text-center feature-list-text">  Important <br/> Information<br/><span style={{fontWeight: "normal", fontSize: "15px",color: "red"}}>Comming soon</span></a>
  
              </div>
            </div>
          </div>
       
        
          
          </div>
        </div>
        <ImportantWebLinks></ImportantWebLinks>
        <TodaySearchListModal></TodaySearchListModal>
        </div>
    );
};

export default Feature;