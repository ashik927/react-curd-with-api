import React from 'react';

const HomeWithOutlogin = () => {

    return (
        <div style={{background:"white"}}>
              <div class="marquee">
                  <marquee style={{ marginTop:"5px",fontWeight:" bold", fontSize: "18px"}}> <i class="fa fa-toggle-right" style={{color:"crimson"}} aria-hidden="true"></i> Please Login To Enjoy All The Features Below <i class="fa fa-toggle-left" aria-hidden="true" style={{color:"crimson"}}></i></marquee>
            </div>
           <div class="container" data-aos="fade-up">
                <section id="about" class="about">
                    <div class="row">
                        <div class="col-lg-8 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                        <img src="../assets/img/lex-diary-home.png" class="img-fluid" alt=""/>
                        </div>
                        <div class="col-lg-4 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <h3>Feature List</h3><hr></hr><br></br>                        
                        <ul>
                            <li><i class="icofont-check-circled"></i> <b>View All Running Item HCD</b></li>
                            <li><i class="icofont-check-circled"></i> <b>Lawyer's Link</b></li>
                            <li><i class="icofont-check-circled"></i> <b>Buy Lawyer's Accessories</b></li>
                            <li><i class="icofont-check-circled"></i> <b>Add Case</b></li>
                            <li><i class="icofont-check-circled"></i> <b>Roday Search List</b></li>
                            <li><i class="icofont-check-circled"></i> <b>Judge Court</b></li>
                            <li><i class="icofont-check-circled"></i> <b>Appellate Division Files</b></li>
                            <li><i class="icofont-check-circled"></i> <b>hight Court Division Files</b></li>
                            <li><i class="icofont-check-circled"></i> <b>Important Web Link</b></li>
                            
                        </ul>
                        
            
                        </div>
                    </div>
                </section>
   
 
     </div>
</div>
    );
};

export default HomeWithOutlogin;