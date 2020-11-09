import React from 'react';
import Footer from '../HomePage/Footer/Footer';
import NavBar from '../HomePage/NavBar/NavBar';
import Page from 'react-page-loading';
import HomeWithOutlogin from '../HomePage/HomeWithOutLogin/HomeWithOutlogin';
const AboutUs = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Page loader={"bar"} color={"#A9A9A9"} size={8}>
            <main id="main">
    <div class="breadcrumbs" data-aos="fade-in">
      <div class="container">
        <h2>About Us</h2>
        <p>Lex Diary is a daily work diary for lawyers that reminds a lawyer of his daily work and helps keep his chamber tidy. It helps to see running items in both Division of the Supreme Court of Bangladesh from anywhere of the world. Lex diary can also be used as a daily work diary for a subordinate court lawyer.</p>
      </div>
    </div>

    <HomeWithOutlogin></HomeWithOutlogin>

  </main>
  <Footer></Footer>
  </Page>
  </div>
    );
};

export default AboutUs;