import React, { useEffect, useState } from 'react';
import NavBar from '../HomePage/NavBar/NavBar';
import Footer from '../HomePage/Footer/Footer';
import Page from 'react-page-loading';

const ProductDetails = () => {

  const [productDetailsview , productDetailsReadView]= useState([]);
  console.log("productDetailsview",productDetailsview);
  useEffect(()=>{
    fetch('http://sellinbd.com/lexdiary/product/readProduct.php?id=122')
    .then(res => res.json())
    .then(result=> productDetailsReadView(result))

},[])


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
        <div class="marquee">
        <marquee  style={{marginTop:"10px"}}>
            <i class="fa fa-gift" aria-hidden="true" style={{color:" rgb(255, 95, 95)",fontSize: "18px"}}></i>&nbsp;<i class="fa fa-university" aria-hidden="true"></i>
            &nbsp;
            <b>Get all the necessary item in your daily court life here</b>&nbsp;
            <i class="fa fa-university" aria-hidden="true"></i>&nbsp;<i class="fa fa-gift" aria-hidden="true" style={{color: "rgb(255, 95, 95)",fontSize: "18px"}}></i>
        </marquee>
        </div>
        <section id="course-details" class="course-details">
    <div class="container" data-aos="fade-up">

      <div class="row">
        <div class="col-lg-8">
         
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" style={{backgroundColor: "#0f3f70"}}></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1" style={{backgroundColor: "#0f3f70"}}></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2" style={{backgroundColor: "#0f3f70"}}></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" style={{height: "450px",objectFit: "cover"}} src="assets/img/products/full-set-studs.jpg" alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" style={{height: "450px",objectFit: "cover"}} src="assets/img/products/full-set-studs2.jpg" alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" style={{height: "450px",objectFit: "cover"}} src="assets/img/products/Butterfly-Studs.jpg" alt="Third slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" style={{background: "linear-gradient(to right, rgba(0, 132, 255, 0.185), rgba(252, 255, 252, 0.15))"}}>
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" style={{background: "linear-gradient(to left, rgba(0, 132, 255, 0.185), rgba(252, 255, 252, 0.15))"}}>
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <h3>{productDetailsview.productName}</h3>
         <p style={{color:"grey"}}><b>Description :</b> {productDetailsview.productDescription} </p>
        </div>
        <div class="col-lg-4">

          <div class="course-info d-flex justify-content-between align-items-center">
            <h5>Available color</h5>
            <a><div href="#" style={{height: "20px",width: "20px",backgroundColor: "saddlebrown",border:"1px solid black"}}></div></a>
            <a><div href="#" style={{height: "20px",width: "20px",backgroundColor: "saddlebrown",border:"1px solid black"}}></div></a>
            <a><div href="#" style={{height: "20px",width: "20px",backgroundColor: "saddlebrown",border:"1px solid black"}}></div></a>
            <a><div href="#" style={{height: "20px",width: "20px",backgroundColor: "saddlebrown",border:"1px solid black"}}></div></a>
            <a><div href="#" style={{height: "20px",width: "20px",backgroundColor: "saddlebrown",border:"1px solid black"}}></div></a>
            <a><div href="#" style={{height: "20px",width: "20px",backgroundColor: "saddlebrown",border:"1px solid black"}}></div></a>
            <a><div href="#" style={{height: "20px",width: "20px",backgroundColor: "saddlebrown",border:"1px solid black"}}></div></a>
          </div>

          <div class="course-info d-flex justify-content-between align-items-center">
            <h5>Size</h5>
            <div class="form-group" style={{width: "200px"}}>
             
              <select class="form-control" id="sel1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            
          </div>

         
          <div class="course-info d-flex justify-content-between align-items-center">
            <h5>Size</h5>
            <div class="input-group p-3">
              <span class="input-group-btn">
                  <button type="button" class="quantity-left-minus btn btn-primary btn-number"  data-type="minus" data-field="">
                    <span class="glyphicon glyphicon-minus">-</span>
                  </button>
              </span>
              <input type="text" id="quantity" name="quantity" class="form-control input-number" value="10" min="1" max="100"/>
              <span class="input-group-btn">
                  <button type="button" class="quantity-right-plus btn btn-primary btn-number" data-type="plus" data-field="">
                      <span class="glyphicon glyphicon-plus">+</span>
                  </button>
              </span>
          </div>
          </div>
          <div class="course-info d-flex justify-content-between align-items-center text-center">
              <button type="submit" class="btn btn-primary text-center w-100"> Add to Cart</button>
          
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

export default ProductDetails;