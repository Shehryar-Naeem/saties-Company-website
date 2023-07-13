import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    // Icons
    const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

  return (
    <>
    <section id="about">
        <div class="container">
            <div className="title_headling">
                <h3>We Provides Shortage Remarkable Ideas!</h3>
                <p>Saties is an information technology, consulting, and business solutions company that helps enterprises use innovation and</p>
            </div>
            <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_icon">
                        {faBusinessIcon}
                    </div>
                    <div className="about_content">
                        <h5>Development</h5>
                        <p>World-class software engineers with excellent problem-solving skills and a deep understanding of Web, cloud, and mobile technologies. We are very fast but maintain a quality focus.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon green_icon">
                        {faChartPieIcon}
                    </div>
                    <div className="about_content">
                        <h5>Strategy</h5>
                        <p>Experienced founders who have built and managed tier-one engineering teams, raised capital, delivered products, and sold companies.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon blue_icon">
                        {faTruckFastIcon}
                    </div>
                    <div className="about_content">
                        <h5>Innovation</h5>
                        <p>We design transformational digital products and experiences that drive real business value and customer impact—so you can create innovative products faster and at scale.</p>
                    </div>
                </div>
            </div>

            <div className="about_box_details">
                <div className="about_col">
                    <div className="about_image">
                        <img src="about/business_adaptation.jpg" alt="about" className="about_main"/>
                    </div>
                    {/* <div className="img_info__box">
                        <h6 className="img_info__title">GET A PRICE QUOTE TODAY!</h6>
                        <p>Nemo enim ipsam oluptatem quia oluptas <br/>sit aspernatur aut odit aut fugit.</p>
                        
                        <a href="/"> <span>1-800-654-3210</span></a>
                    </div> */}
                </div>
                <div className="about_col more_space">
                    <h3>We have business skills that will increase your earnings</h3>
                    <p>We ensure the highest quality development services & solutions by using a wide range of the latest technologies.We have a certified and experienced team of developers that can provide cutting-edge solutions using this technology stack.</p>

                    <div className="grid_info">
                        <div className="icon">{faUserClockIcon}</div>
                        <div className="detail">
                            <h4>Start your own business in minutes</h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                        </div>
                    </div>
                    <div className="grid_info">
                        <div className="icon green_icon">{faHouseLaptopIcon}</div>
                        <div className="detail">
                            <h4>Open a business account online</h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
