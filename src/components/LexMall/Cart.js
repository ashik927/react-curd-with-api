import React from 'react';
import NavBar from '../HomePage/NavBar/NavBar';
import Footer from '../HomePage/Footer/Footer';
import Page from 'react-page-loading';

const Cart = () => {
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
    
                  <h5 class="mb-4">Cart (<span>2</span> items)</h5>
    
                  <div class="row mb-4">
                    <div class="col-md-5 col-lg-3 col-xl-3">
                      <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img class="img-fluid w-100"
                          src="assets/img/products/Butterfly-Studs.jpg" alt="Sample"/>
                      
                      </div>
                    </div>
                    <div class="col-md-7 col-lg-9 col-xl-9">
                      <div>
                        <div class="d-flex justify-content-between">
                          <div>
                            <h5>Blue denim shirt</h5>
                            <p class="mb-3 text-muted text-uppercase small">Shirt - blue</p>
                            <p class="mb-2 text-muted text-uppercase small">Color: blue</p>
                            <p class="mb-3 text-muted text-uppercase small">Size: M</p>
                          </div>
                          <div>
                            <div class="def-number-input number-input safari_only mb-0 w-100">
                              <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                class="minus" style={{background: "#0f3f70",color:" aliceblue",padding:"3px 8px"}}>-</button>
                              <input class="quantity text-center" min="0" name="quantity" value="1" type="number" style={{width: "60px"}}/>
                              <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                class="plus" style={{background: "#0f3f70",color: "aliceblue",padding:"3px 6px"}}>+</button>
                            </div>
                            <small id="passwordHelpBlock" class="form-text text-muted text-center">
                              (Note, 1 piece)
                            </small>
                          </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"  style={{color:"red"}}><i
                                class="fa fa-trash mr-1" style={{color:"red"}}></i> Remove item </a>
                           
                          </div>
                          <p class="mb-0"><span><strong>$17.99</strong></span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="mb-4"/>
                  <div class="row mb-4">
                    <div class="col-md-5 col-lg-3 col-xl-3">
                      <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img class="img-fluid w-100"
                          src="assets/img/products/LadiesBib.jpg" alt="Sample"/>
                       
                      </div>
                    </div>
                    <div class="col-md-7 col-lg-9 col-xl-9">
                      <div>
                        <div class="d-flex justify-content-between">
                          <div>
                            <h5>Red hoodie</h5>
                            <p class="mb-3 text-muted text-uppercase small">Hoodie - red</p>
                            <p class="mb-2 text-muted text-uppercase small">Color: red</p>
                            <p class="mb-3 text-muted text-uppercase small">Size: M</p>
                          </div>
                          <div>
                          <div class="def-number-input number-input safari_only mb-0 w-100">
                              <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                class="minus" style={{background: "#0f3f70",color:" aliceblue",padding:"3px 8px"}}>-</button>
                              <input class="quantity text-center" min="0" name="quantity" value="1" type="number" style={{width: "60px"}}/>
                              <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                class="plus" style={{background: "#0f3f70",color: "aliceblue",padding:"3px 6px"}}>+</button>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                                class="fa fa-trash mr-1"></i> Remove item </a>
                            <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i
                                class="fa fa-heart mr-1"></i> Move to wish list </a>
                          </div>
                          <p class="mb-0"><span><strong>$35.99</strong></span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="text-primary mb-0"><i class="fa fa-info-circle mr-1"></i> Do not delay the purchase, adding
                    items to your cart does not mean booking them.</p>
    
                </div>
              </div>
           
              <div class="card mb-4">
                <div class="card-body">
    
                  <h5 class="mb-4">Expected shipping delivery</h5>
    
                  <p class="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
                </div>
              </div>
       
              <div class="card mb-4">
                <div class="card-body">
    
                  <h5 class="mb-4">We accept</h5>
    
                  <img class="mr-2" width="45px"
                    src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"/>
                  <img class="mr-2" width="45px"
                    src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"/>
                  <img class="mr-2" width="45px"
                    src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"/>
                  
                </div>
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
             
              <div class="card mb-4">
                <div class="card-body">
    
                  <a class="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample"
                    aria-expanded="false" aria-controls="collapseExample">
                    Add a discount code (optional)
                    <span><i class="fa fa-chevron-down pt-1"></i></span>
                  </a>
    
                  <div class="collapse" id="collapseExample">
                    <div class="mt-3">
                      <div class="md-form md-outline mb-0">
                        <input type="text" id="discount-code" class="form-control font-weight-light"
                          placeholder="Enter discount code"/>
                      </div>
                    </div>
                  </div>
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

export default Cart;