import React, { useEffect, useState } from 'react';
import NavBar from '../HomePage/NavBar/NavBar';
import Footer from '../HomePage/Footer/Footer';
import Page from 'react-page-loading';
import Product from './Product';

const Products = () => {
  const [productview , productReadView]= useState([]);
  console.log("productview",productview);
  useEffect(()=>{
    fetch('http://sellinbd.com/lexdiary/product/readProducts.php')
    .then(res => res.json())
    .then(result=> productReadView(result))

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

 
 <section id="courses" class="courses">
    <div class="container" data-aos="fade-up">

      <div class="row" data-aos="zoom-in" data-aos-delay="100">

        {
            productview.map(productList => <Product productList={productList} ></Product>)
                      
        }
      </div>

    </div>
  </section>

        </main>
        <Footer></Footer>
        </Page>
  </div>
    );
};

export default Products;