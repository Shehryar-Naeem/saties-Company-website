import React from 'react'
import "./footer.css"
const FooterTop
 = () => {
  return (
    <section className="footer">
                <div className="footer-container">
                    <div className="box">
                        <h3>Quick links</h3>
                        <a>home</a>
                        <a>about</a>
                        <a>packages</a>
                        <a>review</a>
                        <a>blogs</a>
                        <a>Shop</a>
                    </div>
                    <div className="box">
                        <h3>extra links</h3>
                        <a>my acconts</a>
                        <a>my order</a>
                        <a>my wishlist</a>
                        <a>ask question</a>
                        <a>term of use</a>
                        <a>privacy</a>
                    </div>

                    <div className="box">
                        <h3>Contact Info</h3>
                        <a><i className="fas fa-phone"></i>+92 311 1404107</a>
                        <a><i className="fas fa-phone"></i>+92 315 4404025</a>
                        <a><i className="fas fa-phone"></i>+92 309 4173038</a>
                        <a><i className="fas fa-phone"></i>+92 308 4045223</a>
                        <a><i className="fas fa-phone"></i>+92 301 8606577</a>
                        <a><i className="fas fa-phone"></i>+92 321 4316744</a>
                    </div>
                    <div className="box">
                        <h3>Follow up</h3>
                        <a><i className="fas fa-facebook"></i>facebook</a>
                        <a><i className="fas fa-whatsapp"></i>Whatsapp</a>
                        <a><i className="fas fa-linkedin"></i>Linkedin</a>
                        <a><i className="fas fa-github"></i>Github</a>
                        <a><i className="fas fa-twitter"></i>Twitter</a>
                        <a><i className="fas fa-instagram"></i>Instagram</a>
                    </div>
                </div>
                <div className="credit">
                    created by <span>Mr web developer</span> | all rights reserved
                </div>
            </section>
  )
}

export default FooterTop
