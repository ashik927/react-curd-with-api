import React from 'react';

const TotalAd = (props) => {
    const {id , thumbnail , discountPercentage, discountPrice, productDescription, productName, productPrice, rating} = props.productList;
    let hasDiscount = false;
    if(discountPercentage==0){
        hasDiscount = true;
    }
    const formatter = new Intl.NumberFormat('EN', {
        style: 'currency',
        currency: 'BDT',
        minimumFractionDigits: 2
      })
    return (
        <>
        {
        //   message ?  <p class="text-danger">{message}</p>  :
          <>
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-lg-0 mb-4">
          <div class="course-item" style={{background:"whitesmoke"}}>
            <img src={thumbnail} class="img-fluid" alt={productName}/>
            <div class="course-content">
             

                <h3><a href="course-details.html">{productName}</a></h3>
               {/* <p>{productDescription}</p> */}
              <div class="trainer d-flex justify-content-between align-items-center" style={{paddingBottom:"15px"}}>
              <div class="d-flex justify-content-between align-items-center">
                  
              {
                  hasDiscount ?  <p class="price" style={{fontSize:"14px"}}>{formatter.format(discountPrice)}</p> : <p class="price" style={{fontSize:"14px"}}><span style={{textDecoration: "line-through",color:"rgb(255, 123, 123)",fontWeight:"normal"}}>{formatter.format(productPrice)}</span> {formatter.format(discountPrice)}</p>
              }
              
            </div>
                <div class="trainer-rank d-flex align-items-center">
                    <button class="btn btn-primary">Add to Cart</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
          </>
        }
           
                        

        </>
    );
};

export default TotalAd;