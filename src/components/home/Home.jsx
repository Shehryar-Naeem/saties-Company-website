import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldHalved, faChartArea } from '@fortawesome/free-solid-svg-icons';

const HomePage=()=> {

    // Icons
    const faChartIcon = <FontAwesomeIcon icon={faChartLine} />
    const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />
    const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />

  return (
    <>
    <section id="home">
        <div className="banner_image"></div>
        <div className="container">
            <div className="banner_outer">
                <div className="col">
                    <h3 className="title">
                        WE PROMOTE YOUR <span>BUSINESS</span> through Technology
                    </h3>
                    <p>IT consulting and software development Firm that helps clients reduce cost & time and improve their business’ operational efficiencies.</p>
                    {/* <div className="btn_wrapper">
                        <a className="btn" href="/">Get Started</a>
                    </div> */}
                </div>
                <div className="col">
                    <div className="sub_banner_image">
                        <img src="banner/business-banner.jpg" alt="Banner_image" />
                    </div>
                    {/* <div className="banner_style_1">
                        {faChartIcon}
                        <h4>Bubsiness Analysis</h4>
                    </div>
                    <div className="banner_style_1 banner_style_2">
                        {faShieldIcon}
                        <h4>99.9% Success</h4>
                    </div>
                    <div className="banner_style_1 banner_style_3">
                        {faChartAreaIcon}
                        <h4>Strategy</h4>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
export default HomePage