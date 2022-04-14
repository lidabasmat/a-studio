import * as React from 'react';
import IconLogoSource from '../images/logo.svg';
import IconMenuSource from '../images/icon-menu.svg';

const Header = () => {
  return (
    <>
      <header className="py-10">
        <div className="container-md">
          <div className="row justify-between items-center">
            <div className="col">
              <img src={IconLogoSource} className="" alt="logo icon" />
            </div>
            <div className="col hidden md:flex">
              <a href="#" className="typo-body">Home</a>
              <a href="#" className="typo-body ml-14">What We Do</a>
              <a href="#" className="typo-body ml-14">Service</a>
              <a href="#" className="typo-body ml-14">Project</a>
              <a href="#" className="typo-body ml-14">Blog</a>
              <a href="#" className="typo-body ml-14">Contact</a>
            </div>
            <div className="col md:hidden">
              <img src={IconMenuSource} className="inline-block w-6" alt="menu icon" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
