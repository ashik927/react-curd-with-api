import React from 'react';
import NavBar from '../HomePage/NavBar/NavBar';
import Footer from '../HomePage/Footer/Footer';
import Page from 'react-page-loading';

const PostDetails = () => {
    return (
       <div> 
    <Page loader={"bar"} color={"#A9A9A9"} size={8} >
        <NavBar></NavBar>
        <main id="main">
        <section id="testimonials" class="testimonials">
        <div class="testimonial-wrap">
         
        <div class="container" data-aos="fade-up">
           
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="" style={{borderRadius:"50%"}}/>
              <h3>Saul Goodman</h3>
              <h4>14 September,2020</h4>
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i><br/><br/>
                <img src="assets/img/hero-bg.jpg" class="post-img"/>
                <i class="fa fa-thumbs-o-up pt-3" aria-hidden="true"> &nbsp; 216 &nbsp; </i> <i class="fa fa-commenting" aria-hidden="true"> 226 Comments</i>
                <i class ="fa fa-eye pt-3" style={{float: "right"}}> 216 Views</i>
              </p>
              <div class="container">
                <div class="row">
                    <div class="panel panel-default widget">
                       
                        <div class="panel-body">
                          <div class="testimonial-item">
                            <img src="assets/img/testimonials/Md. Shameem Sardar.jpg" class="testimonial-img profile-img" alt=""/>
                            <h3>Saul Goodman</h3>
                            <h4>Adocate</h4><br/>
                            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                              <div class="form-group">
                                <textarea class="form-control" name="message" rows="3" data-rule="required" data-msg="Please write something for us" placeholder="Write your comment ..."></textarea>
                               
                              <div class="form-group" style={{textAlign: "right"}}>
                              
                                 <a class="get-started-btn post-btn" style={{color: "aliceblue"}}>Post Comment</a>
                                
                                 </div></div>
                             
                            </form>
                          </div>
                          
                          <div class="panel-heading">
                            <span class="glyphicon glyphicon-comment"></span>
                            <h3 class="panel-title">
                                Recent Comments</h3>
                            <span class="label label-info">
                                78</span>
                          </div>
                            <ul class="list-group">
                              
                                <li class="list-group-item">
                               
                                    <div class="row">
                                        <div class="col-xs-2 col-md-2">
                                            <img src="http://placehold.it/80" class="img-circle img-responsive" alt="" /></div>
                                        <div class="col-xs-10 col-md-10">
                                            <div>
                                                <a href="http://www.jquery2dotnet.com/2013/10/google-style-login-page-desing-usign.html">
                                                    Google Style Login Page Design Using Bootstrap</a>
                                                <div class="mic-info">
                                                    By: <a href="#">Bhaumik Patel</a> on 2 Aug 2013
                                                </div>
                                            </div>
                                            <div class="comment-text">
                                                Awesome design
                                            </div>
                                          
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-xs-2 col-md-2">
                                            <img src="http://placehold.it/80" class="img-circle img-responsive" alt=""/>
                                            </div>
                                        <div class="col-xs-10 col-md-10">
                                            <div>
                                                <a href="http://bootsnipp.com/BhaumikPatel/snippets/Obgj">Admin Panel Quick Shortcuts</a>
                                                <div class="mic-info">
                                                    By: <a href="#">Bhaumik Patel</a> on 11 Nov 2013
                                                </div>
                                            </div>
                                            <div class="comment-text">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
                                            </div>
                                         
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-xs-2 col-md-2">
                                            <img src="http://placehold.it/80" class="img-circle img-responsive" alt=""/></div>
                                        <div class="col-xs-10 col-md-10">
                                            <div>
                                                <a href="http://bootsnipp.com/BhaumikPatel/snippets/4ldn">Cool Sign Up</a>
                                                <div class="mic-info">
                                                    By: <a href="#">Bhaumik Patel</a> on 11 Nov 2013
                                                </div>
                                            </div>
                                            <div class="comment-text">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
                                            </div>
                                          
                                        </div>
                                    </div>
                                </li>
                            </ul>
                          
                        </div>
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
        </Page>
  </div>
    );
};

export default PostDetails;