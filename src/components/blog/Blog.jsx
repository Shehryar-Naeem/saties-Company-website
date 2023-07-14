import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <>
      {/* <section id="blog">
        <div className="container">
          <div className="blog_wrapper">
            <div className="blog_col">
              <h3>WE HELP BUSINESSES LAUNCH, GROW AND SUCCEED</h3>
              <p>
                As an innovative software development company, building powerful
                digital solutions and experiences is what we do. It is not just
                our expertise that differentiates us from others, but also our
                relationship with clients. Our approach is cross-functional
                collaboration and constant improvement. Our investment in
                clients means they don’t just receive a team of highly
                experienced developers, but also the support and insights of
                accomplished engineers and business analysts.
              </p>
              <div className="btn_wrapper">
                        <a className="btn" href="/">Get Started</a>
                    </div>
            </div>
            <div className="blog_col">
              <div className="blog_image">
              <video autoplay="autoplay" loop muted>
                <source src="contact/bloackvideo.mp4" type="video/mp4"/>
              </video>

                <img src={"blog/blog-new.png"} alt="Blog" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

<section id="about" class="about">
      <div class="container">
      <div class="section-title">
            <h2>Client</h2>
            <p>
            Most Satisfied Clients
            </p>
          </div>
        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
            <img src="assets/img/about.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            <h3>Voluptatem dignissimos provident quasi corporis</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <a href="#" class="read-more">Read More <i class="bi bi-long-arrow-right"></i></a>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
