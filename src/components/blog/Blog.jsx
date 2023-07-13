import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <>
      <section id="blog">
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
              {/* <div className="btn_wrapper">
                        <a className="btn" href="/">Get Started</a>
                    </div> */}
            </div>
            <div className="blog_col">
              <div className="blog_image">
              <video autoplay="autoplay" loop muted>
                <source src="contact/bloackvideo.mp4" type="video/mp4"/>
              </video>

                {/* <img src={"blog/blog-new.png"} alt="Blog" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
