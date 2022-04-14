import * as React from 'react';
import IconLogoSource from '../images/logo.svg';

const Footer = () => {
  return (
    <>
      <footer className="mt-24">
        <div className="container-md">
          <div className="border-y-2">
            <div className="row justify-left md:justify-between py-14">
              <div className="col">
                <img src={IconLogoSource} className="" alt="logo icon" />
                <p className="typo-small max-w-xs mt-6">
                  Leading digital agency with solid design and development expertise. We build readymade websites,
                  mobile applications, and elaborate online business services.
                </p>
              </div>
              <div className="col mt-10 md:mt-0">
                <h5 className="typo-h5">
                  What We Do
                </h5>
                <div className="mt-6">
                  <a href="#" className="typo-small">
                    Web Design
                  </a>
                </div>
                <div className="mt-2">
                  <a href="#" className="typo-small">App Design</a>
                </div>
                <div className="mt-2">
                  <a href="#" className="typo-small">Social Media</a>
                </div>
                <div className="mt-2">
                  <a href="#" className="typo-small">Manage Market</a>
                </div>
                <div className="mt-2">
                  <a href="#" className="typo-small">Analysis Project</a>
                </div>
              </div>
              <div className="col mt-10 md:mt-0">
                <h5 className="typo-h5">
                  Company
                </h5>
                <div className="mt-6">
                  <a href="#" className="typo-small">About Us</a>
                </div>
                <div className="mt-2">
                  <a href="#" className="typo-small">Career</a>
                </div>
                <div className="mt-2">
                  <a href="#" className="typo-small">Become Investor</a>
                </div>
              </div>
              <div className="col mt-10 md:mt-0">
                <h5 className="typo-h5">
                  Support
                </h5>
                <div className="mt-6">
                  <a href="#" className="typo-small">FAQ</a>
                </div>
                <div className="mt-2">
                  <a href="#" className="typo-small">Policy</a>
                </div>
                <div className="mt-2">
                  <a href="#" className="typo-small">Business</a>
                </div>
              </div>
              <div className="col mt-10 md:mt-0">
                <h5 className="typo-h5">
                  Contact
                </h5>
                <div className="mt-6">
                  <a href="#" className="typo-small">WhatsApp</a>
                </div>
                <div className="mt-2">
                  <a href="#" className="typo-small">Support 24</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="typo-small text-center text-gray-600 pt-4 pb-6">
              Copyright © 2022 Avi Yansah
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
