import React from 'react';
import NavBar from '../HomePage/NavBar/NavBar';
import Footer from '../HomePage/Footer/Footer';
import Page from 'react-page-loading';

const Checkout = () => {
    return (
       <div> 
    <Page loader={"bar"} color={"#A9A9A9"} size={8} >
        <NavBar></NavBar>
        <section id="hero" class="d-flex justify-content-center align-items-center">
            <div class="container position-relative" data-aos="zoom-in" data-aos-delay="100">
            <h1>Lex Mall</h1>
            <h2>Buy Lawyer's Accessories</h2>
            <a href="#" class="btn-get-started">Shop Now</a>
            </div>
        </section>
    <main id="main">
    <div class="container">


<section class="mt-5 mb-4">

  <div class="row">


    <div class="col-lg-8">

      <div class="card wish-list mb-4">
        <div class="card-body">

          <h5 class="mb-4"><b>Delivery Cost Information</b></h5>

          <div class="row mb-4">

            <div class="col-md-12 col-lg-12 col-xl-12">

              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked aria-expanded="true" aria-controls="collapseExample" data-toggle="collapse" href="#collapseSCBABuilding"/>
                <label class="form-check-label" for="exampleRadios1">
                  SCBA Building (Delivery Charge Free)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" aria-expanded="true" aria-controls="collapseExample" data-toggle="collapse" href="#collapseInsideDhaka"/>
                <label class="form-check-label" for="exampleRadios2">
                  Inside Dhaka (Delivery Charge 100 BDT)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" aria-expanded="true" aria-controls="collapseExample" data-toggle="collapse" href="#collapseOutsideDhaka"/>
                <label class="form-check-label" for="exampleRadios3">
                  Outside Dhaka (Delivery Charge 120 BDT)
                </label>
              </div>
             
            
              <div class="collapse" id="collapseSCBABuilding">
                <div class="mt-3">
                  <p class="text-center"><b>SCBA Building</b></p>
                  <div class="md-form md-outline mb-0">
                    <label for="contactPerson">Contact Person</label>
                    <input type="text" id="contactPerson" class="form-control font-weight-light"
                      placeholder="Contact Person"/>
                      <label for="contactPerson">Contact Number</label>
                    <input type="text" id="discount-code" class="form-control font-weight-light"
                    placeholder="Contact Number"/>
                    <label for="contactPerson">Room No.</label>
                    <input type="text" id="discount-code" class="form-control font-weight-light"
                    placeholder="Room No."/>
                  </div>
                </div>
              </div>

              <div class="collapse" id="collapseInsideDhaka">
                <div class="mt-3">
                  <p class="text-center"><b>Inside Dhaka</b></p>
                  <div class="md-form md-outline mb-0">
                    <label for="contactPerson">Contact Person</label>
                    <input type="text" id="contactPerson" class="form-control font-weight-light"
                      placeholder="Contact Person"/>
                      <label for="contactPerson">Contact Number</label>
                    <input type="text" id="discount-code" class="form-control font-weight-light"
                    placeholder="Contact Number"/>
                    <label for="contactPerson">Address</label>
                    <textarea type="text" id="discount-code" class="form-control font-weight-light"
                    placeholder="Address"></textarea>
                  </div>
                </div>
              </div>

              <div class="collapse" id="collapseOutsideDhaka">
                <div class="mt-3">
                  <p class="text-center"><b>Outside Dhaka</b></p>
                  <div class="md-form md-outline mb-0">
                    <label for="contactPerson">Contact Person</label>
                    <input type="text" id="contactPerson" class="form-control font-weight-light"
                      placeholder="Contact Person"/>
                      <label for="contactPerson">Contact Number</label>
                    <input type="text" id="discount-code" class="form-control font-weight-light"
                    placeholder="Contact Number"/>
                    <label for="contactPerson">Address</label>
                    <textarea type="text" id="discount-code" class="form-control font-weight-light"
                    placeholder="Address"></textarea>
                  </div>
                </div>
              </div>
            </div>
            

              
            </div>
          </div>
          <hr class="mb-4"/>

          
        </div>
      </div>

    <div class="col-lg-4">

      <div class="card mb-4">
        <div class="card-body">

          <h5 class="mb-3">The total amount of</h5>

          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Sub Total
              <span>150 BDT</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
              Delivery Charge
              <span>25 BDT</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total</strong>
                <strong>
                  <p class="mb-0">(excluding VAT)</p>
                </strong>
              </div>
              <span><strong>175 BDT</strong></span>
            </li>
          </ul>

          <button type="button" class="btn btn-primary btn-block waves-effect waves-light">Place Order</button>

        </div>
      </div>


    </div>
    </div>


</section>

</div>

    </main>
        <Footer></Footer>
        </Page>
  </div>
    );
};

export default Checkout;