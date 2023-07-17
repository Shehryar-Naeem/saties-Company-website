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
            <h2>Why collaborate with Saties</h2>
            <p>
            At Saties, meeting our clients’ aspirations is our top priority. Our team is committed to delivering high-quality products and exceptional service
            </p>
          </div>
        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
            <img src="assets/img/about.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            <h3>WHY CHOOSE US?</h3>
            <p class="fst-italic">
            A few good reasons.
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i> We’ll make you more money with customer-focused convincing techniques.</li>
              <li><i class="bi bi-check-circle"></i> We’re chosen by professionals. We’re working for dozens of global tech companies.</li>
              <li><i class="bi bi-check-circle"></i> Before we even start working. we think about value proposition to make your brand sky-rocket.</li>
              <li><i class="bi bi-check-circle"></i> With working knowledge of online SEO and social media. we can take your message wherever it needs to go.</li>
              <li><i class="bi bi-check-circle"></i> We focus on results. For us it’s all about what adds value for you and your business.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
