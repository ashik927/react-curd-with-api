import React from 'react';

const Footer = () => {
    return (
        <div>
             <footer id="footer">

<div class="footer-top">
  <div class="container">
    <div class="row">

      <div class="col-lg-3 col-md-6 footer-contact">
        <h3>Lex Diary</h3>
        <p>
          123/2<br/>
          Middle Piakpara,<br/>
          Mirpur-1, Dhaka-1216 <br/><br/>
          <strong>Phone:</strong> +88 01713 674 552<br/>
          <strong>Email:</strong> lexdiary2020@gmail.com<br/>
        </p>
      </div>

      <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="/">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/aboutus">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">FAQ</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Lex Mall</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/lawyerslink">Lawyer's Link</a></li>
            </ul>
          </div>

      <div class="col-lg-4 col-md-6 footer-newsletter">
        <h4>Join Our Newsletter</h4>
        <p style={{color: "grey"}}>Subscribe to get our latest news and updates</p>
        <form action="" method="post">
          <input type="email" name="email"></input>
          <input type="submit" value="Subscribe"></input>
        </form>
      </div>

    </div>
  </div>
</div>

<div class="d-md-flex py-4"  style={{backgroundColor: "#0f3f70",padding: "0 60px 20px 60px",color: "white"}}>

<div class="mr-md-auto text-center text-md-left">
  <div class="copyright">
    &copy; Copyright <strong><span>Lex Diary</span></strong>. All Rights Reserved
  </div>
  <div class="credits">
   
    Designed by <a href="#">Lex Diary Team</a>
  </div>
</div>
<div class="social-links text-center text-md-right pt-3 pt-md-0">
 
  <a href="https://www.facebook.com/sellinbdofficial/" target="_blank" class="facebook" style={{backgroundColor: "skyblue"}}><i class="bx bxl-facebook"></i></a>
  
</div>
</div>

</footer>

<a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
{/* <div id="preloader"></div> */}
</div>
    );
};

export default Footer;