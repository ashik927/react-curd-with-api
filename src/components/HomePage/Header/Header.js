import React from 'react';

const Header = () => {
    return (
        <div>
            <section id="hero" class="d-flex justify-content-center align-items-center">
        <div class="container position-relative" data-aos="zoom-in" data-aos-delay="100">
          <h1>Lex Diary</h1>
          <h2>A Daily Work Diary For Lawyers</h2>
          <a href="/login" class="btn-get-started">Get Started</a>
        </div>
      </section>
        </div>
    );
};

export default Header;